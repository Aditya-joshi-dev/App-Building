import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ImageCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ImageCard</Text>
      <View style={[styles.container, styles.elevated]}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/480044006/photo/bhaktapur-durbar-square.webp?b=1&s=170667a&w=0&k=20&c=bGvzplTWooJkOCf-VVs7j55xzW3u2FYXc7_KWauL56k=',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardDetail}>
          <Text style={[styles.title]}>Bhaktapur Darbar Square</Text>
          <Text style={[styles.cardlabel]}>
            The city is also known for its Newar tradition, cuisine and
            artisans.
          </Text>
          <Text style={[styles.description]}>
            Bhaktapur's oldest hiti is also dated from the Licchavi dynasty.
          </Text>
          <Text style={[styles.footer]}>Bhaktapur, Nepal</Text>
        </View>
      </View>


        

    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  main: {},
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  container: {
    width: 350,
    height: 410,
    borderRadius: 6,
    marginVertical: 16,
    marginHorizontal: 20,
  },
  elevated: {
    elevation: 4,
    backgroundColor: '#C6DDF0',
  },
  cardImage: {
    height: 250,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 10,
  },
  cardDetail: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 24,
  },
  description: {
    fontStyle: 'italic',
    flexShrink: 1,
  },
  cardlabel: {
    fontStyle: 'italic',
  },
  footer: {
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});
