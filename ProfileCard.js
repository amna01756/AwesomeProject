import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileCard({ name, role, city, isActive }) {
  const statusText = isActive ? 'Active' : 'Inactive';

  return (
    <View style={style.card}>
      <View style={style.headerRow}>
        <Text style={style.name}>{name}</Text>
        <View style={[style.badge, isActive ? style.activeBadge : style.inactiveBadge]}>
          <Text style={[style.badgeText, isActive ? style.activeText : style.inactiveText]}>
            {statusText}
          </Text>
        </View>
      </View>

      <Text style={style.infoText}>
        <Text style={style.label}>Role: </Text>
        {role}
      </Text>

      <Text style={style.infoText}>
        <Text style={style.label}>City: </Text>
        {city}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activeBadge: {
    backgroundColor: '#dcfce7',
  },
  inactiveBadge: {
    backgroundColor: '#fee2e2',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  activeText: {
    color: '#15803d',
  },
  inactiveText: {
    color: '#b91c1c',
  },
  infoText: {
    fontSize: 14,
    color: '#374151',
    marginTop: 4,
  },
  label: {
    fontWeight: '600',
    color: '#6b7280',
  },
});

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

