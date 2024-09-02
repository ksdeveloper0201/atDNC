export interface IntroContentItemProps {
    title: string;
    content: string;
    redirectUrl?: string;
    className?: string;
}

export interface IntroContentProps {
    name: string;
    body: IntroContentItemProps[];
    className?: string;
}
