import { useState } from 'react';
import { View } from 'react-native';

import { LocationSelection } from '../../components';

const Adress = () => {
    const [location, setLocation] = useState(null);
    const handleLocation = () => {
        setLocation(location);
    };
    return (
        <View>
            <LocationSelection handleLocation={handleLocation} />
        </View>
    );
};
export default Adress;
