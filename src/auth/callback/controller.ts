import { Request, Response } from "express";

export const handleEsiCallback = async (req: Request, res: Response): Promise<void> => {
  try {
    const { code, state } = req.query;

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
