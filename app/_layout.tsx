import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeProvider, useTheme } from '../components/ThemeContext';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { theme, toggleTheme } = useTheme();
  const renderMenuItem = useCallback((icon: string, label: string, onPress: () => void) => {
    return (
      <TouchableOpacity
        style={[
          styles.menuItem,
          theme === 'dark' && { backgroundColor: '#23272f', borderBottomColor: '#333' }
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Ionicons name={icon as any} size={24} color={theme === 'dark' ? '#90caf9' : '#1976D2'} />
        <Text style={[styles.menuText, theme === 'dark' && { color: '#e3f2fd' }]}>{label}</Text>
      </TouchableOpacity>
    );
  }, [theme]);

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#181a20' : '#fff' }]}> 
      <View style={[styles.header, { backgroundColor: theme === 'dark' ? '#23272f' : '#1976D2' }]}> 
        <View style={styles.logoContainer}>
          <Text style={[styles.appName, theme === 'dark' && { color: '#fff' }]}>MM-Exam App</Text>
          <Text style={[styles.appDesc, theme === 'dark' && { color: '#b3c2d6' }]}>Old Questions, Result List and References</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 16 }}>
        <TouchableOpacity
          onPress={toggleTheme}
          style={{
            backgroundColor: theme === 'dark' ? '#23272f' : '#e3f2fd',
            borderRadius: 24,
            paddingVertical: 10,
            paddingHorizontal: 28,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: theme === 'dark' ? '#000' : '#1976D2',
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 2,
          }}
          activeOpacity={0.8}
        >
          <Ionicons
            name={theme === 'dark' ? 'sunny' : 'moon'}
            size={22}
            color={theme === 'dark' ? '#ffd600' : '#1976D2'}
            style={{ marginRight: 8 }}
          />
          <Text style={{ color: theme === 'dark' ? '#ffd600' : '#1976D2', fontWeight: 'bold', fontSize: 16 }}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        {renderMenuItem('home-outline', 'Home', () => props.navigation.navigate('index'))}
        {renderMenuItem('document-text-outline', 'Old Questions', () => props.navigation.navigate('old-questions'))}
        {renderMenuItem('download-outline', 'Download', () => props.navigation.navigate('download'))}
        {renderMenuItem('heart-outline', 'Click To Donate', () => props.navigation.navigate('donate'))}
      </View>
    </View>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#fff',
            width: '80%',
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
      </Drawer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1976D2',
    padding: 16,
    paddingTop: 60,
    paddingBottom: 20,
  },
  logoContainer: {
    marginLeft: 8,
  },
  appName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  appDesc: {
    color: '#E3F2FD',
    fontSize: 14,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom: 6,
  },
  menuText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
