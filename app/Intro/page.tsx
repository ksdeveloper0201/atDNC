'use client'

import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Image from 'next/image'
import { useState } from "react";




const Intro: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = (): void => {
        setIsOpen(!isOpen)
    }


    return (
        // <div className='flex flex-col items-center'>hello world</div>
        <>
            <div className="space-y-2 cursor-pointer" onClick={toggleMenu}>
                <div className={`w-8 h-1 bg-black transition-transform ${isOpen ? 'transform rotate-45 translate-y-3' : ''}`}></div>
                <div className={`w-8 h-1 bg-black transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`w-8 h-1 bg-black transition-transform ${isOpen ? 'transform -rotate-45 -translate-y-3' : ''}`}></div>
            </div>
            <div className="flex min-h-screen flex-col items-center p-12">
                <p className='text-3xl'>i am ...</p>
                <Image src='/images/mickey.jpeg' alt="mickey-image" width={100} height={100} className="rounded-full m-6" />
                {/* <Avatar>
                <AvatarImage width={50} src="/images/mickey.jpeg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>name</AccordionTrigger>
                        <AccordionContent>
                            Kiyonobu Satoshi
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>from</AccordionTrigger>
                        <AccordionContent>
                            Japan in Chiba
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>skills</AccordionTrigger>
                        <AccordionContent>
                            <ul>
                                <li>Python</li>
                                <li>TypeScript / JavaScript</li>
                                <li>Java</li>
                                <li>PowerShell</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>hobby</AccordionTrigger>
                        <AccordionContent>
                            <ul>
                                <li>watch movie</li>
                                <li>listen to music</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default Intro;