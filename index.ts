export type User<T> = {
  name: string;
  state: T;
};

// stateの型を後で決定させる（遅延）

type Japanese = User<"東京都" | "大阪府">;
type American = User<"CA" | "NY">;

const user1: Japanese = {
  name: "きゅん",
  state: "東京都",
};

const user2: American = {
  name: "Johnny",
  state: "CA",
};
