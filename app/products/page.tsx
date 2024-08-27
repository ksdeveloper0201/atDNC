import Link from "next/link";

function ProductsPage() {

  const cmsBlog = "/cmsBlog"

  return (
    <div>
      <div className="techBlog flex justify-center">
        <div className="article">
          <div className="text-4xl my-4">テックブログ</div>
          <Link href={cmsBlog} className="border-bottom">テックブログへのリンク</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;