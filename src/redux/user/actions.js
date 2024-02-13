import UserActionTypes from "./user-action-types";

export const userLogin = (payload) => {

    return {
        type: UserActionTypes.Logar,
        payload
    }
}

export const userLogout = () => ({
    type: UserActionTypes.Logout,
})