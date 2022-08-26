import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

// Reducers
import loginReducer from './login/reducer';
import singupReducer from './signup/reducer';
import pateintDataReducer from './patient/reducer';


// Root Reducer
const rootReducer = combineReducers({
  login:loginReducer,
  signup:singupReducer,
  patientsData:pateintDataReducer
})


// Store
const store = createStore(rootReducer,
    composeWithDevTools(
        (applyMiddleware(thunk))
    )
)  

export default store