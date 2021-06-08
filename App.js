import React from 'react';
import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View, Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

export default function App() {

  const clearView = async () => {
    Alert.alert('Cancelando...');
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity 
          accessible={true}
          accessibilityRole='search'>
            <View>
              <Icon name="map-marker-alt" size={40} style={styles.icon} />
              <TextInput 
                style = {styles.input}
                clearButtonMode="while-editing"
                elevation={5}
                placeholder='Buscar'
                placeholderTextColor='#999999'></TextInput>
            </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={clearView}>
            <Text style = {styles.cancel}>
              Cancelar
            </Text>
        </TouchableOpacity>

      </View>
      

      <View style={styles.result} id="results">

        <Text style={styles.titleAddress}>
          Búsqueda de Ejemplo N°1
        </Text>
        <Text style={styles.subTitleAddress}>
          Avenida Ejemplo 1, Lima, Perú
        </Text>

        <View style = {styles.lineStyle} ></View>

        <Text style={styles.titleAddress}>
          Búsqueda de Ejemplo N°2
        </Text>
        <Text style={styles.subTitleAddress}>
          Avenida Ejemplo 2, Lima, Perú
        </Text>

        <View style = {styles.lineStyle} ></View>

        <Text style={styles.titleAddress}>
          Búsqueda de Ejemplo N°3
        </Text>
        <Text style={styles.subTitleAddress}>
          Avenida Ejemplo 3, Lima, Perú
        </Text>

        <View style = {styles.lineStyle} ></View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f7',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 35,
    flexDirection: 'row'
  },
  input: {
    width: 250,
    backgroundColor: "#ffffff",
    marginTop: 50,
    marginHorizontal: 10,
    paddingVertical: 15,
    paddingRight: 0,
    paddingLeft: 50,
    borderRadius: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  icon: {
    lineHeight: 35,
    fontSize: 20,
    position: 'absolute',
    marginTop: 62,
    marginLeft: 25,
    marginRight: 0,
    padding: 0,
    zIndex: 1
  },
  cancel: {
    textAlign: 'right',
    color: '#d25342',
    fontSize: 20,
    marginTop: 52
  },
  result: {
    padding: 12
  },
  titleAddress: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#392f2d'
  },
  subTitleAddress: {
    fontSize: 16,
    color: '#392f2d'
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#f2f2f2',
    margin: 10
  }
});
