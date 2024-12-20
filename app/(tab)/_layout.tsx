import { Tabs } from 'expo-router'
import React from 'react'
import { View } from 'react-native'



const Tabroot = () => {
  return (
  <Tabs>
    <Tabs.Screen name='index' options={{title:"Home"}}/>
    <Tabs.Screen name='about' options={{title:"About Us"}}/>
    <Tabs.Screen name='profile' options={{title:"Profile"}}/>
  </Tabs>
  )
}

export default Tabroot
