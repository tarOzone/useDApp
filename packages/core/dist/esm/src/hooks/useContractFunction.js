import { useEthers } from './useEthers';
import { usePromiseTransaction } from './usePromiseTransaction';
export function connectContractToSigner(contract, options, library) {
    if (contract.signer) {
        return contract;
    }
    if (options === null || options === void 0 ? void 0 : options.signer) {
        return contract.connect(options.signer);
    }
    if (library === null || library === void 0 ? void 0 : library.getSigner()) {
        return contract.connect(library.getSigner());
    }
    throw new TypeError('No signer available in contract, options or library');
}
export function useContractFunction(contract, functionName, options) {
    const { library, chainId } = useEthers();
    const { promiseTransaction, state } = usePromiseTransaction(chainId, options);
    const send = async (...args) => {
        const contractWithSigner = connectContractToSigner(contract, options, library);
        await promiseTransaction(contractWithSigner[functionName](...args));
    };
    return { send, state };
}
//# sourceMappingURL=useContractFunction.js.map