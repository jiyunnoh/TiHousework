import React, {useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

interface Props {
  name?: string;
}
interface State {
  value: number;
  isSigninInProgress: boolean;
}
class GoogleLogin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 7,
      isSigninInProgress: false,
    };
  }

  signIn = async () => {
    const useUser = this.props.userHook;
    const {user, email, onCreateUser} = useUser;
    const useMaintenance = this.props.maintenanceHook;
    const {onUpdateIsSocialLoggedIn} = useMaintenance;
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      onCreateUser({
        email: userInfo.user.email,
        roomID: '123123123',
        isInvited: false,
        inviterEmail: '',
      });
      onUpdateIsSocialLoggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render(): JSX.Element {
    const {value, isSigninInProgress} = this.state;
    return (
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          this.signIn();
          this.setState({isSigninInProgress: true});
        }}
        disabled={isSigninInProgress}
      />
    );
  }
}

GoogleLogin.defaultProps = {
  name: 'John',
};

export default GoogleLogin;
