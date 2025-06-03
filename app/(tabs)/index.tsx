import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import React from 'react';
import { Button, Platform, StyleSheet, View } from 'react-native';
import { useTheme } from '../../components/ThemeContext';

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme();
  return (
    <ParallaxScrollView
      headerBackgroundColor={theme === 'dark' ? { light: '#1D3D47', dark: '#1D3D47' } : { light: '#A1CEDC', dark: '#A1CEDC' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={{ alignItems: 'flex-end', margin: 10 }}>
        <Button
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onPress={toggleTheme}
        />
      </View>
      <ThemedView style={[styles.titleContainer, theme === 'dark' && { backgroundColor: '#222' }]}> 
        <ThemedText type="title" style={theme === 'dark' && { color: '#fff' }}>Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={[styles.stepContainer, theme === 'dark' && { backgroundColor: '#222' }]}> 
        <ThemedText type="subtitle" style={theme === 'dark' && { color: '#fff' }}>Step 1: Try it</ThemedText>
        <ThemedText style={theme === 'dark' && { color: '#fff' }}>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={[styles.stepContainer, theme === 'dark' && { backgroundColor: '#222' }]}> 
        <ThemedText type="subtitle" style={theme === 'dark' && { color: '#fff' }}>Step 2: Explore</ThemedText>
        <ThemedText style={theme === 'dark' && { color: '#fff' }}>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={[styles.stepContainer, theme === 'dark' && { backgroundColor: '#222' }]}> 
        <ThemedText type="subtitle" style={theme === 'dark' && { color: '#fff' }}>Step 3: Get a fresh start</ThemedText>
        <ThemedText style={theme === 'dark' && { color: '#fff' }}>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
