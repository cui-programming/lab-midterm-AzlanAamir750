import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui';  // Changed from '../../ui'
import { styles } from '../../styles/styles';

export default function TeacherMessage() {
  return (
    <View style={styles.section}>
      <Text style={styles.teacherText}>
        This app demonstrates React Native components and state management.
      </Text>
    </View>
  );
}
