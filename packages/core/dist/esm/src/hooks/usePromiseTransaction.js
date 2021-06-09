import { useState } from 'react';
import { useTransactionsContext } from '../providers';
export function usePromiseTransaction(chainId, options) {
    const [state, setState] = useState({ status: 'None' });
    const { addTransaction } = useTransactionsContext();
    const promiseTransaction = async (transactionPromise) => {
        var _a;
        if (!chainId)
            return;
        let transaction = undefined;
        try {
            transaction = await transactionPromise;
            setState({ transaction, status: 'Mining', chainId });
            addTransaction({
                transaction,
                submittedAt: Date.now(),
                transactionName: options === null || options === void 0 ? void 0 : options.transactionName,
            });
            const receipt = await transaction.wait();
            setState({ receipt, transaction, status: 'Success', chainId });
        }
        catch (e) {
            const errorMessage = (_a = e.reason) !== null && _a !== void 0 ? _a : e.message;
            if (transaction) {
                setState({ status: 'Fail', transaction, receipt: e.receipt, errorMessage, chainId });
            }
            else {
                setState({ status: 'Exception', errorMessage, chainId });
            }
        }
    };
    return { promiseTransaction, state };
}
//# sourceMappingURL=usePromiseTransaction.js.map