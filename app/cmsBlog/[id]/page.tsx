import { getDetail } from "@/lib/client";

const ShowBlog: React.FC<{ params: { id: string } }> = async ({ params }) => {
  console.log("param id", params.id);
  console.log("param", params);

  const blog = await getDetail(params.id);
  if (!blog) {
    console.error("blog is none");
  }

  return (
    <>
      <div className="grid md:grid-cols-7">
        <div className="col-start-2 col-span-5 mt-6">
          <div className="text-5xl"> {blog.title}</div>
          <div
            className="mt-6 text-2xl"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </div>
      </div>
    </>
  );
};

export default ShowBlog;
