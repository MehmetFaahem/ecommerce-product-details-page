export interface NavLinkProps {
  text: string;
  hasDropdown?: boolean;
  href: string;
}

export interface CurrencyProps {
  code: string;
  onSelect: (code: string) => void;
}

export interface LanguageProps {
  code: string;
  flag: string;
  onSelect: (code: string) => void;
}

export interface CartItemProps {
  count: number;
  total: string;
  onCartClick: () => void;
}

export interface BreadcrumbItemProps {
  text: string;
  isActive?: boolean;
  isLast?: boolean;
  href: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
}

export interface HeaderProps {
  onLanguageChange: (code: string) => void;
  onCurrencyChange: (code: string) => void;
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
  onCartClick: () => void;
  cartCount: number;
  cartTotal: string;
  currentLanguage: string;
  currentCurrency: string;
}
