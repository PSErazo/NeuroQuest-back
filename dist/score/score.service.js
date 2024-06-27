"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const score_schema_1 = require("./schemas/score.schema");
const mongoose_2 = require("mongoose");
let ScoreService = class ScoreService {
    constructor(scoreModule) {
        this.scoreModule = scoreModule;
    }
    create(createScoreDto) {
        return this.scoreModule.create({ ...createScoreDto, date: new Date() });
    }
    async findbyUser(email) {
        console.log("entrando al servicio", email);
        const scores = await this.scoreModule.find({ email: email }).exec();
        console.log("entrando al servicio", scores);
        return scores;
    }
    async findbyGame(game) {
        console.log("entrando al servicio", game);
        const scoreGame = await this.scoreModule.find({ game: game }).exec();
        console.log("entrando al servicio", scoreGame);
        return scoreGame;
    }
};
exports.ScoreService = ScoreService;
exports.ScoreService = ScoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(score_schema_1.Score.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ScoreService);
//# sourceMappingURL=score.service.js.map