import {createSlice} from '@reduxjs/toolkit';


const productSlice = createSlice({
	name:"product",
	initialState: {
		products:[],
		isFetching: false,
		error: false,
	},
	reducers:{
		getProductStart: (state)=>{
			state.isFetching = true;
			state.error = false;
		},
        
        getProductSuccess:(state, action)=>{
	  	    state.isFetching = false;
	  	    state.products = action.payload;
	    }, 
	    
	    getProductFailure:(state)=>{
	  	    state.isFetching = false;
	  	    state.error = true;
	    },

	    // GETDELETE
	    
	    getDeleteProductStart: (state)=>{
			state.isFetching = true;
			state.error = false;
		},
        

        getDeleteProductSuccess:(state, action)=>{
	  	    state.isFetching = false;
	  	    state.products.splice(
	  	    	state.products.findIndex((item)=> item._id === action.payload),
	  	    	1
	  	    );
	    }, 
	    
	    getDeleteProductFailure:(state)=>{
	  	    state.isFetching = false;
	  	    state.error = true;
	    },
	    
	    // UPDATE
	    
	    getUpdateProductStart: (state)=>{
			state.isFetching = true;
			state.error = false;
		},
        

        getUpdateProductSuccess:(state, action)=>{
	  	    state.isFetching = false;
	  	    state.products[state.products.findIndex((item)=> item._id === action.payload.id)] = action.payload.product;
	  	
	    }, 
	    
	    getUpdateProductFailure:(state)=>{
	  	    state.isFetching = false;
	  	    state.error = true;
	    },

	    // ADD
	    
	    getAddProductStart: (state)=>{
			state.isFetching = true;
			state.error = false;
		},
        

        getAddProductSuccess:(state, action)=>{
	  	    state.isFetching = false;
	  	    state.products.push(action.payload);
	  	
	    }, 
	    
	    getAddProductFailure:(state)=>{
	  	    state.isFetching = false;
	  	    state.error = true;
	    },                
	},
})

export const {getProductStart, getProductSuccess, getProductFailure, getDeleteProductStart, getDeleteProductSuccess, getDeleteProductFailure, getUpdateProductStart, getUpdateProductSuccess, getUpdateProductFailure, getAddProductStart, getAddProductSuccess, getAddProductFailure} = productSlice.actions;
export default productSlice.reducer;