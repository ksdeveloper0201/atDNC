// app/about/layout.tsx
import { ReactNode } from 'react';
import HeaderComponent from '@/components/HeaderComponent';
import { atDNCConfig } from '@/config/atDNC'

// Metadataの設定（オプション）
export const metadata = {
    title: 'About Us',
    description: 'Learn more about our team and mission.',
};

console.log('atDNCConfig', atDNCConfig)

// Aboutページ専用のレイアウト
const AtDNCLayout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <HeaderComponent title={atDNCConfig.title} mainNav={atDNCConfig.mainNav} sidebarNav={atDNCConfig.sidebarNav} />
            {/* Aboutページ専用のコンテンツを表示 */}
            <main className='text-base mt-8'>
                {children}
            </main>

            <footer>
                <p>&copy; 2024 tsumutsumuTodo by ksdeve. All rights reserved.</p>
            </footer>
        </>

    );
};

export default AtDNCLayout;
