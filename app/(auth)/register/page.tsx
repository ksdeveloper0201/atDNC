import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <div>
            <div className="container grid flex-col h-screen w-screen lg-grid-cols-2 items-center justify-center">
                <Link
                    href={"/login"}
                    className={
                        (cn(buttonVariants({ variant: "ghost" })),
                        "absolute left-4 md:left-8 md:top-8")
                    }
                >
                    ログイン
                </Link>
            </div>
            <div className="mt-8 container flex h-screen w-screen flex-col items-center justify-center">
                <Link
                    href="/"
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "absolute left-4 top-4 md:left-8 md:top-8"
                    )}
                >
                    back
                </Link>
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            アカウントの作成
                        </h1>
                        <p>いずれかで新規登録を行なってください。</p>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        つづけてクリックをすると、
                        <Link
                            href="/register"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            利用規約
                        </Link>
                        と
                        <Link
                            href="/register"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            プライバシーポリシー
                        </Link>
                        に同意したことになります。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
