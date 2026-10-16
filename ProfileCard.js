import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileCard({ name, role, city, isActive }) {
  const statusColor = isActive ? 'green' : 'red';
  const statusText = isActive ? 'Active' : 'Inactive';

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Role: {role}</Text>
      <Text>City: {city}</Text>
      <Text style={{ color: statusColor }}>{statusText}</Text>
    </View>
  );
}