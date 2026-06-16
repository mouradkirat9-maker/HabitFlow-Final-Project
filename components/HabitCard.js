import React from 'react';
import {Pressable,StyleSheet,Text,View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '../context/ThemeContext';
export default function HabitCard({habit,onPress,onFavorite}){const{theme}=useTheme();return <Pressable onPress={onPress} style={[styles.card,{backgroundColor:theme.card}]}><View style={styles.textBox}><Text style={[styles.title,{color:theme.text}]}>{habit.title}</Text><Text style={[styles.subtitle,{color:theme.muted}]}>{habit.category} • {habit.minutes} min</Text><Text style={[styles.desc,{color:theme.muted}]}>{habit.description}</Text></View><Pressable onPress={onFavorite}><Ionicons name={habit.favorite?'heart':'heart-outline'} size={28} color='#ef4444'/></Pressable></Pressable>;}
const styles=StyleSheet.create({card:{borderRadius:18,padding:16,marginBottom:14,flexDirection:'row',alignItems:'center',elevation:2},textBox:{flex:1,paddingRight:12},title:{fontSize:18,fontWeight:'800'},subtitle:{marginTop:4,fontWeight:'600'},desc:{marginTop:6,lineHeight:20}});
