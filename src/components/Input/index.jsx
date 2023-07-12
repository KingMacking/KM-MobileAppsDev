import { TextInput, View } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../themes';

const Input = ({ borderColor, handleFocus, handleBlur, handleTextChange, ...props }) => {
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                style={[styles.input, { borderColor }]}
                onBlur={handleBlur}
                onChangeText={handleTextChange}
                onFocus={handleFocus}
                cursorColor={borderColor}
                placeholderTextColor={COLORS.grey}
            />
        </View>
    );
};
export default Input;
