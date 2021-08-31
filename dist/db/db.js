"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var dbName = process.env.DB_NAME;
var dbUser = process.env.DB_USER;
var dbPassword = process.env.DB_PASSWORD;
var dbHost = process.env.DB_HOST;
var sequelize = new sequelize_1.Sequelize("postgres://" + dbUser + ":" + dbPassword + "@localhost:" + dbHost + "/" + dbName);
exports.default = sequelize;
