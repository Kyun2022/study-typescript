type User1 = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

/* --------------------------------------------
/* ReadOnly
/* -------------------------------------------- */
type ReadOnlyUser = Readonly<User>;

const user1: ReadOnlyUser = {
  name: "しまぶー",
  age: 20,
};

user1.age = 30;

/* --------------------------------------------
/* Partial
/* -------------------------------------------- */
type PartialUser = Partial<User>;

const user2: PartialUser = {
  name: "しまぶー",
};

/* --------------------------------------------
/* Required(パーシャルの反対)
/* -------------------------------------------- */
type RequiredUser = Required<User1>;

const user3: RequiredUser = {
  name: "しまぶー",
  age: 20,
  country: "JP",
};

/* --------------------------------------------
/* Pick(よく使う：プロパティを抜き出す)
/* -------------------------------------------- */

type PickUser = Pick<User, "name" | "country">;

const user4: PickUser = {
  name: "しまぶー",
  age: 20,
  country: "JP",
};

type User2 = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

/* --------------------------------------------
/* Omit(よく使う：不要なプロパティを抜き出す)
/* -------------------------------------------- */
type OmitUser = Omit<User2, "age">;

const user5: OmitUser = {
  name: "しまぶー",
  age: 20,
  country: "JP",
};
/* --------------------------------------------
/* Extract(任意の方だけを抽出する)
/* -------------------------------------------- */
type Foo1 = Extract<string | number, string>;

/* --------------------------------------------
/* Exclude(任意の方を除外する)
/* -------------------------------------------- */
type bar = Exclude<string | number, string>;

/* --------------------------------------------
/* NonNullable
/* -------------------------------------------- */
type Baz = NonNullable<string | null | undefined>;

/* --------------------------------------------
/* Record
/* -------------------------------------------- */
type Foo3 = Record<"hoge" | "fuga", 1 | 3>;

const obj: Foo3 = {
  hoge: 1,
  fuga: 2,
  aaa: 3,
};
/* --------------------------------------------
/* Parameters(関数の引数の型をTupleとして取得する);
/* -------------------------------------------- */

function foo(a: string, b: number[], c: boolean) {
  return;
}
type Foo = Parameters<typeof foo>;

type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

/* --------------------------------------------
/* Uppercase(string リテラルタイプを大文字にする)
/* -------------------------------------------- */
type Baz1 = Uppercase<"hello">;

/* --------------------------------------------
/* Lowercase(string リテラルタイプを小文字にする)
/* -------------------------------------------- */
type Baz2 = Lowercase<"Hello">;

/* --------------------------------------------
/* Capitalize(string リテラルタイプを先頭の文字を大文字にする)
/* -------------------------------------------- */
type Baz3 = Capitalize<"hello">;

/* --------------------------------------------
/* UnCapitalize(string リテラルタイプを先頭の文字を小文字にする)
/* -------------------------------------------- */
type Baz4 = Uncapitalize<"HELLO">;
