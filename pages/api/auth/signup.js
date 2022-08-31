import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password, name } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7 ||
    !name ||
    name.trim().length === 0
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }

  const { client, db } = await connectToDatabase();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
    name: name,
  });

  res.status(201).json({ message: "Created user!" });
}

export default handler;
