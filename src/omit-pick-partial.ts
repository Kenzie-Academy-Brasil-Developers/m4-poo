interface IUser{
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}

//Omit
type TRegisterData = Omit<IUser, 'id'>;

// Pick
type TLoginBody = Pick<IUser, 'email' | 'password'>;

// Partial
type TPartialUser = Partial<IUser>;
const object: TPartialUser = { }

// Partial + Omit
type TUpdateData = Partial<TRegisterData>;