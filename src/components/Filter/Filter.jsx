import { FilterTitle, FilterInput } from './Filter.styled';
import { setFilterValue } from 'redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const filterInputHandler = e => {
    const inputValue = e.target.value;
    dispatch(setFilterValue(inputValue));
  };

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={filterInputHandler}
        title="Search field"
        required
      />
    </div>
  );
};

export default Filter;