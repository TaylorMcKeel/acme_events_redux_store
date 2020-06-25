const TYPES = {
    GOT_EVENTS = 'GOT_EVENTS',
    PUT_EVENTS = 'PUT_EVENTS',
    DELETE_EVENTS = 'DELETE_EVENTS'
}

const gotEvents = (events) =>{
    type: TYPES.GOT_EVENTS,
    events
}

const putEvents = ({id, description}) =>{
    type: TYPES.PUT_EVENTS
    id,
    description

}

const deleteEvents = () =>{
    type: TYPES.DELETE_EVENTS
}

export {
    TYPES,
    gotEvents,
    putEvents,
    deleteEvents
}