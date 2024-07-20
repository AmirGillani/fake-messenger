// IMPORT HEADER FILES

import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  
  import {thunk} from "redux-thunk";
  
  import { composeWithDevTools } from "redux-devtools-extension";
  
  import {
    messengerReducer
  } from "./reducers/messenger-reducer";
  
  
  // CREATE THREE THINGS
  
  // REDUCERS
  
  // GIVE REDUCERES STATES NAMES EG PRODUCTS
  
  const reducer = combineReducers({
   messenger:messengerReducer
  });
  
  // INITIAL STATE
  
  let initialState = {

  };
  
  // MIDDLE WARES
  
  const middleWare = [thunk];
  
  // CREATE STORAGE
  
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleWare)
  );
  
  export default store;
  
