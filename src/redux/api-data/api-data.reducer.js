const INITIAL_STATE = {
	currentJson: null
}

const apiDataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_API_DATA':
				return {
					...state,
					currentJson: action.payload
				}
		default:
			return state;
	}
}

export default apiDataReducer