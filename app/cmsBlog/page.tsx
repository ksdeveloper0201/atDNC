import Link from 'next/link';
import { getBlogs } from '@/lib/client';


const CmsBlogPage: React.FC = async () => {
  const { contents } = await getBlogs();

  if (!contents) {
    return (<h1>No Contents</h1>)
  }

  return (
    <>
      <div>
        <ul>
          {contents.map((blog) =>
          (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>

            </li>
          ))}
        </ul>
      </div>
    </>
  )
};

export default CmsBlogPage;
