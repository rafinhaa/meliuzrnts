import {IGlobalStoreId} from '../Types';

function setNewStoreID (storeId: IGlobalStoreId) {
  return {
    type: 'SET',
    payload: storeId
  }
}

export default setNewStoreID;