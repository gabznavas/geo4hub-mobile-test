// Exemplo de como seria o estilo shadcn/ui no React Native:
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import { useEffect, useState } from "react";

import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { login } from "./services/api/api";

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const jwt_data = await AsyncStorage.getItem('jwt_data');
      if (jwt_data) {
        router.push('/(tabs)');
      }
    };
    checkLogin();
  }, []);
  
  const handleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await login(email, password);
      router.push('/(tabs)');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={32}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Geo4Hub</Text>
            <Text style={styles.subtitle}>Entre para continuar</Text>
          </View>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#666"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            autoComplete="email"
            autoCorrect={false}
            autoFocus={true}
            editable={!isLoading}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#666"
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            autoComplete="password"
            autoCorrect={false}
            editable={!isLoading}
            onSubmitEditing={handleLogin}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={isLoading ? 'Carregando...' : 'Login'}
              disabled={isLoading}
              color="#18181b"
              onPress={handleLogin}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#18181b',
    marginBottom: 32,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  input: {
    width: 288,
    height: 48,
    borderWidth: 1,
    borderColor: '#e4e4e7',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: '#18181b',
  },
  buttonContainer: {
    width: 288,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 2,
  },
});