import { Router, Request, Response } from "express";
import { allStates, getByStateID } from "../services/states.service";

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

userRouter.get("/:stateID", async (req: Request, res: Response) => {
  try {
    const stateID = req.params['stateID'];
    const states = await getByStateID(stateID);
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