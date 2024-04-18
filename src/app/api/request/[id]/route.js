import { NextResponse } from "next/server";
import connection from "../../../../helper/db";

export async function DELETE(request, { params }) {
  const rid = params.id;
  try {
    const result = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "DELETE FROM pending WHERE id = ?;",
        [rid],
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
      message: "Request Removed",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Unable to Remove Request",
      status: false,
    });
  }
}
