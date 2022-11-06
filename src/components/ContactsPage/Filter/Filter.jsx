import { changeFilter } from 'redux/filter/filterSlice';
import { Label, Input, Text, Form } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(changeFilter({ filter: e.target.value.toLowerCase().trim() }));

  return (
    <Form>
      <Label>
        <Text>Find contacts by name</Text>
        <Input type="text" name="searchName" onChange={handleFilter} />
      </Label>
    </Form>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};
