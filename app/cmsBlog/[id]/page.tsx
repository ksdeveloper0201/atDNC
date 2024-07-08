import { getDetail } from "@/lib/client"

const ShowBlog: React.FC<{ params: { id: string } }> = async ({ params }) => {
    console.log('param id', params.id)
    console.log('param', params)

    const blog = await getDetail(params.id)
    if (!blog) {
        console.error('blog is none')
    }
    console.log('blog', blog)
    return (
        <>
            <div> {blog.title}</div>
            <div>{blog.body}</div>

        </>
    )
}

export default ShowBlog