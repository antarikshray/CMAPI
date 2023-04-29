import { Router, Request, Response } from "express";
import { allStates } from "../controller/states.controller";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const states = await allStates();
    res.send(states);
  } catch (e) {
    res.send({
      success: false,
      error: "Internal Server Error",
      errorMessage: "Couldn't fetch states"
    })
  }
});

export default userRouter;