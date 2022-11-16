import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {View} from 'react-native';
import {styles} from '../styles/styles';

export async function logOut() {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
}

function SignInScreen({signIn}) {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  GoogleSignin.configure({
    webClientId:
      '829208944695-43u8nvtkbtnufrm6pto7r7pk4do2u4a4.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    setIsSigninInProgress(true);
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={styles.button}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => onGoogleButtonPress().then(user => signIn(user.user))}
        disabled={isSigninInProgress}
      />
    </View>
  );
}

export default SignInScreen;
