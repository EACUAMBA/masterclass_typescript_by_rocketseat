"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UtilizadorController_1 = __importDefault(require("./controllers/UtilizadorController"));
const routes = (0, express_1.Router)();
routes.get('users', (req, res) => {
    return UtilizadorController_1.default.index(req, res);
});
exports.default = routes;
