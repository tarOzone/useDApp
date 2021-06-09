import { TransactionOptions } from '../../src';
import { Contract } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';
export declare function connectContractToSigner(contract: Contract, options?: TransactionOptions, library?: Web3Provider): Contract;
export declare function useContractFunction(contract: Contract, functionName: string, options?: TransactionOptions): {
    send: (...args: any[]) => Promise<void>;
    state: import("..").TransactionStatus;
};
//# sourceMappingURL=useContractFunction.d.ts.map