import { connectToDatabase } from "../../../lib/db";

import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const cart = req.body;

  const session = await getSession({ req: req });

  if (!session) {
    res.status(422).json({
      message: "user not authinticated",
    });
    return;
  }

  const { client, db } = await connectToDatabase();

  try {
    const updatedCart = db
      .collection("users")
      .updateOne({ email: session.user.email }, { $set: { cart } });
    res.status(201).json({ message: "Cart Updated" });
    return;
  } catch (error) {
    res.status(401).json({ message: "something went wrong" });
    return;
  }
}

export default handler;
