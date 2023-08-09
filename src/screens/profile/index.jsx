import { View } from 'react-native';

import { CustomText } from '../../components';
import { FONTS } from '../../themes';

const Profile = () => {
    return (
        <View>
            <CustomText font={FONTS.regular}>Hola</CustomText>
        </View>
    );
};
export default Profile;
