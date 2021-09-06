"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../controllers/users"));
const UserRouter = express_1.default.Router();
const asyncHandler_1 = __importDefault(require("../../asyncHandler/asyncHandler"));
UserRouter.get('/YourAge/:doB', asyncHandler_1.default(users_1.default));
exports.default = UserRouter;
