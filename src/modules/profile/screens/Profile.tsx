import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import Text from '../../../shared/components/text/Text';
import { Button, View } from 'react-native';
import { logout } from '../../../shared/functions/connection/auth';

export const Profile = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Sair" onPress={() => logout(navigation)} />
    </View>
  );
};

export default Profile;
