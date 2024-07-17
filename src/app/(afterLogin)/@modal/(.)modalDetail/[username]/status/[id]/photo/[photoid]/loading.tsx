interface User {
  name?: string;
  age?: number;
}

export default function Loading() {
  const user: Required<User> = {
    name: "111",
    age: 30,
  };

  return "loading....";
}
