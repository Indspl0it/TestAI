import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  age?: IntFilter;
  createdAt?: DateTimeFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastLogin?: DateTimeNullableFilter;
  lastName?: StringFilter;
  updatedAt?: DateTimeFilter;
  username?: StringFilter;
};
