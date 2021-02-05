// const { bindActionCreators } = require("redux")

const initialState = {
    HOTEL_NAME: null,
    LOCALITY_NAME: null,
    CUSIONS_NAME: null,
    RATING: null

}



const userReducerHelper = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_HOTEL_NAME":
            {
                console.log("# Redux User Reducer => \n", action.payload)
                return {
                    ...state,
                    HOTEL_NAME: action.payload

                }

            }
        case "CREATE_LOCALITY_NAME":
            {
                console.log("# Redux User Reducer => \n", action.payload)
                return {
                    ...state,
                    LOCALITY_NAME: action.payload

                }

            }
        case "CREATE_CUSIONS_NAME":
            {
                console.log("# Redux User Reducer => \n", action.payload)
                return {
                    ...state,
                    CUSIONS_NAME: action.payload

                }

            }
        case "CREATE_RATING":
            {
                console.log("# Redux User Reducer => \n", action.payload)
                return {
                    ...state,
                    RATING: action.payload

                }

            }

        default:
            return state
    }

}

export default userReducerHelper