import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from '../ui';
import { styles } from '../../styles/styles';

export default function SearchAndAdd({ items, setItems, setSearchQuery }) {
  const [newPhrase, setNewPhrase] = useState('');

  const handleSearch = (text) => {
    
    setSearchQuery(text.toLowerCase());
  };

  const handleAdd = () => {
    const phrase = newPhrase.trim();
    if (!phrase) return;

    
    const exists = items.some(
      (item) => item.phrase.toLowerCase() === phrase.toLowerCase()
    );

    if (!exists) {
      const newItem = {
        id: Date.now().toString(),
        phrase,
        count: 0,
      };
      setItems((prev) => [...prev, newItem]);
      setNewPhrase('');
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search & Add Zikr</Text>

      {/* 🔍 Search box */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search azkaar..."
        onChangeText={handleSearch}
      />

      {/* ➕ Add new phrase */}
      <View style={styles.addContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Add new zikr phrase..."
          value={newPhrase}
          onChangeText={setNewPhrase}
        />
        <Button
          title="Add"
          onPress={handleAdd}
          style={styles.addButton}
          textStyle={styles.addButtonText}
        />
      </View>
    </View>
  );
}
