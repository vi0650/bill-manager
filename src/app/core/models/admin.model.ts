export interface Admins {
    AdminId: number | any,
    shopName: string,
    userName: string,
    emailId: string,
    mobileNo: string,
    password:string,
    address: string,
    role: Role | string | any;
}

export enum Role {
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin',
  Manager = 'Manager',
} 