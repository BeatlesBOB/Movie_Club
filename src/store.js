import {createStore, combineReducers,p} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import movieReducer from './reducers/movieReducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const rootReducer = combineReducers({movieReducer:movieReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

