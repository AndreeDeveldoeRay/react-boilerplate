/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:36+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-20T18:31:25+02:00
*/



export var appNameReducer = (state = 'appName', action) =>
{
    switch (action.type)
    {
        case 'CHANGE_APP_NAME':
            return action.appName
        default:
            return state
    }
}
export var appStatusReducer = (state = "idle", action) => {
    switch (action.type)
    {
        case 'CHANGE_STATUS':
            return action.status
        default:
            return state
    }
}
var nextItemId = 0
export var itemsReducer = (state = [], action) =>
{
    switch (action.type)
    {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ]
        case 'REMOVE_ITEM':
            return state.filter((item) =>  item.id !== action.id)
        default:
            return state
    }
}
export var mapReducer = (state = {url: undefined}, action) =>
{
    switch (action.type)
    {
        case 'START_LOCATION_FETCH':
            return {
                url: undefined
            }
        case 'COMPLETE_LOCATION_FETCH':
            return {
                url: action.url
            }
        default:
            return state
    }
}
