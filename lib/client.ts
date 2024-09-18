import { createClient } from "microcms-js-sdk";

export type Blog = {
    id: string;
    title: string;
    body: string;
    tag: string;
    thumbnail: { url: string; height?: number; width?: number };
    category: string[];
    createdAt: string;
};

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.SERVICE_API_KEY) {
    throw new Error("MICROCMS_SERVICE_API_KEY is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.SERVICE_API_KEY,
});

// ブログ一覧を取得
export const getBlogLIst = async () => {
    const blogList = await client.getList({
        endpoint: "blog",
        queries: { limit: 100 },
    });
    return blogList;
};

export const getBlogs = async () => {
    const blogs = await client.get({ endpoint: "blog" });
    return blogs;
};

export const getBlogsByCategory = async (categoryName: string) => {
    const blogs = await client.get({
        endpoint: "blog",
        queries: { filters: `category[contains]${categoryName}`, limit: 100 },
    });
    return blogs;
};

export const getDetail = async (contentId: string) => {
    const blog = await client.getListDetail({
        endpoint: "blog",
        contentId,
    });
    return blog;
};

// コメント一覧を取得
export const getCommentsLIst = async () => {
    const commentList = await client.getList({
        endpoint: "comments",
        queries: { limit: 100 },
    });
    return commentList;
};

export const getComments = async () => {
    const comments = await client.get({ endpoint: "comment" });
    return comments;
};
