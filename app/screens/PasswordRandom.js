import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function PasswordRandom() {
  return (
    <View style={styles.view}>
      <Text>Paswword</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
