const initState = {
    themeId: 1,
}

export type StateType = typeof initState
type ChangeThemeType = {type: 'SET_THEME_ID', id: number}

export const themeReducer = (state: StateType = initState, action: ChangeThemeType): StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeType => ({ type: 'SET_THEME_ID', id }) // fix any
