import { Request, Response } from "express";

export const handleEsiCallback = async (req: Request, res: Response): Promise<void> => {
  try {
    //example: publicData&state=random-string
    const { code, state } = req.query;
    
    console.log("code: ", code);
    console.log("state: ", state);

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
