const {View, Text, Button} = require('react-native');
const {styles} = require('../styles/styles');

const SignInScreen = ({sigIn}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de login</Text>
      <Button title="Entrar" onPress={() => sigIn('token')} />
    </View>
  );
};

export default SignInScreen;
