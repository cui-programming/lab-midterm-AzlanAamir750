import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  const handleIncrement = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, count: Math.max(0, item.count - 1) } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <View style={styles.counterRow}>
        <Text style={styles.counter}>Count: {item.count}</Text>
        <View style={styles.buttonGroup}>
          <Button
            title="−"
            onPress={() => handleDecrement(item.id)}
            style={styles.counterButton}
            textStyle={{ fontSize: 18 }}
          />
          <Button
            title="+"
            onPress={() => handleIncrement(item.id)}
            style={styles.counterButton}
            textStyle={{ fontSize: 18 }}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
