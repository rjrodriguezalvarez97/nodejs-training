import type { User, UserId } from "@domain/User";

export default interface UserRepositoryInterface {
  getAll(): User[];
  create(user: User): void;
  delete(userId: UserId): void;
  update(user: User): User;
}
