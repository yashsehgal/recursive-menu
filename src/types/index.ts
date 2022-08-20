
type MenuItemProps = {
  label: React.ReactNode;
  children?: MenuItemProps[]
  spacing?: number;
};

type MenuListProps = {
  data: MenuListProps[];
};

export { MenuItemProps, MenuListProps };