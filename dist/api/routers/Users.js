"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../controllers/users"));
var UserRouter = express_1.default.Router();
UserRouter.get('/YourAge/:doB', users_1.default);
exports.default = UserRouter;
