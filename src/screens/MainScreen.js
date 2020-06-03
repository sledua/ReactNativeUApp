import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../theme';

export const MainScreen = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('SelectScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerPost}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.itemPostPic}
          onPress={pressHandler}>
          <Text>Pic</Text>
        </TouchableOpacity>
        <View style={styles.itemPostThumb}>
          <Text>Thumb</Text>
        </View>
        <View style={styles.itemPostThumbName}>
          <Text style={styles.itemPostThumbNameText}>Artem Artem</Text>
        </View>
        <View style={styles.itemPostIcons}>
          <View style={styles.itemPostIconBox}>
            <Icon name="md-eye" size={26} color={COLOR.TEXT_COLOR} />
            <Text style={styles.IconBoxCounter}>429,879</Text>
          </View>
          <View style={styles.itemPostIconBox}>
            <Icon name="md-cloud-download" size={26} color={COLOR.TEXT_COLOR} />
            <Text style={styles.IconBoxCounter}>9,879</Text>
          </View>
          <View style={styles.itemPostIconBox}>
            <Icon name="md-calendar" size={26} color={COLOR.TEXT_COLOR} />
            <Text style={styles.IconBoxCounter}>2.12.2020</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const screenOptions = () => ({
  headerTitle: 'Main Screen',
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLOR.PAGE_COLOR,
  },
  containerPost: {
    borderColor: COLOR.POST_BORDER_COLOR,
    borderWidth: 1,
    backgroundColor: COLOR.POST_COLOR,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  itemPostPic: {
    height: 270,
    backgroundColor: '#787575',
  },
  itemPostThumb: {
    backgroundColor: '#333',
    borderColor: COLOR.POST_COLOR,
    borderWidth: 4,
    borderRadius: 50,
    width: 74,
    height: 74,
    alignSelf: 'center',
    position: 'absolute',
    top: 250,
  },
  itemPostThumbName: {
    marginTop: 45,
    alignSelf: 'center',
  },
  itemPostThumbNameText: {
    fontSize: 20,
  },
  itemPostIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  itemPostIconBox: {
    flexDirection: 'row',
  },
  IconBoxCounter: {
    fontSize: 19,
    marginHorizontal: 8,
  },
});
