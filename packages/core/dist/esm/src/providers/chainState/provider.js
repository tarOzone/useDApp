import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useReducer } from 'react';
import { useDebouncePair, useEthers } from '../../hooks';
import { useBlockNumber } from '../blockNumber/context';
import { ChainStateContext } from './context';
import { chainStateReducer } from './chainStateReducer';
import { callsReducer } from './callsReducer';
import { multicall } from './multicall';
export function ChainStateProvider({ children, multicallAddresses }) {
    const { library, chainId } = useEthers();
    const blockNumber = useBlockNumber();
    const [calls, dispatchCalls] = useReducer(callsReducer, []);
    const [state, dispatchState] = useReducer(chainStateReducer, {});
    const addCalls = useCallback((calls) => {
        dispatchCalls({ type: 'ADD_CALLS', calls });
    }, [dispatchCalls]);
    const removeCalls = useCallback((calls) => {
        dispatchCalls({ type: 'REMOVE_CALLS', calls });
    }, [dispatchCalls]);
    const [debouncedCalls, debouncedId] = useDebouncePair(calls, chainId, 50);
    const uniqueCalls = debouncedId === chainId ? getUnique(debouncedCalls) : [];
    const multicallAddress = chainId !== undefined ? multicallAddresses[chainId] : undefined;
    useEffect(() => {
        if (library && blockNumber !== undefined && chainId !== undefined) {
            if (!multicallAddress) {
                console.error(`Missing multicall address for chain id ${chainId}`);
                return;
            }
            multicall(library, multicallAddress, blockNumber, uniqueCalls)
                .then((state) => dispatchState({ type: 'FETCH_SUCCESS', blockNumber, chainId, state }))
                .catch((error) => {
                console.error(error);
                dispatchState({ type: 'FETCH_ERROR', blockNumber, chainId, error });
            });
        }
    }, [library, blockNumber, chainId, multicallAddress, JSON.stringify(uniqueCalls)]);
    const value = chainId !== undefined ? state[chainId] : undefined;
    const provided = { value, multicallAddress, addCalls, removeCalls };
    return _jsx(ChainStateContext.Provider, { value: provided, children: children }, void 0);
}
function getUnique(requests) {
    const unique = [];
    for (const request of requests) {
        if (!unique.find((x) => x.address === request.address && x.data === request.data)) {
            unique.push(request);
        }
    }
    return unique;
}
//# sourceMappingURL=provider.js.map