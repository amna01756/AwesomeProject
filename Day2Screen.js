import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import {
  introText,
  isAdult,
  grade,
  dayName,
  doubledNumbers,
  longNames,
  userRole,
  fullName,
  getEvenNumbers,
  countOver15,
  describe,
  formattedString,
  sum,
  onlyNames,
  canLogin,
} from './practice';

export default function Day2Screen() {
  const userCan = { isActive: true, role: 'intern' };
  const userCannot = { isActive: false, role: 'intern' };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.title}>JavaScript Practice (Day 2)</Text>
      <Text>{'\n'}</Text>
      <Text>1. {introText}</Text>
      <Text>2. Age 17: {String(isAdult(17))} | Age 21: {String(isAdult(21))}</Text>
      <Text>3. Score 40: {grade(40)} | Score 75: {grade(75)}</Text>
      <Text>4. Day 3: {dayName(3)} | Day 9: {dayName(9)}</Text>
      <Text>5. [{doubledNumbers.join(', ')}]</Text>
      <Text>6. [{longNames.join(', ')}]</Text>
      <Text>7. {userRole}</Text>
      <Text>8. {fullName({ first: 'Amna', last: 'Mushtaq' })}</Text>
      <Text>9. {getEvenNumbers()}</Text>
      <Text>10. {countOver15} numbers</Text>
      <Text>11. {describe({ name: 'Amna', skills: ['JS', 'Git'] })}</Text>
      <Text>12. "{formattedString}"</Text>
      <Text>13. Sum: {sum([4, 7, 9])}</Text>
      <Text>14. {onlyNames}</Text>
      <Text>15. Active: {String(canLogin(userCan))} | Inactive: {String(canLogin(userCannot))}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});