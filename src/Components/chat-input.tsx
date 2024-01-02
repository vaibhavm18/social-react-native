import React from 'react';
import {View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from './button';
import {TextInput} from './text-input';

type Props = {
  message: string;
  handelInput: (text: string) => void;
};
export default function ChatInput({handelInput, message}: Props) {
  return (
    <View style={tailwind` py-2 px-2 flex flex-row items-center gap-2`}>
      <TextInput
        style={tailwind`w-3/4`}
        value={message}
        onChangeText={handelInput}
      />
      <Button text="Send" variant="success" />
    </View>
  );
}
