import { fromJS } from 'immutable'

const initState = fromJS({ 
    name: "vuong" 
})

export default function home (state = initState , action){
    switch(action.type) {
        case "GET_HOME":
            const { name } = action.payload
            return state.merge({
                name
            })
        default:
            return state
    }
}