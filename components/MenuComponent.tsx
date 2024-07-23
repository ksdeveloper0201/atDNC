import { menuColumns } from "@/utils/redirect-utils";
import { TabsList, TabsTrigger } from "./ui/tabs";

const ColumnOneOf: React.FC<{ name: string; redirectUrl: string }> = ({
  name,
  redirectUrl,
}) => {
  return (
    <li className="m-6 text-2xl">
      <a href={redirectUrl}>{name}</a>
    </li>
  );
};

const MenuComponent: React.FC<{ classValue?: string }> = ({ classValue }) => {
  return (
    <div className="display-container">
      <div className={`menu-container flex justify-center ${classValue}`}>
        <ul className="list-inside md:flex md:list-inside md:space-x-4">
          {menuColumns.map((item, index) => {
            return (
              <ColumnOneOf
                key={index}
                name={item.name}
                redirectUrl={item.redirectUrl}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuComponent;
