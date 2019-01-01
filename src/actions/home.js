const getHome = data => ({
    type: "GET_HOME",
    payload: data
})

const fetchDataHome = () => async dispatch => {
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "hung" + (Math.random()).toString()})
        }, 2000);
    })
    return dispatch(getHome(result))
}

export {
    fetchDataHome
}