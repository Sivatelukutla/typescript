//get and set method in class
//get means => we want a some information => we use get method 
//set is differnt to the get method 
var UserDetails = /** @class */ (function () {
    function UserDetails(name, age, city) {
        this._compound = 1;
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Object.defineProperty(UserDetails.prototype, "getName", {
        get: function () {
            return "name ".concat(this.name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserDetails.prototype, "getNumber", {
        set: function (value) {
            if (value <= 1) {
                throw new Error("hello");
            }
            this._compound = value;
        },
        enumerable: false,
        configurable: true
    });
    return UserDetails;
}());
var reslut2 = new UserDetails("siva", 55, "ongole");
