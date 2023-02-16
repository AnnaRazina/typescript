const users = [
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
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
users.forEach(logPerson);
export {};
//# sourceMappingURL=test.js.map