// src/redux/clientReducer.js
const initialState = {
    name: '',
    email: '',
    profilePic: '',
  };
  
  const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CLIENT_PROFILE':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default clientReducer;
  