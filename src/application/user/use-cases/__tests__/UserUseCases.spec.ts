// import GetUsersUsecase from "@application/user/use-cases/GetUsers";
import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";
import type { User } from "@domain/User";
import UserUseCases from "../UserUseCases";

describe("User Use Cases test suite", () => {
  const mockedRepository: UserRepositoryInterface = {
    getAll: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    getById: jest.fn()
  };
  const mockedUser = {};
  const userId = "userId";
  const userUseCases = new UserUseCases(mockedRepository);
  it("Should get all the users", () => {
    userUseCases.getAll();
    expect(mockedRepository.getAll).toHaveBeenCalled();
  });

  it("Should create a user", () => {
    userUseCases.create(mockedUser as User);
    expect(mockedRepository.create).toHaveBeenNthCalledWith(1, mockedUser);
  });

  it("Should delete a user", () => {
    userUseCases.delete(userId);
    expect(mockedRepository.delete).toHaveBeenNthCalledWith(1, userId);
  });

  it("Should update a user", () => {
    userUseCases.update(mockedUser as User);
    expect(mockedRepository.update).toHaveBeenNthCalledWith(1, mockedUser);
  });

  it("Should get a user by id", () => {
    userUseCases.getById(userId);
    expect(mockedRepository.getById).toHaveBeenNthCalledWith(1, userId);
  });
});
