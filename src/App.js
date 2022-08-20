import MenuList from "./components/MenuList/index.tsx";
import { dataSource } from "./dataSource/index.ts";

export default function App() {
  return (
    <div className="app w-[100vw] h-[100vh] flex flex-row items-center justify-center bg-gray-800 cursor-default">
      <MenuList data={dataSource} />
    </div>
  )
}