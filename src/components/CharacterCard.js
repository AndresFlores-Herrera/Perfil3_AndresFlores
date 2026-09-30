import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CharacterCard({ character }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.status}>{character.status} - {character.species}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3, 
    shadowColor: '#33CCFF',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 3, 
    borderWidth: 1,
    borderColor: '#1F4788',
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#33CCFF',
  },
  status: {
    fontSize: 14,
    color: '#E0E0E0',
  }
});
