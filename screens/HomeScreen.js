import React,{useEffect,useState} from 'react';
import {FlatList,StyleSheet,Text,View} from 'react-native';
import Header from '../components/Header';
import HabitCard from '../components/HabitCard';
import {initialHabits} from '../data/habits';
import {fetchDailyQuote} from '../services/api';
import {loadHabits,saveHabits} from '../services/storage';
import {useTheme} from '../context/ThemeContext';
export default function HomeScreen({user,onMenuPress,onSelectHabit}){const{theme}=useTheme();const[habits,setHabits]=useState(initialHabits);const[quote,setQuote]=useState('Loading quote...');useEffect(()=>{async function loadData(){const stored=await loadHabits();if(stored)setHabits(stored);setQuote(await fetchDailyQuote());}loadData();},[]);async function toggleFavorite(id){const updated=habits.map(h=>h.id===id?{...h,favorite:!h.favorite}:h);setHabits(updated);await saveHabits(updated);}return <View style={[styles.container,{backgroundColor:theme.background}]}><Header title='HabitFlow' onMenuPress={onMenuPress}/><Text style={[styles.welcome,{color:theme.text}]}>Welcome, {user?.username||'Learner'} 👋</Text><Text style={[styles.quote,{backgroundColor:theme.card,color:theme.muted}]}>{quote}</Text><FlatList data={habits} keyExtractor={i=>i.id} renderItem={({item})=><HabitCard habit={item} onPress={()=>onSelectHabit(item)} onFavorite={()=>toggleFavorite(item.id)}/>}/></View>;}
const styles=StyleSheet.create({container:{flex:1,padding:20},welcome:{fontSize:20,fontWeight:'800',marginBottom:12},quote:{padding:16,borderRadius:16,marginBottom:16,lineHeight:21}});
