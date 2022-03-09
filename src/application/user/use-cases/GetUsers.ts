import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";

export default class GetUsersUsecase {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  run() {
    return this.userRepository.getAll();
  }
}
