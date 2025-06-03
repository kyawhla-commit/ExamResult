import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../components/ThemeContext';

const regions = [
  { id: 1, name: 'ရန်ကုန်တိုင်းဒေသကြီး', url: 'https://2024.myanmarexam.org/' },
  { id: 2, name: 'မန္တလေးတိုင်းဒေသကြီး', url: 'https://example.com/mandalay' },
  { id: 3, name: 'နေပြည်တော်', url: 'https://example.com/naypyitaw' },
  { id: 4, name: 'ရှမ်းပြည်နယ်', url: 'https://example.com/shan' },
  { id: 5, name: 'စစ်ကိုင်းတိုင်းဒေသကြီး', url: 'https://example.com/sagaing' },
  { id: 6, name: 'မကွေးတိုင်းဒေသကြီး', url: 'https://example.com/magway' },
  { id: 7, name: 'ပဲခူးတိုင်းဒေသကြီး', url: 'https://example.com/bago' },
  { id: 8, name: 'တနင်္သာရီတိုင်းဒေသကြီး', url: 'https://example.com/tanintharyi' },
  { id: 9, name: 'ကချင်ပြည်နယ်', url: 'https://example.com/kachin' },
  { id: 10, name: 'ကယားပြည်နယ်', url: 'https://example.com/kayah' },
  { id: 11, name: 'ကရင်ပြည်နယ်', url: 'https://example.com/kayin' },
  { id: 12, name: 'ချင်းပြည်နယ်', url: 'https://example.com/chin' },
  { id: 13, name: 'မွန်ပြည်နယ်', url: 'https://example.com/mon' },
  { id: 14, name: 'ရခိုင်ပြည်နယ်', url: 'https://example.com/rakhine' },
  { id: 15, name: 'ဧရာဝတီတိုင်းဒေသကြီး', url: 'https://example.com/ayeyarwady' }
];

export default function RegionScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { theme } = useTheme();

  const handleRegionPress = (region: { name: string; url: string }) => {
    router.push({
      pathname: '/webview',
      params: {
        url: encodeURIComponent(region.url),
        title: encodeURIComponent(region.name)
      }
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#222' : '#f5f5f5' }]}> 
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme === 'dark' ? '#111' : '#1976D2' }]}> 
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>တိုင်း/ပြည်နယ် - Regions</Text>
      </View>
      <ScrollView style={styles.content}>
        {regions.map((region) => (
          <TouchableOpacity
            key={region.id}
            style={[styles.regionItem, theme === 'dark' && { backgroundColor: '#333', borderColor: '#444' }]}
            onPress={() => handleRegionPress(region)}
          >
            <View style={[styles.logoContainer, theme === 'dark' && { backgroundColor: '#222' }]}> 
              <Ionicons name="location" size={24} color="#1976D2" />
            </View>
            <Text style={[styles.regionName, theme === 'dark' && { color: '#fff' }]}>{region.name}</Text>
            <Ionicons name="chevron-forward" size={24} color="#1976D2" />
          </TouchableOpacity>
        ))}
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
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  regionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoContainer: {
    width: 40,
    height: 40,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
  },
  regionName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});