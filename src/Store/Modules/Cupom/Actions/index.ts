import { ICupom } from "../Types";

function addCupom(cupom: ICupom) { // Isso é um action creator, que retorna um action
  return {
    type: 'ADD_CUPOM',
    payload: cupom
  };
}

export default addCupom;