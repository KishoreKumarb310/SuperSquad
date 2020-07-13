import { ADD_CHARACTER, REMOVE_CHARACTER} from '../actions/index';
import {createCharacter} from './helper';

function heroes(state=[], action){
    switch(action.type){
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)];
            return heroes;

        case REMOVE_CHARACTER:
            let newHeroes = state.filter(item => item.id !== action.id);
            return newHeroes;

        default:
            return state;
    }
}


export default heroes;