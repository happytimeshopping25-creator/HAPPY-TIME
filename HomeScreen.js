import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, FlatList, Animated, TouchableOpacity } from 'react-native';
import { colors, styles } from './theme';
import { supabase } from './supabaseClient';

export default function HomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 1200, useNativeDriver: true }).start();
    loadProducts();
  }, []);

  async function loadProducts() {
    setRefreshing(true);
    const { data } = await supabase.from('products').select('*').limit(10);
    if (data) setProducts(data);
    setRefreshing(false);
  }

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: '#111', marginVertical: 10, borderRadius: 12, padding: 12 }}>
      <Image source={{ uri: item.image_url }} style={{ width: '100%', height: 160, borderRadius: 10 }} resizeMode="cover" />
      <Text style={{ color: colors.gold, fontSize: 16, fontWeight: '600', marginTop: 10 }}>{item.name}</Text>
      <Text style={{ color: colors.text, fontSize: 14 }}>${item.price}</Text>
    </View>
  );

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
        <Text style={styles.title}>🛍️ Welcome to HappyTime Mobile</Text>
        <TouchableOpacity onPress={loadProducts} style={{ marginLeft: 10 }}>
          <Text style={{ color: colors.gold, fontSize: 18 }}>🔄</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('./assets/logo.png')} style={{ width: 120, height: 120, alignSelf: 'center' }} resizeMode="contain" />
      <FlatList data={products} keyExtractor={(item) => item.id} renderItem={renderItem} showsVerticalScrollIndicator={false} />
      <TouchableOpacity
        style={{ position: 'absolute', bottom: 80, right: 20, backgroundColor: colors.gold, width: 46, height: 46, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#111' }}>⚙️</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Powered by Happy Time Shopping Center</Text>
    </Animated.View>
  );
}
