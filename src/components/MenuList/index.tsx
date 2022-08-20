import React from "react";
import { MenuListProps } from "../../types";
import MenuItem from "../MenuItem/index.tsx";

export default function MenuList({ data }:MenuListProps) {
  return (
    <div className="menu-list flex flex-col items-start gap-2">
      {data && data?.map((item, index) => <MenuItem {...item} key={index}  />)}
    </div>
  )
}