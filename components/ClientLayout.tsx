"use client";

import { useEffect, useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import MenuComponent from "@/components/MenuComponent";
import MenuTabs from "./MenuTabs";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const isWideThanMd = window.innerWidth >= 768;
      setIsDesktop(isWideThanMd); // md size (768px)
      if (isWideThanMd) {
        setIsOpen(false);
      }
    };
    handleResize(); // checkSize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <HamburgerMenu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        classValue="absolute top-4 right-4 md:hidden"
      />
      {isDesktop ? (
        <>
          <div className="fixed top-0 left-0 w-full z-10">
            <MenuTabs />
          </div>
          <div className="mt-16">{children}</div>
        </>
      ) : isOpen ? (
        <MenuComponent classValue="pt-12" />
      ) : (
        children
      )}
    </div>
  );
};

export default ClientLayout;
