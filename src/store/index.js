import { createStore } from 'redux';
const initialState = {
    taxableIncome: 0, 
    hraCalculated: 0
}

const reducer = (state = initialState, action) => {

    if (action.type === "taxableIncome") {
        return { ...state, taxableIncome: action.payload}
    }

    if (action.type === "hraCalculated") {
        return { ...state, hraCalculated: action.payload}
    }

    return state;

}

const store = createStore(reducer);

export default store;