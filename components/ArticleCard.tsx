import { Blog } from "@/lib/client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";

type ArticleCardProps = {
  blog: Blog;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ blog }) => {
  if (!blog.thumbnail) {
    console.log("not thumbnail", blog.title);
    blog.thumbnail = { url: "/images/no_image.png" };
  }

  return (
    <div>
      <Link href={`/cmsBlog/${blog.id}`}>
        <Card className="w-full">
          <div className="sm:flex contents">
            <div className="flex justify-center">
              <Image
                src={blog.thumbnail.url ?? "/images/no_image.png"}
                alt="article-image"
                width={200}
                height={200}
              />
            </div>
            <div>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div>
                    {/* <Badge>{blog.category}</Badge> */}
                    {blog.category.map((cate, index) => (
                      <Badge className="mx-1" key={index}>
                        {cate}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>{blog.createdAt}</Label>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ArticleCard;
