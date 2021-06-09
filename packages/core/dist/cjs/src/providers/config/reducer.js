"use strict";
exports.__esModule = true;
exports.configReducer = void 0;
var lodash_1 = require("lodash");
function configReducer(state, action) {
    return lodash_1.merge(state, action);
}
exports.configReducer = configReducer;
//# sourceMappingURL=reducer.js.map