const getCharts = (data) => {
	return function(dispatch) {
		dispatch({
			type: "ADIMPRESSION_APPCODE",
			payload: true
		})

		dispatch({
			type: "ADIMPRESSION_CHANNELCATEGORY",
			payload: true
		})

		dispatch({
			type: "ADIMPRESSION_CHANNELNAME",
			payload: true
		})


	}
}



export {
	getCharts
};