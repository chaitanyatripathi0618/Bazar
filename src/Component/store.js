import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart'

const store= configureStore({
    reducer:{
        cart: cartReducer,
    },
    preloadedState:(()=>{
        const jasonString=localStorage.getItem("store");
        const parsedStore= JSON.parse(jasonString);
        return parsedStore || {};
    })()
})
store.subscribe(()=>{
    const storeString=JSON.stringify(store.getState())
    localStorage.setItem("store",storeString)
});
export default store;