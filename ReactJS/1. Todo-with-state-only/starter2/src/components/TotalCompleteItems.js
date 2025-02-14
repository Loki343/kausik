import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {

	const completedTodos = useSelector((store) => {
		return store.todos.filter((el) => el.completed === true)
	})

	return <h4 className='mt-3'>Total Complete Items: {completedTodos.length || 0}</h4>;
};

export default TotalCompleteItems;
