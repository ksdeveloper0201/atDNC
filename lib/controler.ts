export const fetchGetUsers = async () => {
    const res = await fetch("http://localhost:3033/users");
    console.log("users", res);
    return await res.json();
};
