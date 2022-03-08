import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";
import type { UserId } from "@domain/User";

export default class GetUserByIdUsecase {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  run(userId: UserId) {
    return this.userRepository.getById(userId);
  }
}
