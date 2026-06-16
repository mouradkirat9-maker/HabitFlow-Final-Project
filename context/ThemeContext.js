import React,{createContext,useContext,useState} from 'react';
const ThemeContext=createContext();
const light={mode:'light',background:'#f6f7fb',card:'#fff',text:'#1f2937',muted:'#6b7280',primary:'#4f46e5'};
const dark={mode:'dark',background:'#111827',card:'#1f2937',text:'#f9fafb',muted:'#d1d5db',primary:'#818cf8'};
export function ThemeProvider({children}){const[themeName,setThemeName]=useState('light');const theme=themeName==='light'?light:dark;function toggleTheme(){setThemeName(v=>v==='light'?'dark':'light');}return <ThemeContext.Provider value={{theme,themeName,toggleTheme}}>{children}</ThemeContext.Provider>;}
export function useTheme(){return useContext(ThemeContext);}
