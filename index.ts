// type User = {
//   name: string;
//   age: number | null;
//   country?: "US" | "UK" | "JP";
// };

// ReadOnly
// type ReadOnlyUser = Readonly<User>;

// const user: ReadOnlyUser = {
//   name: "しまぶー",
//   age: 20,
// };

// user.age = 30;

// Partial
// type PartialUser = Partial<User>;

// const user: PartialUser = {
//   name: "しまぶー",
// };

// Required(パーシャルの反対)
// type RequiredUser = Required<User>;

// const user: RequiredUser = {
//   name: "しまぶー",
//   age: 20,
//   // country: "JP"
// };

// type User = {
//   name: string;
//   age: number | null;
//   country?: "US" | "UK" | "JP";
// };

// // Pick(よく使う：プロパティを抜き出す)
// type PickUser = Pick<User, "name" | "country">;

// const user: PickUser = {
//   name: "しまぶー",
//   age: 20,
//   country: "JP",
// };

type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

// Omit(よく使う：不要なプロパティを抜き出す)
type OmitUser = Omit<User, "age">;

const user: OmitUser = {
  name: "しまぶー",
  age: 20,
  country: "JP",
};
