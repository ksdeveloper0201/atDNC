export const fetchGetUsers = async () => {
    try {
        const res = await fetch("http://localhost:3033/users");
        console.log("users", res);
        return await res.json();
    } catch (error) {
        console.error("fetch occur error:", error);
    }
};
