import { ImageBackground, TouchableHighlight } from 'react-native';

import { styles } from './style';
import { COLORS, FONTS } from '../../../themes';
import CustomText from '../../CustomText';

const CategoryItem = ({ id, name, backgroundImage, handleCategorySelect }) => {
    return (
        <TouchableHighlight onPress={() => handleCategorySelect(id)} style={styles.container} underlayColor={COLORS.primary}>
            <ImageBackground resizeMode="cover" source={{ uri: backgroundImage }} style={styles.backgroundImage}>
                <CustomText styles={styles.name} font={FONTS.regular}>
                    {name}
                </CustomText>
            </ImageBackground>
        </TouchableHighlight>
    );
};
export default CategoryItem;
