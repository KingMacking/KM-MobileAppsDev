import { Text } from 'react-native';

const CustomText = ({ font, styles, children, ...props }) => {
    return (
        <Text {...props} style={[styles, { fontFamily: font }]}>
            {children}
        </Text>
    );
};
export default CustomText;
