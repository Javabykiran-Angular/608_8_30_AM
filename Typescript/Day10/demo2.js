var Myclass = /** @class */ (function () {
    function Myclass(id, f, l) {
        this.id = id;
        this.fname = f;
        this.lname = l;
    }
    Myclass.prototype.display = function () {
        console.log("\n            Id         :: ".concat(this.id, "\n            First name :: ").concat(this.fname, "\n            Last name  :: ").concat(this.lname, "\n        "));
    };
    return Myclass;
}());
var obj = new Myclass(9, 'Sumit', 'Raokhande');
obj.display();
