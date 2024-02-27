"use strict";

class Contact {

    constructor(fullName ="", emailAddress = "", subject="", message="") {
        this._fullName = fullName;
        this._emailAddress = emailAddress;
        this._subject = subject;
        this._message = message;

    }


    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    get emailAddress() {
        return this._emailAddress;
    }

    set emailAddress(value) {
        this._emailAddress = value;
    }

    get subject() {
        return this._subject;
    }

    set subject(value) {
        this._subject = value;
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }


    toString(){
        return `FullName ${this._fullName}\n
        EmailAddress ${this._emailAddress}\n
        subject ${this._subject}\n
        message ${this._message}`;
    }

    /**
     * serialize for writing local storage
     */
    serialize(){
        if(this._fullName !== "" && this._emailAddress !== "" && this._subject !== "" && this._message !== ""){
            return `${this._fullName}, ${this._emailAddress}, ${this._subject}, ${this._message}`;
        }
        console.error("One or more of the contact properties are missing or invalid");
        return null;
    }

    /**
     * Deserialize means to read data from local storage
     */
    deserialize(data){
        let propertyArray = data.split(",");
        this._fullName = propertyArray[0];
        this._emailAddress = propertyArray[1];
        this._subject = propertyArray[2];
        this._message = propertyArray[3]
    }
}