import * as Notifications from 'expo-notifications';
export async function requestNotificationPermissions(){
 const {status}=await Notifications.requestPermissionsAsync();
 return status==='granted';
}
export async function scheduleHabitReminder(title='Habit reminder'){
 const allowed=await requestNotificationPermissions();
 if(!allowed)return null;
 return Notifications.scheduleNotificationAsync({content:{title:'HabitFlow Reminder',body:title},trigger:{seconds:5}});
}
export async function triggerTestNotification(){
 return scheduleHabitReminder('This is a successfully triggered test notification.');
}
