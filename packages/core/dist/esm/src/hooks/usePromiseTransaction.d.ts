import { TransactionResponse } from '@ethersproject/abstract-provider';
import { TransactionStatus, TransactionOptions } from '../../src';
export declare function usePromiseTransaction(chainId: number | undefined, options?: TransactionOptions): {
    promiseTransaction: (transactionPromise: Promise<TransactionResponse>) => Promise<void>;
    state: TransactionStatus;
};
//# sourceMappingURL=usePromiseTransaction.d.ts.map