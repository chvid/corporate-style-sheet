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
    icon: <icons.Dashboard />,
    link: `~/dashboard`
  },
  {
    label: "Sales",
    icon: <icons.TransferIn />,
    children: [
      { label: "Invoices", link: `~/sales/invoices` },
      { label: "Customers", link: `~/sales/customers` },
      { label: "Products & Services", link: `~/sales/products` }
    ]
  },
  {
    label: "Purchases",
    icon: <icons.TransferOut />,
    children: [
      { label: "Bills", link: `~/purchases/bills` },
      { label: "Vendors", link: `~/purchases/vendors` },
      { label: "Products & Services", link: `~/purchases/products` }
    ]
  },
  {
    label: "Banking",
    icon: <icons.BuildingBank />,
    children: [
      { label: "Bank Accounts", link: `~/banking/accounts` },
      { label: "Bank Statements", link: `~/banking/statements` }
    ]
  },
  {
    label: "Accounting",
    icon: <icons.Scale />,
    children: [
      { label: "Transactions", link: `~/accounting/transactions` },
      { label: "Accounts", link: `~/accounting/accounts` },
      { label: "Accounting Periods", link: `~/accounting/periods` }
    ]
  },
  {
    label: "Sales Tax",
    icon: <icons.CloudDollar />,
    link: `~/sales-tax`
  },
  {
    label: "Salary",
    icon: <icons.UserDollar />,
    link: `~/salary`
  },
  {
    label: "Reports",
    icon: <icons.ChartArea />,
    link: `~/reports`
  },
  {
    label: "Settings",
    icon: <icons.Settings />,
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
        <div className="flex-right">{element.children && (isOpen ? <icons.ChevronDown /> : <icons.ChevronRight />)}</div>
      </li>
      {element.children && isOpen && element.children.map((c, i) => <NavigationElement element={c} key={i} />)}
    </ul>
  );
};

export const NavigationMenu = () => {
  return (
    <nav className="menu">
      {navigation.map((e, i) => (
        <NavigationElement element={e} key={i} />
      ))}
    </nav>
  );
};
