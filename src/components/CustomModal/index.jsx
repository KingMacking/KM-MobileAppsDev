import { Modal, View } from 'react-native';

import { styles } from './styles';

const CustomModal = ({ children, isVisible, title }) => {
    return (
        <Modal visible={isVisible} animationType="fade" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>{children}</View>
            </View>
        </Modal>
    );
};

export default CustomModal;
