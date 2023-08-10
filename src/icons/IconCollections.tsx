import { Icon } from "./Icon";
import { IconProps } from "./IconProps";

export type Icons = { [key: string]: any };

const icons = {
  Dashboard: (
    <>
      <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M13.45 11.55l2.05 -2.05"></path>
      <path d="M6.4 20a9 9 0 1 1 11.2 0z"></path>
    </>
  ),
  TransferIn: (
    <>
      <path d="M4 18v3h16v-14l-8 -4l-8 4v3"></path>
      <path d="M4 14h9"></path>
      <path d="M10 11l3 3l-3 3"></path>
    </>
  ),
  TransferOut: (
    <>
      <path d="M4 19v2h16v-14l-8 -4l-8 4v2"></path>
      <path d="M13 14h-9"></path>
      <path d="M7 11l-3 3l3 3"></path>
    </>
  ),
  BuildingBank: (
    <>
      <path d="M3 21l18 0"></path>
      <path d="M3 10l18 0"></path>
      <path d="M5 6l7 -3l7 3"></path>
      <path d="M4 10l0 11"></path>
      <path d="M20 10l0 11"></path>
      <path d="M8 14l0 3"></path>
      <path d="M12 14l0 3"></path>
      <path d="M16 14l0 3"></path>
    </>
  ),
  Scale: (
    <>
      <path d="M7 20l10 0"></path>
      <path d="M6 6l6 -1l6 1"></path>
      <path d="M12 3l0 17"></path>
      <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
      <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
    </>
  ),
  CloudDollar: (
    <>
      <path d="M13.5 18.004h-6.843c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.28 1.023 1.957 2.51 1.873 4.027"></path>
      <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path>
      <path d="M19 21v1m0 -8v1"></path>
    </>
  ),
  UserDollar: (
    <>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h3"></path>
      <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path>
      <path d="M19 21v1m0 -8v1"></path>
    </>
  ),
  ChartArea: (
    <>
      <path d="M4 19l16 0"></path>
      <path d="M4 15l4 -6l4 2l4 -5l4 4l0 5l-16 0"></path>
    </>
  ),
  Settings: (
    <>
      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
    </>
  ),
  ThreeSixty: (
    <>
      <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4"></path>
      <path d="M9 13l3 3l-3 3"></path>
    </>
  ),
  ChevronRight: (
    <>
      <path d="M9 6l6 6l-6 6"></path>
    </>
  ),
  ChevronDown: (
    <>
      <path d="M6 9l6 6l6 -6"></path>
    </>
  ),
  UserCog: (
    <>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
    </>
  ),
  Rabbit: (
    <>
      <path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 0 -6.344a4.483 4.483 0 0 0 -6.342 0c-2.86 2.861 -6.347 12.689 -6.347 12.689z"></path>
      <path d="M9 13l-1.5 -1.5"></path>
      <path d="M16 14l-2 -2"></path>
      <path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z"></path>
      <path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z"></path>
    </>
  )
} satisfies Icons;

const constructIcons = <T extends Icons>(icons: T): { [P in keyof T]: typeof Icon } =>
  Object.keys(icons)
    .map(key => ({
      key,
      icon: (p: IconProps) => (
        <Icon {...p}>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          {icons[key]}
        </Icon>
      )
    }))
    .reduce((pv, v) => ({ ...pv, [v.key]: v.icon }), {} as any);

export default constructIcons(icons);
