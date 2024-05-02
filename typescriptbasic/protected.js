var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Users.prototype.getNamess = function () {
        return this.name;
    };
    return Users;
}(UserDetails));
//inheritated the UserDetails to the Users
var reslut2 = new UserDetails("siva", 55, "ongole");
