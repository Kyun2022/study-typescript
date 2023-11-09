import { type } from "os";

const foo = (id: string, age: number) => {
  return 0;
};

// type Return<T> = T extends () => infer U ? U : never;
type Return<T> = T extends (...args: [any, infer U, ...any[]]) => any
  ? U
  : never;

type Foo = Return<typeof foo>;
