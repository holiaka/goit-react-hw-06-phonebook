// import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { searchKeyword } from "redux/actions";
import { FilterInput, FilterTitle, FilterBox } from './Filter'


export const Filter = () => {
    const dispatch = useDispatch();
    

    const onChange = (evt) => {
        dispatch(searchKeyword(evt.target.value));
    }

    return (
        <FilterBox>
        <FilterTitle>Find contacts by name:</FilterTitle>
        <FilterInput type="text" onChange={onChange} />
        </FilterBox>
    );
}

// Filter.propTypes = {
//     onChange: PropTypes.func.isRequired,
// }