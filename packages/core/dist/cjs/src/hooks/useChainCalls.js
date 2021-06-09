"use strict";
exports.__esModule = true;
exports.useChainCall = exports.useChainCalls = void 0;
var react_1 = require("react");
var context_1 = require("../providers/chainState/context");
function useChainCalls(calls) {
    var _a = react_1.useContext(context_1.ChainStateContext), addCalls = _a.addCalls, removeCalls = _a.removeCalls, value = _a.value;
    react_1.useEffect(function () {
        var filteredCalls = calls.filter(Boolean);
        addCalls(filteredCalls);
        return function () { return removeCalls(filteredCalls); };
    }, [JSON.stringify(calls), addCalls, removeCalls]);
    return calls.map(function (call) { var _a, _b; return call && ((_b = (_a = value === null || value === void 0 ? void 0 : value.state) === null || _a === void 0 ? void 0 : _a[call.address]) === null || _b === void 0 ? void 0 : _b[call.data]); });
}
exports.useChainCalls = useChainCalls;
function useChainCall(call) {
    return useChainCalls([call])[0];
}
exports.useChainCall = useChainCall;
//# sourceMappingURL=useChainCalls.js.map