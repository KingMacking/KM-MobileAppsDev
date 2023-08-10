import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../themes';
import Label from '../Label';

const InputForm = ({
    handleTextChange,
    maxLength,
    placeholder,
    keyboardType,
    handleFocus,
    handleBlur,
    value,
    hasError,
    touched,
    borderColor,
    label,
    error,
    autoCapitalize,
    ...props
}) => {
    return (
        <View style={styles.inputContainer}>
            <Label labelText={label}>
                <TextInput
                    style={[styles.input, { borderColor }]}
                    placeholderTextColor={COLORS.grey}
                    placeholder={placeholder}
                    onChangeText={handleTextChange}
                    value={value}
                    keyboardType={keyboardType || 'ascii-capable'}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    maxLength={maxLength}
                    autoCapitalize={autoCapitalize}
                    {...props}
                />
            </Label>
            {hasError && touched ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};
export default InputForm;
