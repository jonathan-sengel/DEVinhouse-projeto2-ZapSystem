import { HStack } from '@chakra-ui/react';
import MessageSelect from './MessageSelect';
import MessageInput from './MessageInput';

const MessageFields = ({
  triggersList,
  channelsList,
  onAnyInputChange,
  isForm = false,
}) => {
  function handleChange(evt) {
    if (onAnyInputChange) {
      onAnyInputChange(evt);
    }
  }

  return (
    <HStack my="6">
      <MessageSelect
        optionsList={triggersList}
        selectId="trigger"
        selectName="trigger"
        labelText="Gatilho"
        onSelectChange={handleChange}
        required={isForm}
      />
      <MessageSelect
        optionsList={channelsList}
        selectId="channel"
        selectName="channel"
        labelText="Canal"
        onSelectChange={handleChange}
        required={isForm}
      />
      <MessageInput
        inputName="timer"
        inputId="timer"
        labelText="Timer"
        placeholder="00:00"
        onInputChange={handleChange}
        required={isForm}
      />
    </HStack>
  );
};

export default MessageFields;
