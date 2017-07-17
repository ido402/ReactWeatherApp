import {FETCH_WEATHER} from '../actions/index';
export default function(state=[], action){

    switch(action.type){
        case FETCH_WEATHER:
            return state.concat([action.payload.data]); //adding results to current array/list
            //return [ action.payload.data, ...state ]; //adding results to current array/list - ES6 way
    }
    return state;   
} 