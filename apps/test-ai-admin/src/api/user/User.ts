import { JsonValue } from "type-fest";

export type User = {
  age: number;
  createdAt: Date;
  firstName: string;
  id: string;
  lastLogin: Date | null;
  lastName: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
