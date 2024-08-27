import Link from "next/link";
import { Blog, client, getBlogLIst, getBlogs } from "@/lib/client";
import * as React from "react";

import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";
import PageArrow from "@/components/PageArrow";

interface CmsBlogPageProps {
  searchParams: { page: string }
}

const CmsBlogPage = async ({ searchParams }: CmsBlogPageProps) => {
  const page = parseInt(searchParams.page || "1", 10)
  const itemsPerPage = 5

  // ブログの一覧
  const { contents } = await getBlogLIst()

  const totalPages = Math.ceil(contents.length / itemsPerPage)
  const currentContents = contents.slice((page - 1) * itemsPerPage, page * itemsPerPage)

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
            {currentContents.map((blog) => (
              <li className="my-4" key={blog.id}>
                <ArticleCard blog={blog} />
              </li>
            ))}
          </ul>
          <PageArrow currentPage={page} totalPages={totalPages} />
        </div>
        <div className="hidden md:block md:col-span-1">
          <CategoryCard categoryList={categoryList} className="mt-8 mr-4" />
        </div>
      </div>
    </>
  );
};

export default CmsBlogPage;
