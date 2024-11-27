export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
};

export type MainNav = NavItem;

export type SideNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof IconsManifest;
} & (
    | {
          href: string;
          items?: never;
      }
    | {
          href?: string;
          items: NavItem[];
      }
);

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        x: string;
        github: string;
    };
};

export type AtDNCConfig = {
    title: string;
    mainNav: MainNavItem[];
    sidebarNav?: SideNavItem[];
};

export type IntroConfig = {
    title: string;
    mainNav: MainNavItem[];
    sidebarNav?: SideNavItem[];
};
