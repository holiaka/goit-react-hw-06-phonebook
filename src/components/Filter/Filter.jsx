// import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterTitle, FilterBox } from './Filter'


export const Filter = () => {
    const dispatch = useDispatch();
    

    const onChange = (evt) => {

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