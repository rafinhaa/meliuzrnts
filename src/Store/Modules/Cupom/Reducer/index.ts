import { Reducer } from "redux";

import { ICupom } from "../Types";

const INITIAL_STATE: ICupom = {
    cupom: ''
}

const GlobalCupom: Reducer<ICupom | any> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_CUPOM':
            const { cupom } = action.payload;
            return {
                ...state,
                cupom: cupom
            }
        default:
            return state;
    }
}

export default GlobalCupom;