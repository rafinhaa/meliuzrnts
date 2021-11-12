import {createStore} from 'redux';
import GlobalStoreID from './Modules/ListDetails/Reducer';

const store = createStore(GlobalStoreID); // Cria o store que é responsável por armazenar os dados

export default store;