import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { DeleteButton, Item } from './ContactListItem';

export const ContactListItem = ({ id, name, number }) => {  
  const dispatch = useDispatch();
  const findElement = useSelector(state => state.filter);

  return (    
    <>
      {name.toLowerCase().includes(findElement.toLowerCase())&&<Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <DeleteButton type="button" id={id} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </Item>}
    </>
    
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
