"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validateToken_1 = require("../libs/validateToken");
const router = express_1.Router();
router.post('/api/auth/signup', auth_controller_1.signup);
router.post('/api/auth/signin', auth_controller_1.signin);
router.get('/api/auth/profile', validateToken_1.verifyToken, auth_controller_1.profile);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map