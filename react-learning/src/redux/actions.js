import { API_ROOT_V2,API_ROOT, auth, signin, studymanagement, users, studies, search, sortandfilters } from '../urls';
import axios from 'axios';
export const saveStudiesData = data => {
    return { type: 'SAVE_STUDY', payload: data };
}
export const saveProfileData = data => {
    return { type: 'SAVE_PROFILE', payload: data };
}
export const showLoader = data => {
    return { type: 'SHOW_LOADER', payload: data };
}

export function loginAPI(userData) {   
   return axios.post(`${API_ROOT}${auth}/${signin}`,userData,{
     })
     .then((res)=>{         
       let obj = res.data;
      obj.statusCode = 200;
      return obj;     
   })
   .catch((error)=>{      
    return error;     
 })
}
 export const getProfileDataAPI = (userId) => {
    return (dispatch) => {
        return axios.get(`${API_ROOT_V2}${studymanagement}/${users}/${userId}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch(saveProfileData(data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getStudiesDataAPI = () => {
    return (dispatch) => {
        return axios.get(`${API_ROOT}${studymanagement}/${studies}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch(saveStudiesData(data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const getStudiesDataFilterAPI = (filterCond) => {
    return (dispatch) => {
        return axios.get(`${API_ROOT}${studymanagement}/${studies}/${search}/${sortandfilters}?search=&sort=&filter=${filterCond}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch(saveStudiesData(data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const saveSelectedStudyDetails = data => {
    return { type: 'SELECTED_STUDY', payload: data };
}