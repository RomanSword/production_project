import { LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';

const loginState: LoginSchema = { username: '123', password: '123', isLoading: false };
const newValue = '321';

describe('test slice login', () => {
    test('test set username', () => {
        const result = loginReducer(loginState, loginActions.setUsername(newValue));

        expect(result.username).toBe(newValue);
    });

    test('test set password', () => {
        const result = loginReducer(loginState, loginActions.setPassword(newValue));

        expect(result.password).toBe(newValue);
    });
});
