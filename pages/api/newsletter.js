import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email } = data;

  if (!email || !email.includes("@")) {
    res.status(422).json({
      message: "Invalid input !",
    });
    return;
  }

  const { client, db } = await connectToDatabase();

  const existingUser = await db
    .collection("newsletterSubscribers")
    .findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "e-mail exists already!" });
    return;
  }

  const result = await db.collection("newsletterSubscribers").insertOne({
    email: email,
  });

  res.status(201).json({ message: "Created user!" });
}

export default handler;
