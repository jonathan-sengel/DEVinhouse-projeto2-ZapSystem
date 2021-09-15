import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SelectInput = styled.select`
  border: 1px solid #c9cfd6;
  font-size: 16px;
  padding: 5px;
  border-radius: 4px;
`;

const Select = ({ selectName, selectId, listOptions = [], onChange }) => {
  const filteredOptions = listOptions.reduce(
    (acc, atual) => {
      if (acc.indexOf(atual[selectName]) > -1) {
        return acc;
      }
      return [...acc, atual[selectName]];
    },
    [""]
  );

  return (
    <SelectContainer>
      <label htmlFor={selectId}>{selectName}</label>
      <SelectInput name={selectName} id={selectId} onChange={(evt) => onChange(evt)}>
        {filteredOptions.map((opt, index) => {
          return <option key={index}>{opt}</option>;
        })}
      </SelectInput>
    </SelectContainer>
  );
};

export default Select;
