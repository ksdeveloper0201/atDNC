import { createClient } from "microcms-js-sdk";

export type Blog = {
    id: string;
    title: string;
    body: string;
    tag: string;
    category: string;
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

// ブログ一覧を種痘
export const getBlogs = async () => {
    const blogs = await client.getList<Blog>({
        endpoint: "blog",
    });
    return blogs;
};

export const getDetail = async (contentId: string) => {
    const blog = await client.getListDetail<Blog>({
        endpoint: "blog",
        contentId,
    });
    return blog;
};
