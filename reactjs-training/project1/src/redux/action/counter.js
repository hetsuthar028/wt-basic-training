export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";

export const increaseCounter = (factor = 1) => {
    return {
        type: INCREASE_COUNTER,
        payload: factor
    }
}

export const decreaseCounter = (factor = 1) => {
    return {
        type: DECREASE_COUNTER,
        payload: factor
    }
}

