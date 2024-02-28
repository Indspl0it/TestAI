import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  age: number;
  firstName: string;
  lastLogin?: Date | null;
  lastName: string;
  password: string;
  roles: InputJsonValue;
  username: string;
};
