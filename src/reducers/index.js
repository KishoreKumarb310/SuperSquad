
import { combineReducers } from 'redux';
import characters from './charactersReducers';
import heroes from './heroesReduces';

const rootReducer = combineReducers({characters, heroes});
export default rootReducer;