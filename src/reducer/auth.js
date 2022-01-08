const initialState = {
    userName: null,
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
        default:
            return state
    }
}