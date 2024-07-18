import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (webSiteLink: string) => {
    Linking.openURL(webSiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.header}>
          All the Travel inspiration - in one place{' '}
        </Text>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1683800241997-a387bacbf06b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />

        <View>
          <Text style={styles.header}>Why book with Viator?</Text>
          <Text numberOfLines={3} style={styles.detail}>
            As the leading marketplace for travel experiences, we believe that
            making memories is what travel is all about. Viator makes it easy to
            explore more than 300,000 travel experiences– everything from simple
            tours to extreme adventures, and all the niche, interesting stuff in
            between. And with real traveler reviews, industry-leading
            flexibility, and 24/7 customer service, it's easy to book with
            confidence.
          </Text>
          <View style={styles.socialLinks}>
            <TouchableOpacity
              onPress={() => openWebsite('https://www.viator.com/')}>
              <Text style={styles.links}>Read More</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openWebsite('https://www.youtube.com/user/ViatorTravel')}>
              <Text style={styles.links}> Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {},
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,

  },
  cardImage: {
    height: 410,
  },
  card: {
    margin: 16,
    borderRadius: 8,
  },
  elevatedCard: {
    elevation: 3,
    backgroundColor: '#AD8A64',
  },
  detail: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 5,
  },
  socialLinks: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  
  },
  links:{
    backgroundColor: '#BFADA3',
    fontSize: 18,
    paddingHorizontal: 20,

  }
});
