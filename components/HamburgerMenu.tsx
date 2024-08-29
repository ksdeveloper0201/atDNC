import { cn } from "@/lib/utils";

type HamburgerMenuProps = {
  toggleMenu: () => void;
  isOpen: boolean;
  className?: string;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  toggleMenu,
  isOpen,
  className,
}) => {
  return (
    <div
      className={cn("space-y-2 cursor-pointer border-solid", className)}
      onClick={toggleMenu}
    >
      <div
        className={`w-8 h-1 bg-black transition-transform ${isOpen ? "transform rotate-45 translate-y-3" : ""}`}
      ></div>
      <div
        className={`w-8 h-1 bg-black transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
      ></div>
      <div
        className={`w-8 h-1 bg-black transition-transform ${isOpen ? "transform -rotate-45 -translate-y-3" : ""}`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
