import { ReactElement, useState } from "react";
import icons from "../icons/IconCollections";

type NavigationItem = {
  label: string;
  link?: string;
  children?: NavigationItem[];
  icon?: ReactElement;
};

const navigation: NavigationItem[] = [
  {
    label: "Dashboard",
    icon: <icons.Dashboard float="left" />,
    link: `~/dashboard`
  },
  {
    label: "Sales",
    icon: <icons.TransferIn float="left" />,
    children: [
      { label: "Invoices", link: `~/sales/invoices` },
      { label: "Customers", link: `~/sales/customers` },
      { label: "Products & Services", link: `~/sales/products` }
    ]
  },
  {
    label: "Purchases",
    icon: <icons.TransferOut float="left" />,
    children: [
      { label: "Bills", link: `~/purchases/bills` },
      { label: "Vendors", link: `~/purchases/vendors` },
      { label: "Products & Services", link: `~/purchases/products` }
    ]
  },
  {
    label: "Banking",
    icon: <icons.BuildingBank float="left" />,
    children: [
      { label: "Bank Accounts", link: `~/banking/accounts` },
      { label: "Bank Statements", link: `~/banking/statements` }
    ]
  },
  {
    label: "Accounting",
    icon: <icons.Scale float="left" />,
    children: [
      { label: "Transactions", link: `~/accounting/transactions` },
      { label: "Accounts", link: `~/accounting/accounts` },
      { label: "Accounting Periods", link: `~/accounting/periods` }
    ]
  },
  {
    label: "Sales Tax",
    icon: <icons.CloudDollar float="left" />,
    link: `~/sales-tax`
  },
  {
    label: "Salary",
    icon: <icons.UserDollar float="left" />,
    link: `~/salary`
  },
  {
    label: "Reports",
    icon: <icons.ChartArea float="left" />,
    link: `~/reports`
  },
  {
    label: "Settings",
    icon: <icons.Settings float="left" />,
    children: [
      { label: "Companies", link: `~/settings/companies` },
      { label: "Create New Company", link: `~/settings/create-new-company` }
    ]
  }
];

const NavigationElement: React.FC<{ element: NavigationItem }> = ({ element }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul>
      <li onClick={() => element.children && setIsOpen(!isOpen)}>
        {element.icon}
        {element.label}
        {element.children && (isOpen ? <icons.ChevronDown float="right" /> : <icons.ChevronRight float="right" />)}
      </li>
      {element.children && isOpen && element.children.map(c => <NavigationElement element={c} />)}
    </ul>
  );
};

export const NavigationMenu = () => {
  return (
    <nav className="menu">
      {navigation.map(e => (
        <NavigationElement element={e} />
      ))}
    </nav>
  );
};
