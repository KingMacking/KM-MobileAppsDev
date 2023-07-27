import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { emptyCart } from '../../../store/cart/cart.slice';
import { FONTS } from '../../../themes';
import CustomText from '../../CustomText';

const EmptyCartBtn = () => {
    const dispatch = useDispatch();
    const handleEmptyCart = () => {
        dispatch(emptyCart());
    };
    return (
        <TouchableOpacity style={styles.emptyCartBtn} onPress={handleEmptyCart}>
            <CustomText font={FONTS.medium} styles={styles.emptyCartBtnText}>
                Empty cart
            </CustomText>
        </TouchableOpacity>
    );
};
export default EmptyCartBtn;
