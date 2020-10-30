"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config/config"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const app = express_1.default();
app.set('port', config_1.default.server.PORT);
app.use(morgan_1.default('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(auth_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map