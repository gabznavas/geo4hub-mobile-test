import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    AsyncStorage.removeItem('jwt_data');
    router.replace('/');
  }, []);
  return null;
}
