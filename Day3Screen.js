import React, { useState } from 'react';
import { ScrollView, TextInput, Text, Pressable, StyleSheet, View } from 'react-native';
import Greeting from './Greeting';
import Counter from './Counter';
import ProfileCard from './ProfileCard';
export default function Day3Screen() {
    const [name, setName] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    function toggleDetails() {
    setShowDetails(!showDetails);
  }
  return (
    <ScrollView style={style.screen} contentContainerStyle={style.contentContainer}>
      <Text style={style.title}>Day 3</Text>
      <TextInput
        style={style.input}
        placeholderTextColor="#9ca3af"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <View style={style.section}>
        <Greeting name={name} />
      </View>   
      <View style={style.section}><Counter /></View>  
      <View style={style.section}>
        <ProfileCard
        name="Amna"
        role="Mobile Intern"
        city="Lahore"
        isActive={true}
      /> 
      <ProfileCard
        name="Sara"
        role="Mobile Intern"
        city="Karachi"
        isActive={false}
      />
      </View>

      <Pressable style={style.detailsButton} onPress={toggleDetails}>
        <Text style={style.detailsButtonText}>{showDetails ? "Hide details" : "Show details"}</Text>
      </Pressable>
      {showDetails && <Text style={style.detailsText}>I am learning props and state.</Text>}
      </ScrollView>
  );
}
const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#111827',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  detailsButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  detailsButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  detailsText: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
    marginTop: 4,
  },
});