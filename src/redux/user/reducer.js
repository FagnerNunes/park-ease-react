import UserActionTypes from "./user-action-types"

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case UserActionTypes.Logar:

            return { ...state, currentUser: action.payload }

        case UserActionTypes.Logout:

            return { ...state, currentUser: null }

        default:
            return state
    }

}

export default userReducer