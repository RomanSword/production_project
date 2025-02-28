// import { validateProfileData } from './validateCommentFormData';

// const profileData = {
//     id: '1',
//     username: 'admin',
//     firstname: 'Роман',
//     lastname: 'Белков',
//     age: 28,
//     city_id: '1',
//     country_id: '1',
//     avatarSrc: 'https://test.com'
// };

// const profileDataWithError = {
//     ...profileData,
//     username: '',
//     firstname: '',
//     lastname: '',
//     age: 1
// };

// describe('test service loginByUsername', () => {
//     test('success validateProfileData', async () => {
//         const validationsResult = validateProfileData(profileData);

//         expect(Object.keys(validationsResult).length).toEqual(0);
//     });

//     test('error validateProfileData', async () => {
//         const validationsResult = validateProfileData(profileDataWithError);

//         expect(Object.keys(validationsResult).length).toBe(4);
//     });
// });
