import { IntroContentItemProps, IntroContentProps } from "@/types/intro";

export const redirectData = [
    {
        href: "/home",
        title: "Home",
    },
    {
        href: "/skills",
        title: "about",
    },
    {
        href: "/products",
        title: "work",
    },
];

export const politicianRedirectData = [
    {
        href: "/politician",
        title: "ホーム",
    },
    {
        href: "/politician/about",
        title: "このサイトについて",
    },
    {
        href: "/politician/connect",
        title: "お問い合わせ",
    },
];

export const tsumutsumuTodoRedirectData = [
    {
        href: "/atDNC",
        title: "ホーム",
    },
    {
        href: "/atDNC/about",
        title: "このサイトについて",
    },
    {
        href: "/atDNC/connect",
        title: "お問い合わせ",
    },
];

export const introSkillsContent: IntroContentProps = {
    name: "Skills",
    body: [
        {
            title: "Frontend",
            content:
                "React, Vue, JavaScript, TypeScript, HTML, CSS, TailwindCSS",
        },
        { title: "Backend", content: "node, Python, Slack, Django, fastAPI" },
        { title: "Database", content: "MySQL" },
        {
            title: "Tools",
            content: "vscode, slack, git, github, svn, teams ,backlog",
        },
    ],
};

export const introMyWorkContent: IntroContentProps = {
    name: "My Work",
    body: [
        {
            title: "blog",
            content: "microCMSを利用して作成したBlogサイトです。",
            redirectUrl: "/cmsBlog",
        },
        {
            title: "政治家.com",
            content: "政治家の情報のまとめサイトです。",
            redirectUrl: "/politician",
        },
        {
            title: "atどのくらい",
            content: "ゲームタスク計算ツールです",
            redirectUrl: "/atDNC",
        },
    ],
};
