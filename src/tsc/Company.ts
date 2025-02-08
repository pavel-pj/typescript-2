
 namespace Company {
    function dest(a: number, b: number): number {
        return a + b;
    }

    export default dest;
}
 

/*
type User = {
    email: string
};

function authorize(user: User | null): boolean {
    const companyDomain = 'hexlet.io';

    const email = user?.email ?? '';

    return Company.isEmployeeEmail(email, companyDomain);
}

export default authorize;
 */