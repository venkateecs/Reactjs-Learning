import { combineReducers } from 'redux';


const initialState = {
  studiesList: [],
};

const studiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_STUDY':
            console.log('SAS',action)            
            return {
                ...state,
                studiesList: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
 studies:studiesReducer
});

export default rootReducer;