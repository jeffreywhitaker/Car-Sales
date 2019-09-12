import { ADD_FEATURE, REMOVE_FEATURE } from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const mainReducer = (state = initialState, action) => {
  console.log('reducing');
  switch (action.type) {
    case ADD_FEATURE:
      console.log('ADD_FEATURE was called');
      const updatedFeatures = [
        ...state.car.features
      ]
      if (state.car.features.findIndex((feature) => {return feature.id === action.payload.id}) === -1) {
        updatedFeatures.push(action.payload)
      }
      return {
        ...state,
        additionalPrice: updatedFeatures.reduce((acc, feature) => {return acc + feature.price}, 0),
        car: {
          ...state.car,
          features: updatedFeatures
        }
      };
    case REMOVE_FEATURE:
      console.log('REMOVE_FEATURE was called');
      const updatedFeatures2 = state.car.features.filter(
        (feature) => {
          if (feature.id === action.payload) {
              return false
          } else return true
        }
      )
      return {
        ...state,
        additionalPrice: updatedFeatures2.reduce((acc, feature) => {return acc + feature.price}, 0),
        car: {
          ...state.car,
          features: updatedFeatures2
        }
      }
    default:
      return state;
  }
};
