const addEmployee = (payload) => {
    return {
        type: "ADD_EMPLOYEE",
        payload
    }
}

export default addEmployee;