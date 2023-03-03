// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { DeleteButton, Item } from './ContactListItem';

export const ContactListItem = ({ id, name, number }) => {  
  const dispatch = useDispatch();


  const onClickDeleteContact = () => {
    dispatch(deleteContact(id));
  }


  return (    
    <Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <DeleteButton type="button" id={id} onClick={onClickDeleteContact}>
        Delete
      </DeleteButton>
    </Item>
  );
};

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
