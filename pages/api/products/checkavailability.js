import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { productArtNo, productSize } = data;

  if (!productArtNo || !productSize) {
    res.status(422).json({ message: "something went wrong" });
    return;
  }

  try {
    const { client, db } = await connectToDatabase();
    const productData = await db
      .collection("products")
      .findOne({ artNo: productArtNo });
    const isAvailable = productData.availableSizes.includes(productSize);
    if (isAvailable) {
      res.status(201).json({ message: "product is available" });
      return;
    } else {
      throw new error("product is not available");
    }
  } catch (error) {
    res.status(422).json({ message: error.message || "something went wrong" });
  }
}

export default handler;
