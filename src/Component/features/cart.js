import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state, action)=>{
            console.log(action.payload)
            const prodctobj=action.payload;
            const obj={...prodctobj, qty:1};
            const product= state.find(
                (stateobj)=>prodctobj.id===stateobj.id
            );
            if(product){
                product.qty++;
            }else{
                const obj ={...action.payload, qty: 1};
                state.push(obj);
            }
        },

        incrementItem:()=>{

        }, 
        decrementItem:()=>{

        },
        


    }

})
export default cartSlice.reducer;
export const { addToCart}=cartSlice.actions;