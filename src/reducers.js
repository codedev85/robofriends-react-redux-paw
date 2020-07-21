import {CHANGE_SEARCH_FIELD , REQUEST_ROBOT_PENDING ,REQUEST_ROBOT_SUCCESS ,REQUEST_ROBOT_FAILED } from './constants.js'
const initialState= {
	searchFieldInput: ''
}

export const searchRobots = (state=initialState, action={})=>{
		
		 switch(action.type){
			case CHANGE_SEARCH_FIELD:
				return Object.assign({},state , {searchFieldInput:action.payload});
			default:
			return  state;
		}
	}

const initialstateRobots ={
    isPending: false,
    robots : [],
    error : '',
}

 export const fetchRobots = (state=initialstateRobots ,action={}) => {
 	switch(action.type) {
 		case REQUEST_ROBOT_PENDING :
 			return Object.assign({}, state , {isPending:true});
 		case REQUEST_ROBOT_SUCCESS :
 			return Object.assign({}, state , {robots:action.payload , isPending:false});
 		case REQUEST_ROBOT_FAILED:
 			return Object.assign({}, state , {error:action.payload ,isPending:false});
 		default:
 			return state;

 	}
 }
