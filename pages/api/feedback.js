import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { name, email, message } = data;

  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim().length === 0 ||
    !message ||
    message.trim().length === 0
  ) {
    res.status(422).json({
      message: "Invalid input !",
    });
    return;
  }

  try {
    const { client, db } = await connectToDatabase();

    const result = await db.collection("feedback").insertOne({
      name,
      email,
      message,
    });
    res.status(201).json({ message: "Message sent succesfully!" });
  } catch (error) {
    res.status(422).json({
      message: "something went wrong",
    });
  }
}

export default handler;
