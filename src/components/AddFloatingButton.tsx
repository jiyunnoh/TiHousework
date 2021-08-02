import React from 'react';
import {Image, Platform, TouchableOpacity} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import useView from '../hooks/useView';
import styles from '../styles';

function AddFloatingButton(): JSX.Element {
  const {
    onUpdateCameraOn,
    onUpdateIsAddBtnClicked,
    onUpdateIsBefore,
  } = useView();
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const hapticTriggerType = Platform.select({
    ios: 'selection',
    android: 'impactMedium',
  });

  return (
    <TouchableOpacity
      style={styles.floatingBtn}
      onPress={() => {
        onUpdateIsAddBtnClicked(true);
      }}
      onLongPress={() => {
        ReactNativeHapticFeedback.trigger(hapticTriggerType, options);
        onUpdateCameraOn(true);
        onUpdateIsBefore(true);
      }}
      delayLongPress={200}>
      <Image
        style={{resizeMode: 'contain', width: 30, height: 30}}
        source={require('../img/plus.png')}
      />
    </TouchableOpacity>
  );
}

export default AddFloatingButton;
