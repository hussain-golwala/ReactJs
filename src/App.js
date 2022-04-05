import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import Footer from './Footer';
import Header from './Header';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppRouter />
      <Footer />
    </Provider>
  );
}

export default App;
