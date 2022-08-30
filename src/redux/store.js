import {
   
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
 } from 'redux-persist'
 import { getDefaultMiddleware } from '@reduxjs/toolkit';
 import storage from 'redux-persist/lib/storage'
import rootReducer from './certificates-slice'

const { configureStore } = require("@reduxjs/toolkit");
const persistConfig = {
   key: 'certificates',
 
   storage,
 }
 
 

export const store = configureStore({
    reducer: {
       certificates: persistReducer(persistConfig, rootReducer)
      },
       middleware: getDefaultMiddleware({
         serializableCheck: {
             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
         },
     })
 })
 export  const persistor = persistStore(store);
 