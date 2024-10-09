import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <HomePage />
      </AnimatePresence>
    </>
  );
}

export default App;
