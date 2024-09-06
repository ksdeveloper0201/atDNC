import { IntroContentItemProps, IntroContentProps } from "@/types/intro";

export const redirectData = [
    {
        url: "/home",
        label: "Home",
    },
    {
        url: "/skills",
        label: "about",
    },
    {
        url: "/products",
        label: "work",
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
            redirectUrl: "/government",
        },
        { title: "title3", content: "content" },
    ],
};
