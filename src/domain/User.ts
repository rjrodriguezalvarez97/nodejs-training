export interface User {
  id: UserId;
  name: string;
  availability: string;
  email: string;
  country: string;
}

export type UserId = string;

export enum UserAvailability {
  AVAILABLE = "available",
  UNAVAILABLE = "unavailable"
}

