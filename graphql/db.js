export const people = [
  { id: "0", name: "Nicolas", age: 19, gender: "female" },
  { id: "1", name: "song", age: 26, gender: "female" },
  { id: "2", name: "in", age: 31, gender: "male" },
  { id: "3", name: "he", age: 25, gender: "female" },
  { id: "4", name: "ho", age: 22, gender: "male" },
  { id: "5", name: "Dall", age: 18, gender: "male" },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === people.id);
  return filteredPeople[0];
};
