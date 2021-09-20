import { Text, Select, Box } from '@chakra-ui/react';

const MessageSelect = ({
  optionsList,
  labelText,
  selectName,
  selectId,
  onSelectChange,
  value,
  ...props
}) => {
  optionsList = [{ id: 0, name: '' }, ...optionsList];

  function handleChange(evt) {
    if (onSelectChange) {
      onSelectChange(evt);
    }
  }

  return (
    <Box flexBasis="40%">
      <Text as="label" fontSize="sm" htmlFor={selectId}>
        {labelText}
      </Text>
      <Select
        bg="white"
        name={selectName}
        id={selectId}
        onChange={handleChange}
        value={value}
        {...props}
      >
        {optionsList.map(item => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};

export default MessageSelect;
