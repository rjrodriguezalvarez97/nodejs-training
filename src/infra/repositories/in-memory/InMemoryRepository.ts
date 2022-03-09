import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";
import type RepositoryInterface from "@infra/interfaces/RepositoryInterface";
import UserRepositoryInMemory from "./UserRepositoryInMemory";

export default class InMemoryRepository implements RepositoryInterface {
  userRepository: UserRepositoryInterface;
  
  constructor() {
    this.userRepository = new UserRepositoryInMemory();
  }
}
