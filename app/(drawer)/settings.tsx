import { StyleSheet, Text, View } from 'react-native';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text style={styles.text}>Aqui você pode configurar suas preferências</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
});
