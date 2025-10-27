import type { ReactNode } from 'react';
import './App.css'
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import RootLayouts from './layouts/RootLayouts/RootLayouts';


export default function App():ReactNode {

  return(
    <Routes>
      <Route element={<RootLayouts/>}>
      <Route path='/' element={<HomePage />}/>
      </Route>
    </Routes>
  ) ;
}

