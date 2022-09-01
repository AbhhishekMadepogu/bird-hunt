import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Physics from './physics'
 import entities from './entities';
export default function App() {
  const [running,setRunning]=useState(false)
  useEffect(()=>{setRunning(true)
  },[])
  return (
    <View style={{ flex: 1 }}>
      <GameEngine
      systems={[Physics]}
        entities={entities()}
        running={running}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
    </View>
  );
}
