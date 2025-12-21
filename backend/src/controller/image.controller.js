import { searchImage } from "../sevices/unsplash.service.js";

export const getImage = async (req, res, next) => {
  try {
    const { country } = req.params;

    const image = await searchImage(country);

    if (!image) {
      return res.status(404).json({ error: "No image found" });
    }

    res.json(image);
  } catch (err) {
    next(err);
  }
};
