import './App.css';
import React , {useState} from 'react';

import ContactDisplay from './components/ContactDisplay';
import ContactForm from './components/ContactForm';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div> 
      <Container>
        <Container>
          <h1>Contact Manager</h1>
        </Container>
      <ContactForm  />
      <ContactDisplay  />
      </Container>
    </div>
  );
}

export default App; 