import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headText}>FlatCard</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <Text style={[styles.box, styles.cardOne]}>Box 1</Text>
          <Text style={[styles.box, styles.cardTwo]}>Box 1</Text>
          <Text style={[styles.box, styles.cardThree]}>Box 1</Text>
          <Text style={[styles.box, styles.cardFour]}>Box 1</Text>
          <Text style={[styles.box, styles.cardFive]}>Box 1</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  headText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  box: {
    height: 80,
    width: 80,
    margin: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'gold',
  },
  cardThree: {
    backgroundColor: 'skyblue',
  },
  cardFour: {
    backgroundColor: 'green',
  },
  cardFive: {
    backgroundColor: 'violet',
  },
});
