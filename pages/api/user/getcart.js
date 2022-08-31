import { connectToDatabase } from "../../../lib/db";

import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(422).json({
      message: "Something went wrong",
    });
    return;
  }

  try {
    const { client, db } = await connectToDatabase();

    const userData = await db
      .collection("users")
      .findOne({ email: session.user.email });

    res.status(201).json(userData.cart);
    return;
  } catch (error) {
    res.status(422).json({
      message: "Something went wrong",
    });
  }
}

export default handler;
