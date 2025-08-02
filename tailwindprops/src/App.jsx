import React from 'react'
import { useState } from 'react'
import './App.css'
import './components/Card'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <Card username="Kaushik"/>
    <Card username="KK"/>
    <Card username="Kumar" post="something"/>
    </>
  )
}

export default App
