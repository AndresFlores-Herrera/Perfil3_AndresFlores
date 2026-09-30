import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import useFetchCharacters from '../hooks/useFetchCharacters';
import CharacterCard from '../components/CharacterCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ApiDataScreen() {
  const { data, loading, error } = useFetchCharacters();

  if (loading) {
    return <LoadingSpinner message="Cargando personajes..." />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error al cargar los datos.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2C2C',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 16,
  },
  list: {
    paddingVertical: 10,
  }
});
