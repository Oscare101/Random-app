import React, { useState, useRef } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Header from '../components/Header'
export default function NumberRandom() {
  const [random, setRandom] = useState()
  const [min, setMin] = React.useState('0')
  const [max, setMax] = React.useState('100')

  const RandomOutput = () => {
    if (+min < +max) {
      setRandom(Math.floor(Math.random() * (+max - +min + 1)) + +min)
    } else {
      setRandom('Please, enter correct values')
    }
  }

  return (
    <View style={styles.view}>
      <Header title="Number" />
      <View style={{ flex: 1, padding: 10 }}>
        <View style={styles.inputBlock}>
          <View>
            <Text>Min</Text>
            <TextInput
              onChangeText={(text) => setMin(text)}
              value={min}
              style={styles.inputNumber}
              defaultValue="0"
            />
          </View>
          <View>
            <Text>Max</Text>
            <TextInput
              onChangeText={(text) => setMax(text)}
              value={max}
              defaultValue="100"
              style={styles.inputNumber}
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => RandomOutput()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Random</Text>
          </View>
        </TouchableOpacity>
        <Text>
          {min},{max},{random}
        </Text>
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
  inputBlock: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
  },
  inputNumber: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    padding: 5,
    width: 70,
    backgroundColor: '#FFFFFF',
  },
})
