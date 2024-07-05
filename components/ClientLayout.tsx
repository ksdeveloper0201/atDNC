'use client';

import { useState } from 'react';
import HamburgerMenu from '@/components/HamburgerMenu';
import MenuComponent from '@/components/MenuComponent';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='relative'>
            <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} classValue='absolute top-4 right-4' />
            {isOpen ? <MenuComponent /> : children}
        </div>
    )
}

export default ClientLayout;