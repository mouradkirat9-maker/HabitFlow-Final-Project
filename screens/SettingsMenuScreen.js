import React from 'react';
import {Pressable,StyleSheet,Text,View} from 'react-native';
import Header from '../components/Header';
import {useTheme} from '../context/ThemeContext';
export default function SettingsMenuScreen({onBack,onOpenSettings,onOpenNotifications}){const{theme}=useTheme();return <View style={[styles.container,{backgroundColor:theme.background}]}><Header title='Settings Menu' onBackPress={onBack}/><Pressable style={[styles.item,{backgroundColor:theme.card}]} onPress={onOpenSettings}><Text style={[styles.text,{color:theme.text}]}>Profile and Theme Settings</Text></Pressable><Pressable style={[styles.item,{backgroundColor:theme.card}]} onPress={onOpenNotifications}><Text style={[styles.text,{color:theme.text}]}>Notification Settings</Text></Pressable></View>;}
const styles=StyleSheet.create({container:{flex:1,padding:20},item:{padding:18,borderRadius:16,marginBottom:14},text:{fontSize:18,fontWeight:'800'}});
