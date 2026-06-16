import React from 'react';
import {Pressable,StyleSheet,Text,View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '../context/ThemeContext';
export default function Header({title,onMenuPress,onBackPress}){const{theme}=useTheme();return <View style={styles.header}>{onBackPress?<Pressable onPress={onBackPress}><Ionicons name='arrow-back' size={28} color={theme.primary}/></Pressable>:<Pressable onPress={onMenuPress}><Ionicons name='menu' size={30} color={theme.primary}/></Pressable>}<Text style={[styles.title,{color:theme.text}]}>{title}</Text><Text style={styles.logo}>🌱</Text></View>;}
const styles=StyleSheet.create({header:{paddingTop:12,paddingBottom:12,flexDirection:'row',alignItems:'center',gap:14},title:{flex:1,fontSize:24,fontWeight:'800'},logo:{fontSize:28}});
