const initialState = {
    productList:[] ,
    productIdDetailsMap:{},
}

export default function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_LIST': {
            console.log(action.payload)
            return {
                ...state,
                productList: action.payload
            }
        }
        case 'PRODUCT_ID_DETAILS_MAP': {
            return {
                ...state,
                productIdDetailsMap: action.payload
            }
        }
        default:
            return state
    }
}