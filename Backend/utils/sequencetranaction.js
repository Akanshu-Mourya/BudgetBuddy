// import { Income } from '../models/income.models.js';

// const generateTransactionId = async () => {
//     try {
//         const lastIncome = await Income.findOne().sort({ transactionId: -1 });
//         const nextTransactionId = lastIncome ? lastIncome.transactionId + 1 : 1;
//         return nextTransactionId;
//     } catch (error) {
//         console.error('Error generating transactionId:', error);
//         throw new Error('Unable to generate transactionId');
//     }
// };
// export default generateTransactionId;
