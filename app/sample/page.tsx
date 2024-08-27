import HeaderComponent from "@/components/HeaderComponent";
import { redirectData } from "@/data/utils-data";


function page() {
    return (
        <div>
            <HeaderComponent redirectDatum={redirectData} />
        </div>
    );
}

export default page;