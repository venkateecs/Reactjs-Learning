import { combineReducers } from 'redux';


const studiesInitialState = {
  studiesList: [],
};

const profileInitialState = {
    profileData: {},
    showLoader: false,
    selectedStudy: {},    
  };

const studiesReducer = (state = studiesInitialState, action) => {
    switch (action.type) {
        case 'SAVE_STUDY':            
            return {
                ...state,
                studiesList: action.payload,
            };
        default:
            return state;
    }
};

const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {
        case 'SAVE_PROFILE':            
            return {
                ...state,
                profileData: action.payload,
            };
          case 'SELECTED_STUDY':
              return {
                  ...state,
                  selectedStudy: action.payload 
              }
            case 'SHOW_LOADER':            
            return {
                ...state,
                showLoader: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
 studies:studiesReducer,
 user: profileReducer,
});

export default rootReducer;