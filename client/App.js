import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient, Svg } from 'expo';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 15,
            color: '#fff',
          }}>
          Sign in with Facebook
        </Text>
      </LinearGradient>
      <Svg height={100} width={100}>
        <Svg.Circle
          cx={50}
          cy={50}
          r={45}
          strokeWidth={2.5}
          stroke="#e74c3c"
          fill="#f1c40f"
        />
        <Svg.Rect
          x={15}
          y={15}
          width={70}
          height={70}
          strokeWidth={2}
          stroke="#9b59b6"
          fill="#3498db"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
