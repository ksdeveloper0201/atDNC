// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
    if (!process.env.DATABASE_URL) {
        console.error("DATABASE_URL is not set");
        return null; // 環境変数が設定されていない場合の処理
    }

    const sql = neon(process.env.DATABASE_URL);

    try {
        // シンプルにクエリを実行
        const data = await sql`SELECT * FROM todo`;
        return data; // データをそのまま返す
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // エラーが発生した場合に null を返す
    }
}
