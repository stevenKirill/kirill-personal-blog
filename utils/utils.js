import { CATEGORIES } from "../consts/consts"

export const getCategoryColor = (category) => {
    switch(category) {
        case CATEGORIES.PROGRAMMING:
            return {
                text: 'Программирование',
                color: ''
            }
        case CATEGORIES.PSYCHOLOGY:
            return {
                text: 'Психология',
                color: '',
            }
        case CATEGORIES.SPORT:
            return {
                text: 'Спорт',
                color: ''
            }
        case CATEGORIES.FOOD:
            return {
                text: 'Еда',
                color: ''
            }
        default: 
        return {
            text: 'Общая',
            color: ''
        }
    }
}