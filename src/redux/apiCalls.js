import {loginStart, loginSuccess, loginFailure} from './userRedux';
import {getProductStart, getProductSuccess, getProductFailure,
        getDeleteProductStart, getDeleteProductSuccess, getDeleteProductFailure,
        getUpdateProductStart, getUpdateProductSuccess, getUpdateProductFailure,
        getAddProductStart, getAddProductSuccess, getAddProductFailure} from './productRedux';
import {getUserLStart, getUserLSuccess, getUserLFailure} from './userListRedux';
import {publicRequest, useRequest} from '../requestMethod';

export const login = async (dispatch, user) =>{
	dispatch(loginStart());
	try{
       const res = await publicRequest.post('/auth/login',user)
       dispatch(loginSuccess(res.data));  
	}
	catch(err){
		dispatch(loginFailure())
	}
}

export const getProducts = async (dispatch) =>{
	dispatch(getProductStart());
	try{
       const res = await publicRequest.get('/product')
       dispatch(getProductSuccess(res.data));  
	}
	catch(err){
		dispatch(getProductFailure())
	}
}

export const getDeleteProducts = async (id, dispatch) =>{
	dispatch(getDeleteProductStart());
	try{
       // const res = await publicRequest.delete(`/product/${id}`)
       dispatch(getDeleteProductSuccess(id));  
	}
	catch(err){
		dispatch(getDeleteProductFailure())
	}
}

export const getUpdateProducts = async (id, product, dispatch) =>{
	dispatch(getUpdateProductStart());
	try{
       // const res = await publicRequest.delete(`/product/${id}`)
       dispatch(getUpdateProductSuccess({id, product}));  
	}
	catch(err){
		dispatch(getUpdateProductFailure())
	}
}

export const getAddProducts = async (product, dispatch) =>{
	dispatch(getAddProductStart());
	try{
       const res = await useRequest.post('/product', product);
       dispatch(getAddProductSuccess(res.data));  
	}
	catch(err){
		dispatch(getAddProductFailure())
	}
}

// export const userList = async (dispatch, user) =>{
// 	dispatch(getUserLStart());
// 	try{
//        const res = await useRequest.get('users/?new=true', user)
//        dispatch(getUserLSuccess(res.data));  
// 	}
// 	catch(err){
// 		dispatch(getUserLFailure())
// 	}
// }
