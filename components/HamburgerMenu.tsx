type Props = {
    toggleMenu: () => void,
    isOpen: boolean,
    classValue: string
}

const HamburgerMenu: React.FC<Props> = ({ toggleMenu, isOpen, classValue }) => {
    return (
        <div className={`space-y-2 cursor-pointer ${classValue}`} onClick={toggleMenu} >
            <div className={`w-8 h-1 bg-black transition-transform ${isOpen ? 'transform rotate-45 translate-y-3' : ''}`}></div>
            <div className={`w-8 h-1 bg-black transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-8 h-1 bg-black transition-transform ${isOpen ? 'transform -rotate-45 -translate-y-3' : ''}`}></div>
        </div >
    )
}

export default HamburgerMenu