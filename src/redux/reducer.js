import { addContact, deleteContact, searchKeyword } from './actions';

const contactsInitialState = [];

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
      case addContact.type:
          console.log(state);
      return [...state, action.payload];
    case deleteContact.type:
      return state.map(item => item.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = '';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case searchKeyword.type:
      return state.filter(item =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    default:
      return state;
  }
};