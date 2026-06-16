import AsyncStorage from '@react-native-async-storage/async-storage';
export const USER_KEY='habitflow_user';
export const HABITS_KEY='habitflow_habits';
export async function saveUser(user){await AsyncStorage.setItem(USER_KEY,JSON.stringify(user));}
export async function loadUser(){const data=await AsyncStorage.getItem(USER_KEY);return data?JSON.parse(data):null;}
export async function clearUser(){await AsyncStorage.removeItem(USER_KEY);}
export async function saveHabits(habits){await AsyncStorage.setItem(HABITS_KEY,JSON.stringify(habits));}
export async function loadHabits(){const data=await AsyncStorage.getItem(HABITS_KEY);return data?JSON.parse(data):null;}
