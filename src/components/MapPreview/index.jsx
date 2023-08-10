import { Image, View } from 'react-native';

import { styles } from './style';
import { URL_MAPS } from '../../constants/maps';

const MapPreview = ({ location, style, children }) => {
    const { lat, lng } = location || {};
    const mapPreviewUrlImage = location ? URL_MAPS({ lat, lng, zoom: 15 }) : '';
    console.warn(mapPreviewUrlImage);
    return (
        <View style={{ ...styles.container, ...style }}>
            {location ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrlImage }} /> : children}
        </View>
    );
};
export default MapPreview;
