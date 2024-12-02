"use client";

import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import { cn } from "@/lib/utils";

import * as React from "react"
import { AtDNCConfig, IntroConfig } from "@/types";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type HeaderComponentProps = {
    className?: string;
} & (IntroConfig | AtDNCConfig)

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title, mainNav, sidebarNav, className }) => {
    console.log('mainNav', mainNav)

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLogon, setIsLogon] = useState<boolean>(false);
    const toggleMenuOpen = () => {
        setIsOpen(!isOpen);
    };

    // Linkを押した際にメニューを閉じる
    const closeMenu = () => {
        setIsOpen(false);
    };

    const router = useRouter()

    return (
        <header className={cn("fixed top-0 left-0 w-full z-50", className)}>
            <div className="flex justify-between bg-slate-300 text-xxl p-4">
                <Link role="logo" href='/'>{title}</Link>
                {isLogon ? (
                    <div role="navigation">
                        <nav>
                            <ul className="gap-4 md:flex hidden">
                                {mainNav.map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={data.href} onClick={closeMenu} className={data.disabled && 'cursor-not-allowed'}>
                                                {data.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <div
                            className={cn(
                                "fixed top-0 left-0 bg-slate-300 w-full h-full z-10 flex justify-center items-center transition-transform duration-300 ease-in-out",
                                isOpen ? "translate-x-0" : "translate-x-full"
                            )}
                        >
                            <ul>
                                {mainNav.map((data, index) => {
                                    return (
                                        <li key={index} className="my-5">
                                            <Link href={data.href!} onClick={closeMenu} >
                                                {data.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="absolute top-0 right-0 p-4 z-20">
                            <HamburgerMenu
                                toggleMenu={() => toggleMenuOpen()}
                                isOpen={isOpen}
                                className="md:hidden"
                            />
                        </div>
                    </div>
                ) : (
                    <Button onClick={() => router.push('/login')}>logon</Button>
                )
                }
            </div>
        </header>
    );
}

export default HeaderComponent;
