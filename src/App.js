import React from 'react';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

function App() {
  return (
    <main className='App'>
      <TheDate />
      <Counter count={123} />
    </main>
  );
}

export default App;