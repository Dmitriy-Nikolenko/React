import  { HIDE_INFO } from './types';
const initialSate = {
    infoVisible: true,
    user: {
        id: '7789948',
        name: 'Николенко Дмитрий Александрович',
        email: 'test@mail.ru'
    },
}

export const profileReducer = (state = initialSate, action) => {
    switch(action.type) {
        case HIDE_INFO:
            return {
                ...state,
                infoVisible: !state.infoVisible
            }
        default:
            return state;
    }
   
};
