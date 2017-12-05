/**
 * Created by a1 on 2017/8/26.
 */
import {createStore,applyMiddleware} from 'redux'
import  thunkMiddleware from 'redux-thunk'
import rootReducer from '../Reducers/Index'
const createStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore)

export default function configureStore(initialState) {

    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}