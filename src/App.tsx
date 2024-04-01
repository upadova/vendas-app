// import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './Navigation';
import GlobalModal from './shared/components/modal/globalModal/globalModal';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <Navigation />
    </Provider>
  );
};

export default App;
