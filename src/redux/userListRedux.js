import {createSlice} from '@reduxjs/toolkit';


const userLSlice = createSlice({
	name:"userList",
	initialState: {
		users:[],
		isFetching: false,
		error: false,
	},
	reducers:{
		getUserLStart: (state)=>{
			state.isFetching = true;
			state.error = false;
		},
        
        getUserLSuccess:(state, action)=>{
	  	    state.isFetching = false;
	  	    state.products = action.payload;
	    }, 
	    
	    getUserLFailure:(state)=>{
	  	    state.isFetching = false;
	  	    state.error = true;
	    },
	}    
})

export const {getUserLStart, getUserLSuccess, getUserLFailure} = userLSlice.actions;
export default userLSlice.reducer;	    