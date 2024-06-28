"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScoreDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_score_dto_1 = require("./create-score.dto");
class UpdateScoreDto extends (0, mapped_types_1.PartialType)(create_score_dto_1.CreateScoreDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateScoreDto = UpdateScoreDto;
//# sourceMappingURL=update-score.dto.js.map