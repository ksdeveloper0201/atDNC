"use client";

import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface redirectDataType {
    label: string;
    url: string;
}

interface HeaderComponentProps {
    title: string;
    redirectDatum: redirectDataType[];
    className?: string;
}

function HeaderComponent({ title, redirectDatum, className }: HeaderComponentProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenuOpen = () => {
        setIsOpen(!isOpen);
    };

    // Linkを押した際にメニューを閉じる
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className={cn("fixed top-0 left-0 w-full z-50", className)}>
            <div className="flex justify-between bg-slate-300 text-xl p-4">
                <Link role="logo" href='/'>{title}</Link>
                <div role="columns">
                    <ul className="gap-4 md:flex hidden">
                        {redirectDatum.map((data, index) => {
                            return (
                                <li key={index}>
                                    <Link href={data.url} onClick={closeMenu}>
                                        {data.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div
                        className={cn(
                            "fixed top-0 left-0 bg-slate-300 w-full h-full z-10 flex justify-center items-center transition-transform duration-300 ease-in-out",
                            isOpen ? "translate-x-0" : "translate-x-full"
                        )}
                    >
                        <ul>
                            {redirectDatum.map((data, index) => {
                                return (
                                    <li key={index} className="my-5">
                                        <Link href={data.url} onClick={closeMenu}>
                                            {data.label}
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
            </div>
        </div>
    );
}

export default HeaderComponent;
