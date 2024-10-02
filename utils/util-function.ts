export const formatDate = (date: Date | string) => {
    if (typeof date === "string") {
        date = new Date(date);
    }
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // 月は0から始まるため+1
    const day = ("0" + date.getDate()).slice(-2); // 日は2桁に揃える
    return `${year}/${month}/${day}`;
};
