
namespace Company {
    export function isEmployeeEmail(email:string, companyDomain:string):boolean{
        const domain = email.split('@')[1];
        return domain === companyDomain;
    }
}

type User = {
    email: string
};

function authorize(user: User | null): boolean {
    const companyDomain = 'hexlet.io';

    const email = user?.email ?? '';

    return Company.isEmployeeEmail(email, companyDomain);
}

export {Company,authorize};
