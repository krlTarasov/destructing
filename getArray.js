export default function getArray(person, specialId) {
  console.log(pers.special);
  const {
    id, name, icon, description = 'Описание недоступно',
  } = person.special.filter((elem) => elem.id === specialId)[0];
  return {
    id, name, icon, description,
  };
}
