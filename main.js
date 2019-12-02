import { dashboard } from './scripts/dashboard/dashboard.js';
import { transactions } from './scripts/transactions/transactions.js';
import { profile } from './scripts/profile/profile.js';

dashboard.initializeDashboard();
transactions.switchToTransactionsOnClick();
profile.switchToProfileOnClick();
