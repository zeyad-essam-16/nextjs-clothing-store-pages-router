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

    const userOrders = await db
      .collection("orders")
      .find({ userEmail: session.user.email })
      .toArray();

    res.status(200).json({ orders: userOrders });
  } catch (error) {
    res.status(422).json({
      message: "Something went wrong",
    });
  }
}

export default handler;
