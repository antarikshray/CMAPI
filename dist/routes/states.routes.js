"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const states_service_1 = require("../services/states.service");
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const states = yield (0, states_service_1.allStates)();
        res.send(states);
    }
    catch (e) {
        res.send({
            success: false,
            error: "Internal Server Error",
            errorMessage: "Couldn't fetch states"
        });
    }
}));
userRouter.get("/:stateID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stateID = req.params['stateID'];
        const states = yield (0, states_service_1.getByStateID)(stateID);
        res.send(states);
    }
    catch (e) {
        res.send({
            success: false,
            error: "Internal Server Error",
            errorMessage: "Couldn't fetch states"
        });
    }
}));
exports.default = userRouter;
