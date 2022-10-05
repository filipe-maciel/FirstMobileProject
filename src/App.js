import React from 'react'
import { View } from 'react-native'

import Multi, { Comp2, Comp3 } from './components/Multi'
import FirstExample from './components/First'

export default () => (
  <View>
    <Multi />
    <Comp2 />
    <Comp3 />
    <FirstExample />
  </View>
)