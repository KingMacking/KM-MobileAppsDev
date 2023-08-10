import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useState } from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { useGetProfileQuery, useUpdateAddressMutation } from '../../store/settings/api';
import { FONTS } from '../../themes';
import CustomText from '../CustomText';
import MapPreview from '../MapPreview';

const LocationSelector = ({ handleLocation }) => {
    const [pickedLocation, setPickedLocation] = useState(null);
    const [locationUpdated, setLocationUpdated] = useState(false);
    const [updateLocation] = useUpdateAddressMutation();
    const localId = useSelector((state) => state.auth.user.localId);
    const { data } = useGetProfileQuery({ localId });
    const verifyPermission = async () => {
        const { status } = await requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Insufficient permissions!', 'You need to grant location permissions to use this feature', [
                { text: 'Okay' },
            ]);
            return false;
        }
        return true;
    };

    const handleGetLocation = async () => {
        const isLocationPrermission = await verifyPermission();
        if (!isLocationPrermission) return;
        const location = await getCurrentPositionAsync({
            accuracy: 6,
            timeInterval: 5000,
        });
        const { latitude, longitude } = location.coords;
        setPickedLocation({ lat: latitude, lng: longitude });
        handleLocation({ lat: latitude, lng: longitude });
    };

    const handleUpdateLocation = async () => {
        const location = {
            lat: pickedLocation.lat,
            lng: pickedLocation.lng,
        };
        const result = await updateLocation({ localId, location });
        if (result.data.location) {
            setLocationUpdated(true);
        }
    };
    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation ? pickedLocation : data.location} style={styles.preview}>
                <CustomText font={FONTS.medium} styles={styles.noLocationText}>
                    No location chosen yet!
                </CustomText>
            </MapPreview>
            {!pickedLocation ? (
                <TouchableOpacity onPress={handleGetLocation} style={styles.getLocationBtn}>
                    <CustomText styles={styles.getLocationText} font={FONTS.medium}>
                        Select your current location
                    </CustomText>
                </TouchableOpacity>
            ) : (
                <View>
                    <CustomText font={FONTS.regular}>Is this your location ?</CustomText>
                    <TouchableOpacity onPress={handleUpdateLocation} style={styles.getLocationBtn}>
                        <CustomText styles={styles.getLocationText} font={FONTS.medium}>
                            Confirm location
                        </CustomText>
                    </TouchableOpacity>
                </View>
            )}
            {locationUpdated && <CustomText font={FONTS.medium}>Location updated</CustomText>}
        </View>
    );
};
export default LocationSelector;
