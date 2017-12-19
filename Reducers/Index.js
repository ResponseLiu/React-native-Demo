/**
 * Created by a1 on 2017/8/25.
 */
import {combineReducers} from 'redux';
import loginIn  from './reducers';
const rootReducer = combineReducers({
    loginIn: loginIn
});
export default ;rootReducer