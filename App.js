import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

export default function App() {
  return (
    <View style={{flex:1}}>
      <GameEngine>
        
      </GameEngine>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}


