import PoliticianCard from "@/components/politician/PoliticianCard";
import { politicianData } from "@/data/test-data";

function page() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {politicianData.map((data, index) => {
                return <PoliticianCard key={index} name={data.name} description={data.description} />
            })}
        </div>
    );
}

export default page;