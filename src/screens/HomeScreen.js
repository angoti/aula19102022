const {View, Text, Button} = require('react-native');
const {styles} = require('../styles/styles');

const HomeScreen = ({signOut}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela principal</Text>
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;
