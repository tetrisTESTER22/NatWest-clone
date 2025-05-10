import accountD1 from '../data/ad1/account.json';
import accountD2 from '../data/ad2/account.json';
import accountD3 from '../data/ad3/account.json';
import accountD4 from '../data/ad4/account.json';
import accountD5 from '../data/ad5/account.json';
import accountD6 from '../data/ad6/account.json';

import transactionsD1 from '../data/ad1/transactions.json';
import transactionsD2 from '../data/ad2/transactions.json';
import transactionsD3 from '../data/ad3/transactions.json';
import transactionsD4 from '../data/ad4/transactions.json';
import transactionsD5 from '../data/ad5/transactions.json';
import transactionsD6 from '../data/ad6/transactions.json';

const accountMap: Record<string, any> = {
  ad1: accountD1,  
  ad2: accountD2,  
  ad3: accountD3,  
  ad4: accountD4, 
  ad5: accountD5,  
  ad6: accountD6, 
};

const transactionsMap: Record<string, any[]> = {
  ad1: transactionsD1,
  ad2: transactionsD2,
  ad3: transactionsD3,  
  ad4: transactionsD4, 
  ad5: transactionsD5,  
  ad6: transactionsD6, 
};

export function loadTenantAccount(tenant: string) {
  return accountMap[tenant] || null;
}

export function loadTenantTransactions(tenant: string) {
  return transactionsMap[tenant] || [];
}
