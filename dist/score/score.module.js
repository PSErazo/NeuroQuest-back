"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreModule = void 0;
const common_1 = require("@nestjs/common");
const score_service_1 = require("./score.service");
const score_controller_1 = require("./score.controller");
const mongoose_1 = require("@nestjs/mongoose");
const score_schema_1 = require("./schemas/score.schema");
let ScoreModule = class ScoreModule {
};
exports.ScoreModule = ScoreModule;
exports.ScoreModule = ScoreModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: score_schema_1.Score.name, schema: score_schema_1.ScoreSchema }])],
        controllers: [score_controller_1.ScoreController],
        providers: [score_service_1.ScoreService],
    })
], ScoreModule);
//# sourceMappingURL=score.module.js.map