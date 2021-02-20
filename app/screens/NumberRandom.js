import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header'
export default function NumberRandom() {
  const [random, setRandom] = useState()
  return (
    <View style={styles.view}>
      <Header title="Number" />
      <View style={{ flex: 1, padding: 10 }}>
        <TouchableOpacity
          onPress={() => setRandom(Math.trunc(Math.random() * 1000))}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Random</Text>
          </View>
        </TouchableOpacity>
        <Text>{random}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFF5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFD4FF',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 22,
  },
})
