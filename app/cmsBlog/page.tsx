import Link from "next/link";
import { getBlogs } from "@/lib/client";
import * as React from "react";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";

const CmsBlogPage: React.FC = async () => {
  const { contents } = await getBlogs();

  if (!contents) {
    return <h1>No Contents</h1>;
  }

  console.log("contents", contents);
  return (
    <>
      <div className="pt-16 px-4">
        <ul>
          {contents.map((blog) => (
            <li className="my-4" key={blog.id}>
              <Link href={`/cmsBlog/${blog.id}`}>
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div>
                          <Badge>{blog.category}</Badge>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="createdDate">{blog.createdAt}</Label>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CmsBlogPage;
