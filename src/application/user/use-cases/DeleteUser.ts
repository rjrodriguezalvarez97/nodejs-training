import type { UserId } from "@domain/User";
import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";

export default class DeleteUserUseCase {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  run(userId: UserId) {
    return this.userRepository.delete(userId);
  }
}
