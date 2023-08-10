import { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { CustomText } from '../../components';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { setUser } from '../../store/auth/auth.slice';
import { useRegisterUserDataMutation } from '../../store/settings/api';
import { COLORS, FONTS } from '../../themes';

const AuthScreen = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [borderColorEmail, setBorderColorEmail] = useState(COLORS.transparent);
    const [borderColorPassword, setBorderColorPassword] = useState(COLORS.transparent);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const headerTitle = isLogin ? 'Sign in' : 'Sign up';
    const buttonTitle = isLogin ? 'Login' : 'Register';
    const messageText = isLogin ? 'Need an account?' : 'Already have an account?';
    const emptyUserPicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    const [signIn] = useSignInMutation();
    const [signUp] = useSignUpMutation();
    const [registerUserData] = useRegisterUserDataMutation();
    const handleFocus = (type) => {
        if (type === 'email') {
            setBorderColorEmail(COLORS.primary);
        } else {
            setBorderColorPassword(COLORS.primary);
        }
    };
    const handleBlur = (type) => {
        if (type === 'email') {
            setBorderColorEmail(COLORS.transparent);
        } else {
            setBorderColorPassword(COLORS.transparent);
        }
    };

    const handleAuth = async () => {
        try {
            if (isLogin) {
                const result = await signIn({ email, password });
                if (result?.data) dispatch(setUser(result.data));
            } else {
                const result = await signUp({ email, password });
                if (result?.data) {
                    dispatch(setUser(result.data));
                    await registerUserData({
                        userData: { email, name: email.split('@')[0], profileImage: emptyUserPicture },
                        localId: result.data.localId,
                    });
                }
                console.warn(result?.data);
            }
        } catch (error) {
            console.error({ error });
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <CustomText styles={styles.header} font={FONTS.medium}>
                    {headerTitle}
                </CustomText>
                <View style={styles.inputContainer}>
                    <CustomText styles={styles.label} font={FONTS.regular}>
                        Email:
                    </CustomText>
                    <TextInput
                        placeholder="example@mail.com"
                        placeholderTextColor={COLORS.grey}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onBlur={() => handleBlur('email')}
                        onFocus={() => handleFocus('email')}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        cursorColor={borderColorEmail}
                        style={[styles.input, { borderColor: borderColorEmail }]}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <CustomText styles={styles.label} font={FONTS.regular}>
                        Password:
                    </CustomText>
                    <TextInput
                        placeholder="********"
                        placeholderTextColor={COLORS.grey}
                        autoCapitalize="none"
                        secureTextEntry
                        autoCorrect={false}
                        onBlur={() => handleBlur('password')}
                        onFocus={() => handleFocus('password')}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        cursorColor={borderColorPassword}
                        style={[styles.input, { borderColor: borderColorPassword }]}
                    />
                </View>
                <View style={styles.linkContainer}>
                    <TouchableOpacity style={styles.linkBtn} onPress={() => setIsLogin(!isLogin)}>
                        <CustomText styles={styles.linkBtnText} font={FONTS.light}>
                            {messageText}
                        </CustomText>
                    </TouchableOpacity>
                </View>
                <View style={styles.actionBtnContainer}>
                    <TouchableOpacity onPress={handleAuth} style={styles.actionBtn}>
                        <CustomText styles={styles.actionBtnText}>{buttonTitle}</CustomText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default AuthScreen;
