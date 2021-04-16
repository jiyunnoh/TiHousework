import React from 'react';
import {View} from 'react-native';
import Hello from '../components/Hello.tsx';

function HelloScreen(): JSX.Element {
  return (
    <View>
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
      <Hello name="Michaaaaaeellll" />
    </View>
  );
}

HelloScreen.defaultProps = {
  name: 'john',
};

export default HelloScreen;
