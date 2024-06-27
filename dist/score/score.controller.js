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
exports.ScoreController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const score_service_1 = require("./score.service");
const create_score_dto_1 = require("./dto/create-score.dto");
const auth_guard_1 = require("../auth/guard/auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ScoreController = class ScoreController {
    constructor(scoreService) {
        this.scoreService = scoreService;
    }
    create(createScoreDto) {
        return this.scoreService.create(createScoreDto);
    }
    findbyUser(email) {
        return this.scoreService.findbyUser(email);
    }
    findOne(game) {
        return this.scoreService.findbyGame(game);
    }
};
exports.ScoreController = ScoreController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_score_dto_1.CreateScoreDto]),
    __metadata("design:returntype", void 0)
], ScoreController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':email'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScoreController.prototype, "findbyUser", null);
__decorate([
    (0, common_1.Get)('game/:game'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Param)('game')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScoreController.prototype, "findOne", null);
exports.ScoreController = ScoreController = __decorate([
    (0, swagger_1.ApiTags)('Scores'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('score'),
    __metadata("design:paramtypes", [score_service_1.ScoreService])
], ScoreController);
//# sourceMappingURL=score.controller.js.map