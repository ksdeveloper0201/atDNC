import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

interface PoliticianCardProps {
    name: string,
    description: string,
    className?: string,
}

const PoliticianCard: React.FC<PoliticianCardProps> = ({ name, description, className }) => {
    return (
        <>
            <div className={cn(className)}>
                <Link href={`/politician/${encodeURIComponent(name)}`}>
                    <Card className="w-full">
                        <div>
                            <CardHeader>
                                <CardTitle>{name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>{description}</div>
                            </CardContent>
                        </div>
                    </Card>
                </Link>
            </div>
        </>
    );
};

export default PoliticianCard;