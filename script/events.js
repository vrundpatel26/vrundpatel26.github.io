
"use strict";

(function (core){

    class event {

        constructor(eventid="", eventName ="", eventDate ="", eventLocation ="", eventDescription ="") {
            this._eventid = eventid;
            this._eventName = eventName;
            this._eventDate = eventDate;
            this._eventLocation = eventLocation;
            this._eventDescription = eventDescription;
        }

        get eventid() {
            return this._eventid;
        }

        set eventid(value) {
            this._eventid = value;
        }

        get eventName() {
            return this._eventName;
        }

        set eventName(value) {
            this._eventName = value;
        }

        get eventDate() {
            return this._eventDate;
        }

        set eventDate(value) {
            this._eventDate = value;
        }

        get eventLocation() {
            return this._eventLocation;
        }

        set eventLocation(value) {
            this._eventLocation = value;
        }

        get eventDescription() {
            return this._eventDescription;
        }

        set eventDescription(value) {
            this._eventDescription = value;
        }

        toString(){
            return `Event ID: ${this.eventid}\nEvent Name: ${this.eventName}\nEvent Date: ${this.eventDate}\nEvent Location: ${this.eventLocation}\nEvent Description: ${this.eventDescription}`
        }

        toJSON(){
            return {
                id : this._eventid,
                name : this._eventName,
                date : this._eventDate,
                location : this._eventLocation,
                description : this._eventDescription
            }
        }

        fromJSON(eventData){
            this._eventid = eventData.id;
            this._eventName = eventData.name;
            this._eventDate = eventData.date;
            this._eventLocation = eventData.location;
            this._eventDescription = eventData.description;
        }

        serialize(){

            if(this._eventid !== "" && this._eventName !== "" && this._eventDate !== "" && this._eventLocation !== "" && this._eventDescription !== ""){
                return `${this._eventid}, ${this._eventName}, ${this._eventDate}, ${this._eventLocation}, ${this._eventDescription}`;
            }
            console.error("Failed");
            return null;
        }

        deserialize(eventData) {
            let propertyArray = eventData.split(",");
            this._eventid = propertyArray[0];
            this._eventName = propertyArray[1];
            this._eventDate = propertyArray[2];
            this._eventLocation = propertyArray[3];
            this._eventDescription = propertyArray[4];
        }

        }
    core.Event = event;

})(core || (core = {}));
