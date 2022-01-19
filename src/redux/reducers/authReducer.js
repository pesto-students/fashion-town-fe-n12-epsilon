const initialState = {
    userName: null,
    storeAuth:null
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_NAME': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                userName: action.payload
            }
        }
        case 'STORE_AUTH': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                storeAuth: action.payload
            }
        }
        default:
            return state
    }
}