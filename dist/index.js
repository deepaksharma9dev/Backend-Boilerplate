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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db"));
const Users_1 = __importDefault(require("./api/routers/Users"));
const errorHandler_1 = __importDefault(require("./errors/errorHandler"));
const app = express_1.default();
app.use('/api/users', Users_1.default);
app.use(errorHandler_1.default);
app.listen(process.env.PORT || 6000, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('server is running');
    try {
        yield db_1.default.authenticate();
        console.log('database has connected');
    }
    catch (err) {
        console.error(err.message);
    }
}));
