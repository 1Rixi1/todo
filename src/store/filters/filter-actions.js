export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export const addItemFilter = filter => ({
	type: ADD_FILTER,
	filter,
})

export const removeItemFilter = filter => ({
	type: REMOVE_FILTER,
	filter,
})

export const clearFilter = {
	type: CLEAR_FILTER,
}
