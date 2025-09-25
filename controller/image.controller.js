// controller/image.controller.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Upload image
export const uploadImage = (upload) => [
  upload.single("image"),
  async (req, res) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ success: false, error: "No file uploaded" });
      }

      // Save in DB
      const image = await prisma.image.create({
        data: {
          url: `/uploads/${file.filename}`, // relative path
          publicId: file.filename,
        },
      });

      res.json({ success: true, image });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Upload failed" });
    }
  },
];

// Fetch all images
export const getImages = async (req, res) => {
  try {
    const images = await prisma.image.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
};
