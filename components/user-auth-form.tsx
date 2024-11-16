'use client'

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { signIn } from "next-auth/react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function UserAuthForm({ className, ...props }: UserAuthFormProps) {

    const [isLoading, setIsLoading] = useState(false)
    const [isGithubLoading, setIsGithubLoading] = useState(false)

    const onSubmit = () => {
        console.log('clicked')
    }
    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>

                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label>
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoComplete="email"
                            autoCorrect="off"
                        />
                    </div>
                    <button className={cn(buttonVariants())} disabled={isLoading}>
                        {isLoading && <span>Loading...</span>}
                        Sign In With Email
                    </button>
                </div>
            </form>
            <div className='relative'>
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground"> Or continue with </span>
                </div>

            </div>
            <button
                type="button"
                className={cn(buttonVariants({ variant: "outline" }))}
                onClick={() => {
                    setIsGithubLoading(true)
                    signIn("github")
                }}
            >
                login Github
            </button>

        </div >
    );
}
