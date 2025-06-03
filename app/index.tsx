import { Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../components/ThemeContext';

const years = [
  { year: '2025', title: 'Grade - 12 Entrance' },
  { year: '2024', title: 'Result Lists' },
  { year: '2023', title: 'Result Lists' },
  { year: '2022', title: 'Result Lists' },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleYearPress = (year: string) => {
    router.push({
      pathname: '/year/[id]',
      params: { id: year }
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#222' : '#f5f5f5' }]}> 
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme === 'dark' ? '#111' : '#1976D2' }]}> 
        <DrawerToggleButton tintColor="#fff" />
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity
          onPress={toggleTheme}
          style={{
            backgroundColor: theme === 'dark' ? '#23272f' : '#e3f2fd',
            borderRadius: 24,
            paddingVertical: 8,
            paddingHorizontal: 18,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 'auto',
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
            size={20}
            color={theme === 'dark' ? '#ffd600' : '#1976D2'}
            style={{ marginRight: 6 }}
          />
          <Text style={{ color: theme === 'dark' ? '#ffd600' : '#1976D2', fontWeight: 'bold', fontSize: 15 }}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        {/* Main Entrance Card */}
        <TouchableOpacity 
          style={[styles.card, theme === 'dark' && { backgroundColor: '#333', borderColor: '#444' }]}
          onPress={() => handleYearPress('2025')}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={[{ color: '#1976D2', fontSize: 24, fontWeight: 'bold', marginBottom: 8 }, theme === 'dark' && { color: '#fff' }]}>2025 - ခုနှစ်</Text>
            <Text style={[{ color: '#1976D2', fontSize: 20, marginBottom: 4 }, theme === 'dark' && { color: '#fff' }]}>တက္ကသိုလ်ဝင်တန်းစာမေးပွဲ</Text>
            <Text style={[{ color: '#1976D2', fontSize: 16 }, theme === 'dark' && { color: '#B3E5FC' }]}>Grade - 12 Entrance</Text>
          </View>
        </TouchableOpacity>

        {/* App Download Card */}
        <TouchableOpacity style={[styles.card, theme === 'dark' && { backgroundColor: '#222', borderColor: '#333' }]}> 
          <Text style={[{ color: '#1976D2', fontSize: 16, fontWeight: '500' }, theme === 'dark' && { color: '#fff' }]}>အသုံးဝင်သော အခြား App များ</Text>
        </TouchableOpacity>

        {/* Result Cards Grid */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {years.slice(1).map((item) => (
            <TouchableOpacity
              key={item.year}
              style={[styles.card, { width: '48%', alignItems: 'center', marginBottom: 12 }, theme === 'dark' && { backgroundColor: '#333', borderColor: '#444' }]}
              onPress={() => handleYearPress(item.year)}
            >
              <Text style={[{ fontSize: 24, fontWeight: 'bold', color: '#1976D2', marginBottom: 8 }, theme === 'dark' && { color: '#E3F2FD' }]}>{item.year}</Text>
              <Text style={[{ fontSize: 14, color: '#666', textAlign: 'center' }, theme === 'dark' && { color: '#aaa' }]}>အောင်စာရင်း ({item.title})</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1976D2',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mainCard: {
    backgroundColor: '#1976D2',
    padding: 24,
  },
  cardContent: {
    alignItems: 'center',
  },
  mainCardYear: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mainCardTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 4,
  },
  mainCardSubtitle: {
    color: '#E3F2FD',
    fontSize: 16,
  },
  downloadCard: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    padding: 20,
  },
  downloadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resultCard: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  yearText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  resultText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});