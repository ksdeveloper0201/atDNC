import { cn } from "@/lib/utils";

// type categoryInfoProps = { name: string, mount: number }[]
interface CategoryCardProps {
  categoryList: string[];
  className: string;
}
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryList,
  className,
}) => {
  return (
    <>
      <div className={cn(className)}>
        <Card className="w-full">
          <div>
            <CardHeader>
              <CardTitle>Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {categoryList.map((category, index) => (
                  <li key={index}>
                    <Link href={`/cmsBlog/category/${category}`}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CategoryCard;
