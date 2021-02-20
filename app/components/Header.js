import { useLinkProps } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FBDBDB',
    padding: 5,
    width: '100%',
  },
  title: {
    fontSize: 24,
    letterSpacing: 2,
    color: '#000',
  },
})
