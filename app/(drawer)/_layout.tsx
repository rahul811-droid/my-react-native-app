import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer';

const DrawerRoot = () => {
  return (
    <div>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
      <Drawer.Screen name='index' />
      <Drawer.Screen name='about' />

      </Drawer>
    </GestureHandlerRootView>
    </div>
  )
}

export default DrawerRoot
