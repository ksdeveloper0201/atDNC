// app/about/layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
// import './about.css'; // このレイアウトに固有のCSSファイルをインポート
import HeaderComponent from '@/components/HeaderComponent';
import { politicianRedirectData, tsumutsumuTodoRedirectData } from '@/data/utils-data';

// Metadataの設定（オプション）
export const metadata = {
    title: 'About Us',
    description: 'Learn more about our team and mission.',
};

// Aboutページ専用のレイアウト
const PoliticianLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <HeaderComponent title="ツムツムTodo" redirectDatum={tsumutsumuTodoRedirectData} />
                {/* Aboutページ専用のコンテンツを表示 */}
                <main className='pt-16 mx-8'>
                    {children}
                </main>

                <footer>
                    <p>&copy; 2024 tsumutsumuTodo by ksdeve. All rights reserved.</p>
                </footer>
            </body>
        </html>
    );
};

export default PoliticianLayout;
