export interface User {
  _id: string;
  name: string;
  email: string;
  role: Role;
  profilePicture: string;
  accessToken: string;
}


export enum ROLES {
  SUPER_ADMIN = 0,
  ADMIN = 1,
  TEACHER = 2,
  STUDENT = 3,
}
export enum ROLES_LABEL {
  "Super_Admin" = "Super_Admin",
  "Admin" = "Admin",
  "Teacher" = "Teacher",
  "Student" = "Student",
}

export type Role_Label = `${ROLES_LABEL}`;
export interface Role {
  id: ROLES;
  label: Role_Label;
  scopes: any[];
}
