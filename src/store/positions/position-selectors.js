export const selectAllPositions = state => state.positions

export const selectVisiblePositions = (state, filter = []) => {
	if (filter.length === 0) return state.positions

	return state.positions.filter(item => {
		const posFilter = [].concat(
			item.role,
			item.level,
			...item.tools,
			...item.languages
		)
		return filter.every(pos => posFilter.includes(pos))
	})
}
