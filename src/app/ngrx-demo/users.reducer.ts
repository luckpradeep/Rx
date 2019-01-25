export function reducer(state, action) {
    switch (action.type) {
        case 'SELECTED_USER':
            return {
                ...state,
                selectedUser: action.payload,
            }
        case 'LOAD_USERS_REDUCER':
            return {
                ...state,
                users: action.payload,
            }
        default: return { ...state };
    }
}