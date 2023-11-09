type Users = {
  name: string;
  age: number | null;
  address: {
    country: "US" | "UK" | "JP";
  };
};

type PartialUsers = Partial<Users>;

const user: PartialUsers = {
  name: "きゅん",
  address: {},
};
