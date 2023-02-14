//// EX1
interface IFlight {
    flight: number;
    core: {
        reuse_count: number;
        status: unknown | string;
    }
}

interface IPayload {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number
}

interface IMission {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: {
        article_link: string | null;
        video_link: string;
    },
    rocket: {
        rocket_name: string;
        first_stage: {
            cores: IFlight[];
        },
        second_stage: {
            payloads: IPayload[]
        }
    }
}

////EX2a
interface IUser {
    name: string;
    age: number;
    gender: string;
}

const user: IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
}

////EX2b
function sum(a: number, b: number): number {
    return a + b
}

const s = sum(1, 2)
console.log(s);

////EX2c
function showSum(a: number, b: number): void {
    console.log(a + b);
}

showSum(2, 3)

////EX2d
function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}

incAge(user, 2);
