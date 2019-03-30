import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({setSize}) => {
  return (
      // using view tag to position spinner
      <View style={styles.spinnerStyle}>
          <ActivityIndicator size={setSize || 'large'}/>
      </View>
  );
};

const styles = {
  spinnerStyle: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  }
};

export { Spinner };