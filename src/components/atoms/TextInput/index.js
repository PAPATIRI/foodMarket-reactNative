import React from 'react';
import {StyleSheet, Text, TextInput as TextInputRN, View} from 'react-native';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#020202',
    padding: 10,
  },
});
