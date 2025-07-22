import express, { Router } from "express"
import "dotenv/config"
import connectDb from "./config/db";
import { loginRouter } from "./auth/login";
import { callbackRouter } from "./auth/callback";

const app = express();
const PORT = process.env.PORT || 4000;


connectDb();
const apiRouter: Router = express.Router();

//ADD YOUR ROUTES HERE
apiRouter.use("/auth", loginRouter)
apiRouter.use("/auth", callbackRouter)

app.use("/api", apiRouter)

app.get("/test", (_req, res) => {
  try {
    res.status(200).json({ message: "LGTM" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal Server Error" })
  }
})

app.listen(PORT, () => {
  console.log("Listen on port: ", PORT)
})
