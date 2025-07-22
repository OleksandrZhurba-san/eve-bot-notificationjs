import { Request, Response } from "express"
import { buildEsiAuthUrl } from "../../common/esi"

/* const clientId: string | undefined = process.env.CLIENT_ID
const callbackUrl: string | undefined = process.env.CALLBACK_URL
const clientSecret: string | undefined = process.env.CLIENT_SECRET*/
const scope: string = "publicData"
const state: string = "randon-string"

export const handleEsiLogin = async (_req: Request, res: Response): Promise<void> => {
  try {
    if (!process.env.CLIENT_ID || !process.env.CALLBACK_URL || !process.env.CLIENT_SECRET) {
      console.log(process.env.CLIENT_ID, process.env.CALLBACK_URL, process.env.CLIENT_SECRET)
      console.error("Missing env params");
      return;
    }

    const esiAuthUrl: string = buildEsiAuthUrl(process.env.CLIENT_ID, process.env.CALLBACK_URL, state, scope);
    console.log(esiAuthUrl);

    res.redirect(esiAuthUrl);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server Error" })
  }
}
