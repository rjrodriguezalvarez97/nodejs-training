import UserRepositoryInMemory from "@infra/repositories/in-memory/UserRepositoryInMemory";
import { UserAvailability } from "@domain/User";
import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";
import type { User, UserId } from "@domain/User";

describe("User repository in memory test suite", () => {
  const user: User = {
    id: "id123",
    name: "Ricky",
    availability: UserAvailability.AVAILABLE,
    email: "ricky@jobandtalent.com",
    country: "spain"
  };

  let userRepository: UserRepositoryInterface;
  const badUserId: UserId = "badId";
  const goodUserId: UserId = "id123";

  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
  });

  it("Should add a user", () => {
    expect(userRepository.getAll()).toEqual([]);
    userRepository.create(user);
    expect(userRepository.getAll()).toEqual([user]);
  });

  it("Should get all", () => {
    userRepository = new UserRepositoryInMemory([user]);

    const expected = [user];
    const result = userRepository.getAll();

    expect(result).toEqual(expected);
  });

  it("Should delete a user", () => {
    userRepository = new UserRepositoryInMemory([user]);
    const expected: User[] = [];

    expect(userRepository.getAll().length).toEqual(1);
    userRepository.delete(badUserId);
    expect(userRepository.getAll().length).toEqual(1);

    userRepository.delete(goodUserId);
    expect(userRepository.getAll()).toEqual(expected);
  });

  it("Should update a user", () => {
    userRepository = new UserRepositoryInMemory([user]);
    const userUpdated = { ...user, name: "Ricardo" };
    const expected = [userUpdated];

    expect(userRepository.getAll()).toEqual([user]);
    userRepository.update(userUpdated);

    expect(userRepository.getAll()).toEqual(expected);
  });
});
