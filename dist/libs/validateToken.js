"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
;
exports.verifyToken = (req, res, next) => {
    const token = req.header('auth');
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    else {
        const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || 'OtherTokenTest');
        req.userId = payload._id;
    }
    next();
};
//# sourceMappingURL=validateToken.js.map