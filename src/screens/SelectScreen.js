import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {COLOR} from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SelectScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.picContainer}>
        <Text>Pic</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.itemPostThumb}>
          <Text>THUMB</Text>
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
        <View>
          <Text>
            Sometimes a scrollview takes up more space than its content fills.
            When this is the case, this prop will fill the rest of the
            scrollview with a color to avoid setting a background and creating
            unnecessary overdraw. This is an advanced optimization that is not
            needed in the general case.
          </Text>
        </View>
      </View>
    </View>
  );
};

export const screenOptions = () => ({
  headerTitle: 'Select Screen',
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.PAGE_COLOR,
  },
  picContainer: {
    backgroundColor: COLOR.SECONDARY_TEXT_COLOR,
    height: 270,
  },
  infoContainer: {
    paddingHorizontal: 16,
  },
  itemPostThumb: {
    borderColor: COLOR.TEXT_COLOR,
    borderWidth: 4,
    borderRadius: 50,
    width: 74,
    height: 74,
  },
  itemPostThumbName: {
    borderBottomColor: COLOR.POST_BORDER_COLOR,
    borderBottomWidth: 2,
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
