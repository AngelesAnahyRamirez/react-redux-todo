import { UPDATE_VALUE, SAVE_TODO, DELETE_TODO, TOGGLE_COMPLETED } from "../actions/actionTypes";

const INITIAL_STATE = {
    value: "",
    todos: []
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_VALUE:
            return {
                ...state,
                value: action.payload
            };
            case SAVE_TODO:
            return state.value
             ?{  
            ...state,
                value:"",
                todos: [...state.todos, {value: state.value, completed: false}]
            }
           : state;
           case DELETE_TODO:
               return{
                   ...state,
                   todos: state.todos.filter((_, index)=> action.payload !== index)
               };
               case TOGGLE_COMPLETED:
                   return{
                       ...state,
                       todos: state.todos.map((todo, index)=> 
                       action.payload === index
                       ? { ...todo, completed: !todo.completed }
                       : todo

                       )
                   
                    };
              default:
              return state;
            }
    };