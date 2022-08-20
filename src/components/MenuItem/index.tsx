import React from "react";
import { MenuItemProps } from "../../types";


export default function MenuItem({ label, children, spacing=0 }:MenuItemProps) {
  const labelItemClass = `px-4 py-2 rounded-md bg-gray-700 text-white font-semibold text-base font-sans`;
  return (
    <React.Fragment>
      {label && <div className={labelItemClass}>{label}</div>}
      {!label && <div className={labelItemClass}>{"No item found"}</div>}
      {children && children?.map((item, index) => <MenuItem {...item} key={index} spacing={++spacing} />)}
    </React.Fragment>
  )
}