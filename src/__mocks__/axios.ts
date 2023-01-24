export const page1 = {
    data: {
        "page": 1,
        "per_page": 3,
        "total": 6,
        "total_pages": 2,
        "data": [
            {
                "id": 1,
                "email": "adam.smith@reqres.in",
                "first_name": "Adam",
                "last_name": "Smith",
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            },
            {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
            {
                "id": 3,
                "email": "emma.wong@reqres.in",
                "first_name": "Emma",
                "last_name": "Wong",
                "avatar": "https://reqres.in/img/faces/3-image.jpg"
            },
        ],
    }
}

const page2 = {
    data: {
        "page": 2,
        "per_page": 3,
        "total": 6,
        "total_pages": 2,
        "data": [
            {
                "id": 4,
                "email": "george.bluth@reqres.in",
                "first_name": "George",
                "last_name": "Bluth",
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            },
            {
                "id": 5,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
            {
                "id": 6,
                "email": "emma.wong@reqres.in",
                "first_name": "Emma",
                "last_name": "Wong",
                "avatar": "https://reqres.in/img/faces/3-image.jpg"
            },
        ],
    }
}

const pageUpdate = {
    data: {
        "page": 1,
        "per_page": 3,
        "total": 6,
        "total_pages": 2,
        "data": [
            {
                "id": 1,
                "email": "new@email.com",
                "first_name": "New",
                "last_name": "Name",
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            },
            {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
            {
                "id": 3,
                "email": "emma.wong@reqres.in",
                "first_name": "Emma",
                "last_name": "Wong",
                "avatar": "https://reqres.in/img/faces/3-image.jpg"
            },
        ],
    }
}

export default {
    get: jest.fn().mockResolvedValue(page1),
    post: jest.fn().mockResolvedValue(page1),
    put: jest.fn().mockResolvedValue(pageUpdate),
    delete: jest.fn().mockResolvedValue(page1),
    create: jest.fn(function () {
        return {
            get: jest.fn().mockResolvedValue(page1),
            post: jest.fn().mockResolvedValue(page1),
            put: jest.fn().mockResolvedValue(pageUpdate),
            delete: jest.fn().mockResolvedValue(page1),
        }
    }),
};
