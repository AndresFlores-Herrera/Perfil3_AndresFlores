import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function StudentInfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evaluación Práctica</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>Andres Gabriel Flores Herrera</Text>
        
        <Text style={styles.label}>Carnet:</Text>
        <Text style={styles.value}>20240147</Text>
        
        <Text style={styles.label}>Sección y grupo:</Text>
        <Text style={styles.value}>1A</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ApiData')}
      >
        <Text style={styles.buttonText}>Ver Datos de la API</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#33CCFF',
    textShadowColor: '#1F4788',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  card: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    elevation: 5,
    shadowColor: '#33CCFF', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 5,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#1F4788',
  },
  label: {
    fontSize: 14,
    color: '#7EC8E3',
    marginTop: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1F4788',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#33CCFF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
