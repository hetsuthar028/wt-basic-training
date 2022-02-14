const initialState = { newEmployee: [] };
const  reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_EMPLOYEE': {
            return {
                ...state,
                newEmployee: [
                    ...state.newEmployee,
                    action.payload
                ]
            }
        }
    }
}

export default reducer