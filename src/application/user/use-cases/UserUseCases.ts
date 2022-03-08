import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";
import CreateUserUseCase from "./CreateUser";
import type { User, UserId } from "@domain/User";
import UpdateUserUseCase from "./UpdateUser";
import GetUsersUseCase from "./GetUsers";
import DeleteUserUseCase from "./DeleteUser";
import GetUserByIdUseCase from "./GetUserById";
export default class UserUseCases {
  private createUser: CreateUserUseCase;
  private updateUser: UpdateUserUseCase;
  private getUsers: GetUsersUseCase;
  private deleteUser: DeleteUserUseCase;
  private getUserById: GetUserByIdUseCase;

  constructor(userRepository: UserRepositoryInterface) {
    this.createUser = new CreateUserUseCase(userRepository);
    this.updateUser = new UpdateUserUseCase(userRepository);
    this.getUsers = new GetUsersUseCase(userRepository);
    this.deleteUser = new DeleteUserUseCase(userRepository);
    this.getUserById = new GetUserByIdUseCase(userRepository);
  }

  create(user: User) {
    console.log("hola?");
    return this.createUser.run(user);
  }

  update(user: User) {
    return this.updateUser.run(user);
  }

  getAll() {
    return this.getUsers.run();
  }
  getById(userId: UserId) {
    return this.getUserById.run(userId);
  }

  delete(userId: UserId) {
    return this.deleteUser.run(userId);
  }
}
