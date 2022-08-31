import { connectToDatabase } from "../../../lib/db";

import { getSession } from "next-auth/react";

const mongoose = require("mongoose");

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(422).json({
      message: "Something went wrong",
    });
    return;
  }

  const data = req.body;

  const { orderId } = data;

  const mongoId = mongoose.Types.ObjectId(orderId);

  try {
    const { client, db } = await connectToDatabase();

    const deleteOrder = await db
      .collection("orders")
      .deleteOne({ _id: mongoId });

    res.status(200).json({ message: "order deleted" });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      message: "Something went wrong",
    });
  }
}

export default handler;
