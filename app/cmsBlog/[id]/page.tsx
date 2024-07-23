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
      <div> {blog.title}</div>
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
    </>
  );
};

export default ShowBlog;
