// import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ContactListItem } from "components/ContactListItem/ContactListItem.jsx";
import { Wrapper } from './ContactList';



export const ContactList = () => {
    return (<Wrapper>
        {useSelector(state => state.contacts.list).map(({ id, name, number }) => (            
            <ContactListItem key={id} id={id} name={name} number={number}></ContactListItem>           
        ))}
    </Wrapper>);
}

// ContactList.propTypes = {
//     contacts: PropTypes.func.isRequired,
//     deleteContact: PropTypes.func.isRequired,
// }