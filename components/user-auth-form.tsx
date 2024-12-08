"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Icons } from "./icon";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserAuthForm({
    className,
    ...props
}: UserAuthFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isGithubLoading, setIsGithubLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    const onSubmit = () => {
        console.log("clicked");
    };
    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <button
                type="button"
                className={cn(buttonVariants({ variant: "outline" }))}
                onClick={() => {
                    setIsGoogleLoading(true);
                    signIn("google");
                }}
            >
                {" "}
                {isLoading ? (
                    <Icons.spin className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.google className="mr-2 h-4 w-4" />
                )}
                Google
            </button>
            <button
                type="button"
                className={cn(buttonVariants({ variant: "outline" }))}
                onClick={() => {
                    setIsGithubLoading(true);
                    signIn("github");
                }}
            >
                {isGithubLoading ? (
                    <Icons.spin className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.github className="mr-2 h-4 w-4" />
                )}
                Github
            </button>
        </div>
    );
}
