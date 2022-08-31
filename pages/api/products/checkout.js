import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { orderData } = data;

  if (!orderData) {
    res.status(422).json({ message: "something went wrong" });
    return;
  }

  try {
    const { client, db } = await connectToDatabase();
    const setOrder = await db.collection("orders").insertOne(orderData);
    res.status(200).json({ message: "confirmed order" });
    return;
  } catch (error) {
    res.status(422).json({ message: error.message || "something went wrong" });
  }
}

export default handler;
