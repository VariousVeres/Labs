function User(){
    this.name ="Sasha";
    this.surname="Veresyuk";

    Object.defineProperty(this, 'showFullName', {
        get: function () {
            return this.name + " " + this.surname;
        },
        set: function(value)  {
            this.surname=value;
        }
        });

    };

var user  = new User();
console.log(user.showFullName);
user.showFullName="Stepov1nko";
console.log(user.showFullName);
