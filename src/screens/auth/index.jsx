import { useReducer, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { CustomText, InputForm } from '../../components';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { setUser } from '../../store/auth/auth.slice';
import { useRegisterUserDataMutation } from '../../store/settings/api';
import { COLORS, FONTS } from '../../themes';
import { UPDATE_FORM, onInputChange } from '../../utils/form';

const initialState = {
    email: { value: '', error: '', touched: false, hasError: true },
    password: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,
};

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            // eslint-disable-next-line no-case-declarations
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid,
            };
        default:
            return state;
    }
};

const AuthScreen = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [borderColorEmail, setBorderColorEmail] = useState(COLORS.transparent);
    const [borderColorPassword, setBorderColorPassword] = useState(COLORS.transparent);
    const headerTitle = isLogin ? 'Sign in' : 'Sign up';
    const buttonTitle = isLogin ? 'Login' : 'Register';
    const messageText = isLogin ? 'Need an account?' : 'Already have an account?';
    const emptyUserPicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);

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
                const result = await signIn({ email: formState.email.value, password: formState.password.value });
                if (result?.data) dispatch(setUser(result.data));
            } else {
                const result = await signUp({ email: formState.email.value, password: formState.password.value });
                if (result?.data) {
                    dispatch(setUser(result.data));
                    await registerUserData({
                        userData: {
                            email: formState.email.value,
                            name: formState.email.value.split('@')[0],
                            profileImage: emptyUserPicture,
                        },
                        localId: result.data.localId,
                    });
                }
                console.warn(result?.data);
            }
        } catch (error) {
            console.error({ error });
        }
    };

    const handleInputChange = ({ name, value }) => {
        onInputChange({ name, value, dispatch: dispatchFormState, formState });
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <CustomText styles={styles.header} font={FONTS.medium}>
                    {headerTitle}
                </CustomText>
                <View style={styles.inputContainer}>
                    <InputForm
                        placeholder="example@mail.com"
                        autoCapitalize="none"
                        autoCorrect={false}
                        handleBlur={() => handleBlur('email')}
                        handleFocus={() => handleFocus('email')}
                        handleTextChange={(text) => handleInputChange({ name: 'email', value: text })}
                        value={formState.email.value}
                        cursorColor={borderColorEmail}
                        hasError={formState.email.hasError}
                        error={formState.email.error}
                        touched={formState.email.touched}
                        borderColor={borderColorEmail}
                        maxLength={18}
                        label="Emial:"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <InputForm
                        placeholder="********"
                        autoCapitalize="none"
                        secureTextEntry
                        autoCorrect={false}
                        handleBlur={() => handleBlur('password')}
                        handleFocus={() => handleFocus('password')}
                        handleTextChange={(text) => handleInputChange({ name: 'password', value: text })}
                        value={formState.password.value}
                        cursorColor={borderColorPassword}
                        borderColor={borderColorPassword}
                        maxLength={18}
                        hasError={formState.password.hasError}
                        error={formState.password.error}
                        touched={formState.password.touched}
                        label="Password:"
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
                    <TouchableOpacity disabled={!formState.isFormValid} onPress={handleAuth}>
                        <CustomText styles={!formState.isFormValid ? styles.actionBtnDisabled : styles.actionBtnText}>
                            {buttonTitle}
                        </CustomText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default AuthScreen;
