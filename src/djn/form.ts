type Form = {
    age: {
        value: number,
        validator: (val: number) => boolean
    },
    name: {
        value: string,
        validator: (val: string) => boolean
    }
};

const form: Form = {
    age: {
        value: 25,
        validator: (val: number) => val > 30
    },
    name: {
        value:"Валера",
        validator: (val: string) => val.length > 3
    }

};

export default form;