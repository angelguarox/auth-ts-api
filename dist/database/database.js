"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config/config"));
mongoose_1.default.connect(config_1.default.database.URI, config_1.default.options)
    .then(db => console.log('MONGODB IS CONNECTED'))
    .catch(e => console.error('ERROR, NOT CONNECTED AT MONGODB', e));
//# sourceMappingURL=database.js.map