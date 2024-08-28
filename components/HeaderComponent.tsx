'use client'

import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

interface redirectDataType {
    label: string,
    url: string,
}

interface redirectDatum {
    redirectDatum: redirectDataType[]
}

    // testcommit

function HeaderComponent({ redirectDatum }: redirectDatum) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenuOpen = () => {
        setIsOpen(!isOpen)
        // console.log('hello')
    }
    return (
        <div className="relative" >
            <div className="flex justify-between bg-slate-300 text-xl p-4">
                <div role="logo">KSDeve</div>
                <div role="columns" >
                    <ul className="gap-4 md:flex hidden">
                        {redirectDatum.map((data, index) => {
                            return (
                                <li key={index}><Link href={data.url}>{data.label}</Link></li>
                            )
                        })}
                    </ul>
                    {isOpen ?
                        <div className="absolute top-full left-0 w-full bg-slate-300 z-10">
                            <ul>
                                {redirectDatum.map((data, index) => {
                                    return (
                                        <li key={index}><Link href={data.url}>{data.label}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                        :
                        <HamburgerMenu toggleMenu={() => toggleMenuOpen()} isOpen={isOpen} classValue="md:hidden" />
                    }
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;