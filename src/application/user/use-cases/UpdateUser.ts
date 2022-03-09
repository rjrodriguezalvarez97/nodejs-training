import type { User } from "@domain/User";
import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";

export default class UpdateUserUseCase {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  run(user: User) {
    return this.userRepository.update(user);
  }
}
