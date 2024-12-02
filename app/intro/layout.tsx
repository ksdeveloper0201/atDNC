import HeaderComponent from "@/components/HeaderComponent";
import { introConfig } from "@/config/intro";
import { ReactNode } from "react";


function introLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <HeaderComponent title={introConfig.title} mainNav={introConfig.mainNav} sidebarNav={introConfig.sidebarNav} />
            {children}
        </div>
    );
}

export default introLayout;