import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === "up") {
                return [...state].sort((u1, u2) => {
                    if (u1.name > u2.name) return 1;
                    if (u1.name < u2.name) return -1;
                    return 0;
                })
            } else {
                return [...state].sort((u1, u2) => {
                    if (u1.name < u2.name) return 1;
                    if (u1.name > u2.name) return -1;
                    return 0;
                })
            }
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
