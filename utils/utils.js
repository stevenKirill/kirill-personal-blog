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