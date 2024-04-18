import { NextResponse } from "next/server";
import connection from "../../../helper/db";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";
export async function POST(request) {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    country,
    state,
    pincode,
    suffering,
    relation,
    govtId,
    password,
  } = await request.json();
  const unique_id = uuid();
  try {
    const rows = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "SELECT * FROM user WHERE email = ?",
        [email],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the promise if there's an error
          } else {
            resolve(results); // Resolve the promise with the query results
          }
        }
      );
    });

    // console.log(rows);
    if (rows.length !== 0) {
      return NextResponse.json({
        message: "Email Already Exists!",
        status: false,
      });
    }
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALT)
    );
    const row = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "INSERT INTO pending (id, first_name, last_name, email, phone, address, city, country, state, pincode, suffering, relation, govt_id, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          unique_id,
          firstName,
          lastName,
          email,
          phone,
          address,
          city,
          country,
          state,
          pincode,
          suffering,
          relation,
          govtId,
          hashedPassword,
        ],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the promise if there's an error
          } else {
            resolve(results); // Resolve the promise with the query results
          }
        }
      );
    });
    return NextResponse.json({
      message: "Registered Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Unable to Sign up", status: false });
  }
}
