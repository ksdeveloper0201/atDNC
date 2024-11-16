// app/about/layout.tsx
import { ReactNode } from 'react';
import HeaderComponent from '@/components/HeaderComponent';
import { politicianRedirectData, tsumutsumuTodoRedirectData } from '@/data/utils-data';

// Metadataの設定（オプション）
export const metadata = {
    title: 'About Us',
    description: 'Learn more about our team and mission.',
};

// Aboutページ専用のレイアウト
const AtDNCLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <HeaderComponent title="atどのくらい" redirectDatum={tsumutsumuTodoRedirectData} />
            {/* Aboutページ専用のコンテンツを表示 */}
            <main className='pt-16 mx-8'>
                {children}
            </main>

            <footer>
                <p>&copy; 2024 tsumutsumuTodo by ksdeve. All rights reserved.</p>
            </footer>
        </>

    );
};

export default AtDNCLayout;
