import { menuColumns } from "@/utils/redirect-utils";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";

const columnLength = menuColumns.length
console.log('columnLength', columnLength)


const MenuTabs: React.FC = () => {
    return (
        <>
            <div>
                <Tabs defaultValue="account" className="w-full">
                    {/* <TabsList className={`grid w-full grid-cols-${columnLength}`}> */}
                    <TabsList className="grid w-full grid-cols-5">
                        {menuColumns.map((column, index) => {
                            return (
                                <TabsTrigger key={index} value={column.name} >
                                    <Link href={column.redirectUrl}>{column.name}</Link>
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                </Tabs>
            </div>

        </>
    )
}

export default MenuTabs;