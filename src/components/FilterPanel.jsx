import { useSelector, useDispatch } from 'react-redux'

import { removeItemFilter, clearFilter } from 'store/filters/filter-actions'
import { selectFilter } from 'store/filters/filter-selectors'

import { Badge } from 'UI/Badge'
import { Card } from 'UI/Card'
import { Stack } from 'UI/Stack'

const FilterPanel = () => {
	const dispatch = useDispatch()

	const filterPos = useSelector(selectFilter)

	if (selectFilter.length === 0) return null
	return (
		<Card className='filter-panel'>
			<div className='filter-panel-wrapper'>
				<Stack>
					{filterPos.map(item => (
						<Badge
							key={item}
							variant='clearable'
							onClear={() => dispatch(removeItemFilter(item))}
						>
							{item}
						</Badge>
					))}
				</Stack>

				<button className='link' onClick={() => dispatch(clearFilter)}>
					Clear
				</button>
			</div>
		</Card>
	)
}

export { FilterPanel }
