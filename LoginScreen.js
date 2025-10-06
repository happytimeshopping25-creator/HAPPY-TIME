import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles, colors } from './theme';
import { supabase } from './supabaseClient';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('admin@happytime.com');
  const [password, setPassword] = useState('123456');

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert('Login Failed', error.message);
    else navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
      <TextInput placeholder="Email" placeholderTextColor={colors.muted} value={email} onChangeText={setEmail}
        style={{ backgroundColor: '#111', color: colors.text, padding: 12, borderRadius: 8, marginBottom: 10 }} />
      <TextInput placeholder="Password" placeholderTextColor={colors.muted} secureTextEntry value={password} onChangeText={setPassword}
        style={{ backgroundColor: '#111', color: colors.text, padding: 12, borderRadius: 8, marginBottom: 10 }} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
    </View>
  );
}
