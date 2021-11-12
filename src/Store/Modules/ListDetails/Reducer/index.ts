import { Reducer } from "redux"; // O React Redux possui um padrão de reducers que são funções que recebem um estado anterior e uma ação e retornam um novo estado.

import { IGlobalStoreId } from "../Types";

const INITIAL_STATE: IGlobalStoreId = { // o estado inicial do reducer é o que está no arquivo de estado inicial.
    store_id: 0, // é um parecido com o hook useState
}

const GlobalStoreID: Reducer<IGlobalStoreId | any > = (state = INITIAL_STATE, action) => { // o reducer recebe o estado anterior e a ação que será executada.
    switch (action.type) { // o switch é responsável por verificar qual ação será executada.
        case "SET":
            const { store_id } = action.payload;
            return {
                ...state,
                store_id: store_id
            }// Retornar assim para dar prioridade ao estado inicial.
        default:
            return {state};
    }
}

export default GlobalStoreID;