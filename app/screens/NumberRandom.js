import React, { useState, useRef } from 'react'
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'
import Header from '../components/Header'

const width = Dimensions.get('window').width

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
          <View style={styles.titleInput}>
            <Text>Min</Text>
            <TextInput
              onChangeText={(text) => setMin(text)}
              value={min}
              style={styles.inputNumber}
              defaultValue="0"
              keyboardType="phone-pad"
              selectionColor="#CDA8CD"
            />
          </View>
          <View style={styles.titleInput}>
            <Text>Max</Text>
            <TextInput
              onChangeText={(text) => setMax(text)}
              value={max}
              defaultValue="100"
              style={styles.inputNumber}
              keyboardType="phone-pad"
              selectionColor="#CDA8CD"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => RandomOutput()} activeOpacity={1}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Random</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.output}>
            <Text style={styles.outputText}>{random}</Text>
          </View>
        </View>
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
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    height: 150,

    width: width * 0.8,
    backgroundColor: '#FFF5FF',
    shadowColor: '#555',
    shadowOffset: { width: 30, height: 30 },
    shadowRadius: 1,
    shadowOpacity: 0.7,
    elevation: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    alignSelf: 'center',
  },
  inputBlock: {
    flexDirection: 'row',
    alignSelf: 'center',
    display: 'flex',
    width: width * 0.8,
    justifyContent: 'space-between',
  },
  titleInput: { alignItems: 'center' },
  inputNumber: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    padding: 5,
    width: width * 0.35,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  output: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    margin: 10,
    elevation: 10,
    alignSelf: 'center',
    width: width * 0.8,
    height: width * 0.8,
  },
  outputText: {
    color: '#CDA8CD',
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
    fontSize: 50,
  },
})
