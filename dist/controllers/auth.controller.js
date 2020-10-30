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
exports.profile = exports.signin = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_models_1 = __importDefault(require("../models/user.models"));
exports.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_models_1.default({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = yield user.encryptPassword(user.password);
    const newUser = yield user.save();
    const token = jsonwebtoken_1.default.sign({ _id: newUser._id }, process.env.TOKEN_SECRET || 'OtherTokenTest', { expiresIn: 60 * 60 * 24 });
    res.header('auth', token).json({ message: 'User created successfully' });
});
exports.signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_models_1.default.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ message: 'Email or password is wrong' });
    }
    const correctPassword = yield user.validatePassword(req.body.password);
    if (!correctPassword) {
        return res.status(400).json({ message: 'Email or password is wrong' });
    }
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'OtherTokenTest', { expiresIn: 60 * 60 * 24 });
    res.header('auth', token).json({ message: 'User logged successfully' });
});
exports.profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_models_1.default.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json({ message: 'Nt user found' });
    }
    else {
        res.json({ message: 'Test', user });
    }
});
//# sourceMappingURL=auth.controller.js.map