import { createStore } from 'redux';
const initialState = {
    taxableIncome: 0, 
    hraCalculated: 0,
    newTax: 0, 
    oldTax: 0,
    actualTax: 0
}

const reducer = (state = initialState, action) => {

    if (action.type === "taxableIncome") {
        return { ...state, taxableIncome: action.payload}
    }

    if (action.type === "hraCalculated") {
        console.log(action.payload);
        return { ...state, hraCalculated: action.payload}
    }

    if (action.type === "newTax") {
        return { ...state, newTax: action.payload}
    }

    if (action.type === "oldTax") {
        return { ...state, oldTax: action.payload}
    }

    if (action.type === "actualTax") {
        return { ...state, actualTax: action.payload}
    }

    if (action.type === "taxCalculated") {
        return { ...state, 
            taxableIncome: action.payload.taxableIncome,
            oldTax: action.payload.oldTax, 
            newTax: action.payload.newTax,
            actualTax: action.payload.tax
        }
    }

    return state;

}

const store = createStore(reducer);

export default store;