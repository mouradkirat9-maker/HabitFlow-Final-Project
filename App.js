import React,{useEffect,useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from './context/ThemeContext';
import {loadUser} from './services/storage';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SettingsMenuScreen from './screens/SettingsMenuScreen';
import SettingsScreen from './screens/SettingsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
function AppContent(){const[screen,setScreen]=useState('signup');const[user,setUser]=useState(null);const[selectedHabit,setSelectedHabit]=useState(null);useEffect(()=>{async function check(){const u=await loadUser();if(u){setUser(u);setScreen('home');}}check();},[]);function login(u){setUser(u);setScreen('home');}function selectHabit(h){setSelectedHabit(h);setScreen('detail');}return <SafeAreaView style={{flex:1}}>{screen==='signup'&&<SignupScreen onSignup={login} onLoginLink={()=>setScreen('login')}/>} {screen==='login'&&<LoginScreen onLogin={login} onSignupLink={()=>setScreen('signup')}/>} {screen==='home'&&<HomeScreen user={user} onMenuPress={()=>setScreen('settingsMenu')} onSelectHabit={selectHabit}/>} {screen==='detail'&&selectedHabit&&<DetailScreen habit={selectedHabit} onBack={()=>setScreen('home')}/>} {screen==='settingsMenu'&&<SettingsMenuScreen onBack={()=>setScreen('home')} onOpenSettings={()=>setScreen('settings')} onOpenNotifications={()=>setScreen('notifications')}/>} {screen==='settings'&&<SettingsScreen user={user} onBack={()=>setScreen('settingsMenu')} onLogout={()=>{setUser(null);setScreen('login');}}/>} {screen==='notifications'&&<NotificationsScreen onBack={()=>setScreen('settingsMenu')}/>}</SafeAreaView>;}
export default function App(){return <ThemeProvider><AppContent/></ThemeProvider>;}
