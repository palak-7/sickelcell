import { NextResponse } from "next/server";
import connection from "../../../helper/db";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

// accept request
export async function POST(request) {
  const {
    first_name,
    last_name,
    email,
    phone,
    address,
    city,
    country,
    state,
    pincode,
    suffering,
    relation,
    govt_id,
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
            reject(err);
          } else {
            resolve(results);
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
    const row = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "INSERT INTO user (id, first_name, last_name, email, phone, address, city, country, state, pincode, suffering, relation, govt_id, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          unique_id,
          first_name,
          last_name,
          email,
          phone,
          address,
          city,
          country,
          state,
          pincode,
          suffering,
          relation,
          govt_id,
          password,
        ],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
    return NextResponse.json({
      message: "Accepted Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Unable to accept", status: false });
  }
}
