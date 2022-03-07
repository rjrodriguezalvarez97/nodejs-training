import GetUsersUsecase from "@application/user/use-cases/GetUsers";
import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";
import CreateUserUseCase from "../CreateUser";
import type { User } from "@domain/User";
import DeleteUserUseCase from "../DeleteUser";
import UpdateUserUseCase from "../UpdateUser";

describe("User Use Cases test suite", () => {
  const mockedRepository: UserRepositoryInterface = {
    getAll: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn()
  };
  const mockedUser = {};
  const userId = "userId";
  it("Should get all the users", () => {
    const getUsers = new GetUsersUsecase(mockedRepository);
    getUsers.run();
    expect(mockedRepository.getAll).toHaveBeenCalled();
  });

  it("Should create a user", () => {
    const createUser = new CreateUserUseCase(mockedRepository);
    createUser.run(mockedUser as User);
    expect(mockedRepository.create).toHaveBeenNthCalledWith(1, mockedUser);
  });

  it("Should delete a user", () => {
    const deleteUser = new DeleteUserUseCase(mockedRepository);
    deleteUser.run(userId);
    expect(mockedRepository.delete).toHaveBeenNthCalledWith(1, userId);
  });

  it("Should update a user", () => {
    const updateUser = new UpdateUserUseCase(mockedRepository);
    updateUser.run(mockedUser as User);
    expect(mockedRepository.update).toHaveBeenNthCalledWith(1, mockedUser);
  });
});
