import { INCREASE_COUNTER, DECREASE_COUNTER } from '../action/counter';

const initialCounterState = {
    counter: 0,
}

const counterReducer = (state = initialCounterState, action) => {
    switch(action.type){
        case INCREASE_COUNTER: {
            return {
                ...state,
                counter: state.counter + action.payload,
            }
        }

        case DECREASE_COUNTER: {
            return {
                ...state,
                counter: state.counter - action.payload,
            }
        }

        default:
            return state
    }
}

export default counterReducer;