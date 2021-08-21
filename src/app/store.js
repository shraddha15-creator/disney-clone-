import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
    rducers: {
        
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})