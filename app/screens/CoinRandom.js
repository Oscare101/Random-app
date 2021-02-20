import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CoinRandom() {
  return (
    <View style={styles.view}>
      <Text>Coin</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'yellowgreen',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
