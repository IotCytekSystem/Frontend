// src/reducers/profileReducer.js

const initialState = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '123-456-7890',
  country: 'USA',
  county: 'Some County',
  town: 'Some Town',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define actions and their logic here if needed
    default:
      return state;
  }
};

export default profileReducer;
