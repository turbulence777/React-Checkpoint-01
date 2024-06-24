import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import product from './product';

const firstName = 'Joshua'; // Change to your first name or leave empty

function App() {
  return (
    <div className="App">
      <div className="card" style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
        <Image />
        <div className="card-body">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <div className="greeting">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="https://dictionary.cambridge.org/images/thumb/sungla_noun_001_16949_4.jpg?version=6.0.21" alt="Greeting" style={{ width: '100px' }} />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
}

export default App;
