import { CATEGORIES } from "../consts/consts"

export const getCategoryColor = category => {
    switch(category) {
        case CATEGORIES.PROGRAMMING:
            return {
                text: 'Программирование',
                color: 'goldenCategory'
            }
        case CATEGORIES.PSYCHOLOGY:
            return {
                text: 'Психология',
                color: 'lightGreenCategory',
            }
        case CATEGORIES.SPORT:
            return {
                text: 'Спорт',
                color: 'lightBlueCategory'
            }
        case CATEGORIES.FOOD:
            return {
                text: 'Еда',
                color: 'orangeCategory'
            }
        default: 
        return {
            text: 'Поразмыслить',
            color: 'purpleCategory'
        }
    }
}