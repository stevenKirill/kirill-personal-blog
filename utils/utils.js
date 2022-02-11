import { CATEGORIES } from "@/consts/consts"

export const getCategoryItem = category => {
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
        case CATEGORIES.BUSINESS:
            return {
                text: 'Бизнес',
                color: 'orangeCategory'
            }
        default:
        return {
            text: 'Другое',
            color: 'purpleCategory'
        }
    }
}

export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const MONTHS = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь',
}