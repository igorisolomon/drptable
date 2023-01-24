
export interface IRow {
    id: number,
    lastName: string,
    firstName: string | null,
    age: number | null
}

export interface IDatum {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ISupport {
    url: string;
    text: string;
}

export interface IUserList {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IDatum[];
    support: ISupport;
}
