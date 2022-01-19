export const setUserName = (userName) => {
    return {
        type : "USER_NAME",
        payload: userName
    }
};

export const setStoreAuth = (auth) => {
    return {
        type : "STORE_AUTH",
        payload: auth
    }
};