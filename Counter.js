import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);
  const isZero = count === 0;

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <View style={style.card}>
      <Text style={style.countText}>Count: {count}</Text>
      <View style={style.buttonRow}>

      <Pressable style={style.button} onPress={increment}>
        <Text style={style.buttonText}>+</Text>
      </Pressable>

      <Pressable 
      style={isZero ? style.disabledButton : style.button} 
      onPress={decrement}
      disabled={isZero}>
        <Text style={isZero ? style.disabledButtonText : style.buttonText}>−</Text>
      </Pressable>

      <Pressable style={style.resetButton} onPress={reset}>
        <Text style={style.resetButtonText}>Reset</Text>
      </Pressable>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111827',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 48,
  },
disabledButtonText: {
    color: '#9ca3af',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#4b5563',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
