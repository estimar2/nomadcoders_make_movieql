const nicolas = {
  name: "Nicolas",
  age: 19,
  gender: "femail",
};

const resolvers = {
  Query: {
    person: () => nicolas,
  },
};

export default resolvers;
