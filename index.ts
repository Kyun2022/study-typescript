function foo<T>(arg: T) {
  return { value: arg };
}

const foo1 = foo<number[]>()