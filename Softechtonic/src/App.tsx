import { useEffect, useState } from 'react'
import Layout from './Layout';

function App() {
  useEffect(() => {
    document.title = "Curry Mantra";
  }, []);

  return (
    <Layout/>
  )
}

export default App
