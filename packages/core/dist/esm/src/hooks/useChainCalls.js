import { useContext, useEffect } from 'react';
import { ChainStateContext } from '../providers/chainState/context';
export function useChainCalls(calls) {
    const { addCalls, removeCalls, value } = useContext(ChainStateContext);
    useEffect(() => {
        const filteredCalls = calls.filter(Boolean);
        addCalls(filteredCalls);
        return () => removeCalls(filteredCalls);
    }, [JSON.stringify(calls), addCalls, removeCalls]);
    return calls.map((call) => { var _a, _b; return call && ((_b = (_a = value === null || value === void 0 ? void 0 : value.state) === null || _a === void 0 ? void 0 : _a[call.address]) === null || _b === void 0 ? void 0 : _b[call.data]); });
}
export function useChainCall(call) {
    return useChainCalls([call])[0];
}
//# sourceMappingURL=useChainCalls.js.map