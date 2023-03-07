import { useSelector, useDispatch } from 'react-redux'
import { selectVisiblePositions } from 'store/positions/position-selectors'

import { JobPosition } from './JobPosition'

import { addItemFilter } from 'store/filters/filter-actions'
import { selectFilter } from 'store/filters/filter-selectors'

const JobList = () => {
	const filter = useSelector(selectFilter)

	const positions = useSelector(state => selectVisiblePositions(state, filter))

	const dispatch = useDispatch()

	const handleAddFilter = filter => {
		dispatch(addItemFilter(filter))
	}

	return (
		<div className='job-list'>
			{positions.map(item => (
				<JobPosition
					key={item.id}
					{...item}
					handleAddFilter={handleAddFilter}
				/>
			))}
		</div>
	)
}

export { JobList }
