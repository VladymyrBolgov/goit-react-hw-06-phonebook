import React from 'react';
import { Container } from './Container.styled'
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <section >
            <Container >
              <h1>Phonebook</h1>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </Container>
            </section>
            </PersistGate>
        </Provider>
      </>
    );
  }

export default App;




