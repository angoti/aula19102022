import {Button, Text, View} from 'react-native';
import {styles} from '../styles/styles';

const SplashScreen = ({loaded}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>SplashScreen</Text>
      <Button title="token carregado" onPress={() => loaded('teste')} />
      <View style={{marginBottom: 10}} />
      <Button title="token não encontrado" onPress={() => loaded('')} />
    </View>
  );
};

export default SplashScreen;
