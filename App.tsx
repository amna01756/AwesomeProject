import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import Day2Screen from './Day2Screen';
import Day3Screen from './Day3Screen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <MainContainer />
    </SafeAreaProvider>
  );
}

function MainContainer(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const [activeDay, setActiveDay] = useState(3);

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}>
      {/* Top Bar Switcher */}
      <View style={styles.navBar}>
        <Button
          title="View Day 2"
          color={activeDay === 2 ? '#2563EB' : '#6B7280'}
          onPress={() => setActiveDay(2)}
        />
        <Button
          title="View Day 3"
          color={activeDay === 3 ? '#2563EB' : '#6B7280'}
          onPress={() => setActiveDay(3)}
        />
      </View>

      {/* Active Screen Area */}
      <View style={styles.screenContainer}>
        {activeDay === 2 ? <Day2Screen /> : <Day3Screen />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default App;