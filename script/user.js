"use strict";

(function (core) {

    class user {

        constructor(displayName = "", emailAddress = "", username = "", password = "") {
            this._displayName = displayName;
            this._emailAddress = emailAddress;
            this._username = username;
            this._password = password;
        }
        get displayName() {
            return this._displayName;
        }

        set displayName(value) {
            this._displayName = value;
        }

        get emailAddress() {
            return this._emailAddress;
        }

        set emailAddress(value) {
            this._emailAddress = value;
        }

        get username() {
            return this._username;
        }

        set username(value) {
            this._username = value;
        }


        toString(){
            return `Display Name: ${this._displayName}\nEmail Address: ${this._emailAddress}\nUsername: ${this._username}`
        }

        toJSON(){
            return {
                DisplayName : this._displayName,
                EmailAddress : this._emailAddress,
                Username: this._username,
                Password: this.Password
            }
        }

        fromJSON(data){
            this._displayName = data.DisplayName;
            this._emailAddress = data.EmailAddress;
            this._username = data.Username;
            this._password = data.Password;

        }

        serialize(){

            if(this._displayName !== "" && this._emailAddress !== "" && this._username !== ""){
                return `${this._displayName}, ${this._emailAddress}, ${this._username}`;
            }
            console.error("Failed");
            return null;
        }

        deserialize(data) {
            let propertyArray = data.split(",");
            this._displayName = propertyArray[0];
            this._emailAddress = propertyArray[1];
            this._username = propertyArray[2];        }

    }
    core.User = user;
})(core || (core = {}))