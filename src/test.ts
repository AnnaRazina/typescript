type Person = {
    name: string;
    age: (number|string);
    //необязятельные ключ/значение
    isSuperHero?: boolean;
    occupation?: string;
  };
  
  const users: Person[] = [
    {
      name: 'Owen Willson',
      age: 54,
      occupation: 'Actor',
    },
    {
      name: 'Ben Stiller',
      age: 57,
      occupation: 'Filmmaker',
    },
    {
      name: 'Batman',
      age: 'unknown',
      isSuperHero: true,
      occupation: 'vigilante',
    },
  ];
  
  function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
  }
  
  users.forEach(logPerson);
  