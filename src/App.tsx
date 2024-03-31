import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Login from './modules/login';
import store from './store';
import GlobalModal from './shared/components/modal/globalModal/globalModal';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
