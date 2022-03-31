export const setCart = (cart) => {
    return {
        type : "CART",
        payload: cart
    }
};

export const setStatus = (status) => {
    return {
        type : "STATUS",
        payload: status
    }
};

export const setAddress = (address) => {
    return {
        type : "ADDRESS",
        payload: address
    }
};