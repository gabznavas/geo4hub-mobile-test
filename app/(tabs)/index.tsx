import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('jwt_data');
      router.replace('/');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao fazer logout');
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao Geo4Hub</Text>
      <View style={styles.separator} />
      <Pressable style={styles.button} onPress={handleLogout}>
        <FontAwesome name="sign-out" size={24} color="white" />
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#18181b',
    padding: 10,
    borderRadius: 8,
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
