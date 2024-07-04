'use client'

import HamburgerMenu from "@/components/HamburgerMenu";
import Intro from "./Intro/page";
import { useState } from "react";
import MenuComponent from "@/components/MenuComponent";


const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <main >
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} classValue="absolute top-4 right-4" />
      {isOpen
        ?
        <>
          <MenuComponent />
        </>
        :
        <Intro />
      }
    </main>
  );
}

export default Home;