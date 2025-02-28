import { LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';

const newValue = '321';
const loginState: LoginSchema = {
    formData: { username: '123', password: '123' },
    isLoading: false
};

describe('test slice login', () => {
    test('test set username', () => {
        const result = loginReducer(
            loginState,
            loginActions.setDataField({ key: 'username', value: newValue })
        );

        expect(result.formData.username).toBe(newValue);
    });

    test('test set password', () => {
        const result = loginReducer(
            loginState,
            loginActions.setDataField({ key: 'password', value: newValue })
        );

        expect(result.formData.password).toBe(newValue);
    });
});
