import { Box, Text, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { timerMask } from '../utils';

const MessageInput = ({
  inputName,
  inputId,
  labelText,
  placeholder,
  onInputChange,
  ...props
}) => {
  const [valor, setValor] = useState('');
  function handleChange(evt) {
    const newValue = timerMask(evt.target.value);
    setValor(newValue);
    if (onInputChange) {
      onInputChange(evt);
    }
  }
  return (
    <Box flexBasis="20%">
      <Text as="label" htmlFor={inputId} fontSize="sm">
        {labelText}
      </Text>
      <Input
        bg="white"
        name={inputName}
        id={inputId}
        value={valor}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
        maxLength="5"
      />
    </Box>
  );
};

export default MessageInput;
