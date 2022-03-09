import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";

export default interface RepositoryInterface {
  userRepository: UserRepositoryInterface;
}
