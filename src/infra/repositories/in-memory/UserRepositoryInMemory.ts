import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";
import type { User, UserId } from "@domain/User";

export default class UserRepositoryInMemory implements UserRepositoryInterface {
  private users: User[];

  constructor(users?: User[]) {
    this.users = users ? users : [];
  }

  getAll(): User[] {
    return this.users;
  }
  create(user: User): void {
    this.users.push(user);
  }
  delete(userId: UserId): void {
    this.users = this.users.filter((element) => element.id !== userId);
  }
  update(user: User): User {
    const userIndex = this.users.findIndex((element) => element.id === user.id);

    if (userIndex >= 0) {
      this.users[userIndex] = user;
    }
    return user;
  }
}
