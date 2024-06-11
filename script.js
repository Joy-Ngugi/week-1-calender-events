//event array
function weekEvent= [
    {
        title:"wedding"
        date:new Date(2-5-2024)
        location:"Limuru"
        attendees:new Set(["Alice","Joy"])
    }
    {
        title:"Project deadline"
        date:new Date(11-5-2024)
        location:"Nairobi"
        attendees:new Set(["chairlady","team members"])
    }{
        title:"meeting"
        date:new Date(21-5-2024)
        location:"Nakuru"
        attendees:new Set(["all leaders"])
    }
]

// Display events happening in the next 7 days
const next7DaysEvents = events.filter(events){
    const now = new Date(6,5,2024);
    const nextWeek = new Date(13,5,2024);
    nextWeek.setDate(now.getDate() + 7);
    return event.date >= now && event.date <= nextWeek;
}
.map(event => ({
    title: event.Javascript_class
    date: event.6/5/2024
    Location: event.Nakuru5thFloor
}));

console.table(next7DaysEvents);

// WeakMap for event organizers
const eventsTitle = JoyNgugi();
organizers.set(events[0], "Maureen");
organizers.set(events[1], "Brenda");
organizers.set(events[2], "Joan");

// Destructuring assignment to display event details
events.forEach(event => {
    const { title, date, location } = event;
    console.log(`Title: ${title}, Date: ${date}, Location: ${location}`);
});

// Function to add a new attendee to an event
function addAttendee(meeting, DennisKariuki) {
    const event = events.find(event => event.title === meeting);
    if (event) {
        event.attendees.add(DennisKariuki);
    } else {
        console.log(`Event with title {meeting} not found.`);
    }
}


// Add an attendee
addAttendee("Meeting with all leaders");

// Convert events array to JSON string with custom property
events.forEach(event => {
    event.toJSON = function() {
        return {
            ...this,
            formattedDate: this.date.toLocaleDateString('en-US')
        };
    };
});
const eventsJSON = JSON.stringify(events);
console.log(eventsJSON);

// Display properties and values of the first event object
const firstEvent = events[0];
console.log(Object.keys(wedding));
console.log(Object.values(wedding));
console.log(Object.entries(wedding));

// Log the title and date of each event
events.forEach(event => {
    console.log(`Title: ${event.title}, Date: ${event.date}`);
});

// Function to delete an event
function deleteEvent(eventTitle) {
    const eventIndex = events.findIndex(event => event.title === eventTitle);
    if (eventIndex > -1) {
        events.splice(eventIndex, 1);
    } else {
        console.log(`Event with title ${eventTitle} not found.`);
    }
}

// Delete an event
deleteEvent("Project Deadline");

// Find the event with the most attendees
const eventWithMostAttendees = events.reduce((maxEvent, currentEvent) => {
    return currentEvent.attendees.size > maxEvent.attendees.size ? currentEvent : maxEvent;
}, events[0]);

console.log(`Event with most attendees: ${eventWithMostAttendees.title}`);