import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed, children }) => {
    const { buttonStyle, textStyle } = styles;

  return (
      <TouchableOpacity onPress={whenPressed} style={buttonStyle}>
        <Text style={textStyle}>
            {children}
        </Text>
      </TouchableOpacity>
  );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#a4c639',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a4c639',
        marginLeft: 5,
        marginRight: 5
    }
};
// ios blue color #007aff
export { Button };