import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const LikedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LikedScreen</Text>
    </View>
  );
};

export const screenOptions = () => ({
  headerTitle: 'Liked Screen',
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
