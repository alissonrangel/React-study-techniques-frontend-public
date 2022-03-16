import React from 'react';
import styled from 'styled-components';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Container = styled.div`  
`;

function App() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
