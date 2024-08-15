import Link from "next/link";
import { Blog, client, getBlogLIst, getBlogs } from "@/lib/client";
import * as React from "react";

import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";

const CmsBlogPage = async () => {
  let blog = []

  const { contents } = await getBlogLIst()
  const blogs = await getBlogs()
  console.log("blogs", blogs)

  let categoryList: string[] = []
  if (contents) {
    contents.map((contents) => {
      contents.category.map((contentCate: string) => {
        if (!categoryList.includes(contentCate))
          categoryList.push(contentCate)
      })
    })
  }

  if (!contents) {
    return <h1>No Contents</h1>;
  }

  return (
    <>
      <div className="md:grid md:grid-cols-3 gap-4">
        <div className="pt-4 px-4 col-span-2">
          <ul>
            {contents.map((blog) => (
              <li className="my-4" key={blog.id}>
                <ArticleCard blog={blog} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block md:col-span-1">
          <CategoryCard categoryList={categoryList} className="mt-8 mr-4" />
        </div>
      </div>
    </>
  );
};

export default CmsBlogPage;
