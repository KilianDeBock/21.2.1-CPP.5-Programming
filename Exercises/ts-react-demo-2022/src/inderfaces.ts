export interface ProductCategory {
  name: string;
}

export interface Product {
  name: string;
  price: number;
  categories?: ProductCategory[];
}

export interface Account {
  id: string;
  email: string;
}

export interface AccountsData {
  accounts: Account[];
}

export interface AccountVars {
  id: string;
}
