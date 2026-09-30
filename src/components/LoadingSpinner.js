import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

export default function LoadingSpinner({ message = "Cargando..." }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#33CCFF" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2C2C',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#33CCFF',
    fontWeight: 'bold',
  }
});
