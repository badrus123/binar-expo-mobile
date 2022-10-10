import React from 'react'
import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello Home</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>
        Hello Home
      </Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello Home</Text>
    </View>
  )
}
