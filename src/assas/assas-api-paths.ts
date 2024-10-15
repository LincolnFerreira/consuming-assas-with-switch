export const AssasApiPaths = {
  CUSTOMERS: {
    BASE: '/customers',
    ID: (id: string) => `/customers/${id}`,
    NOTIFICATIONS: (id: string) => `/customers/${id}/notifications`,
    RESTORE: (id: string) => `/customers/${id}/restore`,
  },
  PAYMENTS: {
    BASE: '/payments',
    ID: (id: string) => `/payments/${id}`,
  },
} as const;
