import {createStore, combineReducers} from 'redux';
import GlobalStoreID from './Modules/ListDetails/Reducer';
import GlobalCupom from './Modules/Cupom/Reducer';
import { IGlobalStoreId } from './Modules/ListDetails/Types';
import {ICupom} from './Modules/Cupom/Types';

export interface IRootStore {
    GlobalStoreID: IGlobalStoreId;
    GlobalCupom: ICupom;
}

const combinedReducers = combineReducers({
    GlobalStoreID,
    GlobalCupom
});

const store = createStore(combinedReducers); // Cria o store que é responsável por armazenar os dados

export default store;