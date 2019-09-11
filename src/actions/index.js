// STEP 4 - ALL the action things
// actions - objects that describe to a reducer how state should change based on some event
// action creators - a function that "creates" and action by return action objects out of it
// action types - capture action type strings in a variable to save us from misspellings

export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = feature => {
  console.log('called addFeature action');
  return { type: ADD_FEATURE, payload: feature };
};

export const removeFeature = id => {
  return { type: REMOVE_FEATURE, payload: id };
};
