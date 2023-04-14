
export const userLoginAdapter = (user) => {
    const info = {
        userName: user.displayName,
        email: user.email,
        uid: user.uid,
    }
    return info;
}


