import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '../components/ThemeContext';

export default function WebViewScreen() {
  const { url, title } = useLocalSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#222' : '#f5f5f5' }}>
      {/* Header */}
      <View style={{ backgroundColor: theme === 'dark' ? '#111' : '#1976D2', paddingTop: 50, paddingBottom: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 16 }}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', flex: 1 }} numberOfLines={1}>
          {decodeURIComponent(title as string)}
        </Text>
      </View>

      {/* WebView */}
      <View style={{ flex: 1, position: 'relative' }}>
        <WebView
          source={{ uri: decodeURIComponent(url as string) }}
          style={{ flex: 1 }}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />
        {isLoading && (
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: theme === 'dark' ? '#222' : '#fff' }}>
            <ActivityIndicator size="large" color="#1976D2" />
          </View>
        )}
      </View>
    </View>
  );
}