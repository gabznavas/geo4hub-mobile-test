import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Geo4Hub</Text>
        <Text style={styles.drawerSubtitle}>Menu Principal</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: '#000',
          drawerInactiveTintColor: '#64748b',
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: '600',
          },
          headerTitleStyle: {
            fontWeight: '800',
          },
        }}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Geo4Hub',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Configurações',
            title: 'Configurações',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="cog" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="logout"
          options={{
            drawerLabel: 'Sair',
            title: 'Sair',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="sign-out" size={size} color={color} />
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#f8fafc',
  },
  drawerHeader: {
    padding: 20,
    // backgroundColor: '#0f172a',
    marginTop: -5,
    marginBottom: 10,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: '700',
    // color: '#f8fafc',
    marginBottom: 4,
  },
  drawerSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
  },
});
