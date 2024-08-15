import ArticleCard from "@/components/ArticleCard";
import { Blog, getBlogLIst, getBlogsByCategory } from "@/lib/client";

interface SearchCategoryProps {
    params: { name: string }
}

const SearchCategory = async ({ params }: SearchCategoryProps) => {

    console.log('params', params)
    console.log('params.name', params.name)
    console.log('params.name', decodeURIComponent(params.name))

    if (!params.name) {
        return (
            <>
                <div>no item</div>
            </>
        )
    }
    const decodedParam = decodeURIComponent(params.name)
    const { contents } = await getBlogsByCategory(decodedParam)

    console.log('contents', contents)

    return (
        <>
            <ul>
                {contents.map((blog: Blog) => (
                    <li key={blog.id} className="m-4">
                        <ArticleCard blog={blog} />
                    </li>
                ))}
            </ul>
        </>
    )

};

export default SearchCategory;

