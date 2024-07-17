import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headText}>ElevatedCard</Text>
    <ScrollView  horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Card 1 </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Card 1 </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Card 1 </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Card 1 </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Card 1 </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Card 1 </Text>
        </View>

    </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  container: {

  },
  card: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 5,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elevatedCard:{
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor: 'red'
  }
});
