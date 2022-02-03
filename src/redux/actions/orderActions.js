export const setOrderId = (orderId) => {
    return {
        type : "ORDER_ID",
        payload: orderId
    }
};
export const setPaymentDetails = (paymentDetails) => {
    return {
        type : "PAYMENT_DETAILS",
        payload: paymentDetails
    }
};
export const setOrderItems = (orderItems) => {
    return {
        type : "ORDER_ITEMS",
        payload: orderItems
    }
};
export const setPaymentLoader = (status) => {
  return {
    type: "PAYMENT_LOADER",
    payload: status,
  };
};