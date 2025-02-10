interface userIdentity<T,U> {
    name:T,
    value:T,
    age:U,

}

class User<X,Y> implements userIdentity<X,Y> {

    constructor(public name:X,public value:X,public age:Y){};

    getName():X {
        return this.name;
    }

    getAge():X {
        return String(this.age) as X;
    }

}

export {User}
