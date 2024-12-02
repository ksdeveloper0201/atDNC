import { AtDNCConfig } from "@/types";

export const atDNCConfig: AtDNCConfig = {
    title: "atどのくらい",
    mainNav: [
        {
            title: "ホーム",
            href: "/atDNC",
        },
        {
            title: "このサイトについて",
            href: "/atDNC/about",
            disabled: true,
        },
        {
            title: "お問い合わせ",
            href: "/atDNC/connect",
            disabled: true,
        },
    ],
    sidebarNav: [
        {
            title: "Posts",
            href: "/dashboard",
            icon: "post",
        },
    ],
};
