import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
// Colors
import {colors} from '../resources/color';

export const CoinSearch = ({onChange}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = query => {
    setInputValue(query);
    onChange(query);
  };

  return (
    <TextInput
      style={styles.textInput}
      onChangeText={handleChange}
      value={inputValue}
      placeholder="Search Coins"
      placeholderTextColor="#fff"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: colors.charade,
    paddingLeft: 16,
    color: '#fff',
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: colors.zircon,
  },
  textInputiOS: {
    margin: 8,
    borderRadius: 8,
  },
});
