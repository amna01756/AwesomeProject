import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Greeting({ name }) {
  const hasName = Boolean(name && name.trim().length > 0);
  const displayName = name && name.trim().length > 0 ? name.trim() : 'guest';

  return <Text style={hasName ? styles.nameText : styles.guestText}>
    Hello, {displayName}!
    </Text>;
}
const styles = StyleSheet.create({
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#191b1e',
  },
  guestText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#97989a',
  },
});
