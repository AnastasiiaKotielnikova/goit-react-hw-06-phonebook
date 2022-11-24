import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';
import { Container } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Container>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilter}
        />
      </label>
    </Container>
  );
};

export default Filter;
