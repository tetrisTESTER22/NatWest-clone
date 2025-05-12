import React from "react";

export async function loadTenantAccount(tenant: string): Promise<any | null> {
  try {
    const response = await fetch(`/data/${tenant}/account.json`);
    if (!response.ok) throw new Error('Не удалось загрузить account.json');
    return await response.json();
  } catch (error) {
    console.error('Ошибка при загрузке аккаунта:', error);
    return null;
  }
}

export async function loadTenantTransactions(tenant: string): Promise<any[]> {
  try {
    const response = await fetch(`/data/${tenant}/transactions.json`);
    if (!response.ok) throw new Error('Не удалось загрузить transactions.json');
    return await response.json();
  } catch (error) {
    console.error('Ошибка при загрузке транзакций:', error);
    return [];
  }
}
