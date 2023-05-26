import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';

export default function App() {
  const [setText] = useState('');
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png' }} style={{ width: 300, height: 100, margin: 10 }}></Image>
      <TextInput style={styles.input}
        placeholder="Search Here..."
        placeholderTextColor="#5d6165"
        onChangeText={newText => setText(newText)}></TextInput>
      <View style={{ alignItems: 'flex-start', flexDirection: 'row', margin: 10 }}>
        <View style={styles.buttonView}>
          <Pressable style={styles.button}>
            <Text style={styles.buttontText}>Search Google</Text>
          </Pressable>
        </View>
        <View style={styles.buttonView}>
          <Pressable style={styles.button}>
            <Text style={styles.buttontText}>I am feeling lucky</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonView: {
    margin: 5,
  },

  button: {
    margin: 5,
    backgroundColor: '#303134',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },

  buttontText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  input: {
    color: '#fff',
    backgroundColor: '#202124',
    height: '5%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#5d6165',
    borderRadius: 20,
    width: '98%',
    margin: '2%'
  }
});
