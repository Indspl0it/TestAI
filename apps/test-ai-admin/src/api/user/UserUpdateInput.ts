import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  age?: number;
  firstName?: string;
  lastLogin?: Date | null;
  lastName?: string;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
