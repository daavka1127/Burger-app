export const addIngredient = (nemehOrts) => {
    return {
        type: 'ADD_INGREDIENT',
        nemehOrts: nemehOrts
    }
}

export const removeIngredient = (hasahOrts) => {
    return {
        type: 'REMOVE_INGREDIENT',
        hasahOrts
    }
}