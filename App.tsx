import React from 'react'
import { StatusBar, LogBox } from 'react-native'

import { Home } from './src/pages/Home'

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load RCTDevLoadingView. This may lead to deadlocks'])

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <Home />
    </>
  )
}