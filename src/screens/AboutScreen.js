import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
    </View>
  );
};

export const screenOptions = () => ({
  headerTitle: 'About Screen',
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
