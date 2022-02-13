import './App.css';
import React from 'react';
import Layout from './components/global/layout';

function App(props) {
  return (
    <Layout>
      {props.children}
    </Layout>
  );
}

export default App;
