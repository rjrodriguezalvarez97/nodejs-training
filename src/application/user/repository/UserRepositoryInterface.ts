import type { User, UserId } from "@domain/User";

export default interface UserRepositoryInterface {
  getAll(): User[];
  getById(userId: UserId): User | undefined;
  create(user: User): void;
  delete(userId: UserId): void;
  update(user: User): User;
}
