"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    database: {
        URI: 'mongodb://authtsapidb/authtsapi-db'
    },
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    },
    server: {
        PORT: process.env.PORT || 4000
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map