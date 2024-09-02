import { cn } from "@/lib/utils";
import { IntroContentItemProps, IntroContentProps } from "@/types/intro";
import Link from "next/link";

const IntroContentItem: React.FC<IntroContentItemProps> = ({ title, content, redirectUrl, className }) => {
    return (
        <>
            <div className={cn(className)}>
                {redirectUrl ? <Link href={redirectUrl} className="text-2xl font-bold">{title}</Link> : <div className="text-2xl font-bold">{title}</div>}
                <div className="text-1xl">{content}</div>
            </div>
        </>
    );
}

const IntroContent: React.FC<IntroContentProps> = ({ name, body, className }) => {
    console.log('content name', name)
    console.log('content body', body)
    return (
        <>
            <div className={cn(className)}>
                <div className={cn("text-4xl mb-4 font-bold")}>{name}</div>
                {body.map((item, index) => {
                    return (
                        <IntroContentItem key={index} title={item.title} content={item.content} redirectUrl={item.redirectUrl ?? ""} className="mb-3" />
                    )
                })}
            </div>
        </>
    );
}

export default IntroContent;