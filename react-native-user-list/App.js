import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import UsersList from './components/UsersList';
import SearchField from './components/SearchField';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

const HomeScreen = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <SearchField />
          <UsersList />
        </SafeAreaView>
      </PaperProvider>

      </PersistGate>
    </Provider >
  );
};

export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
});
