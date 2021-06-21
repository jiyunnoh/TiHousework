import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import SplashScreen from 'react-native-splash-screen';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import rootReducer from '../redux';

// import DefaultReactScreen from './DefaultReactScreen';
// import SocialLogin from '../components/SocialLogin';
// import ApiTestComp from '../components/ApiTestComp';
import JiyunLogin from '../components/JiyunLogin';

const store = createStore(rootReducer);
const persistor = persistStore(store);

function App(): JSX.Element {
  const handleDynamicLink = link => {
    if (link.url === 'https://google.com') {
      alert(JSON.stringify('This is google page'));
    }

    if (link.url === 'https://naver.com') {
      alert(JSON.stringify('This is naver page!'));
    }

    // // Handle dynamic link inside your own application
    // if (link.url === 'https://invertase.io/offer') {
    //   // ...navigate to your offers screen
    // }
  };

  const isInvited = () => {
    //
  };

  const hasToken = () => {
    //
  };

  useEffect(() => {
    SplashScreen.hide();
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener

    dynamicLinks()
      .getInitialLink()
      .then(link => {
          alert(link.url);
        // if (link.url === 'https://invertase.io/offer') {
        //   // ...set initial route as offers screen
        // }
      });

    isInvited();
    hasToken();

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <JiyunLogin />
        {/* <SocialLogin /> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
