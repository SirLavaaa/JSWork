const users = [
   {
      id: 1,
      name: "Jhon",
      age: 23,
      active: true
   },
   {
      id: 2,
      name: "Mike",
      age: 28,
      active: true
   },
   {
      id: 3,
      name: "Sam",
      age: 56,
      active: false
   }
]

let filterUsersByStatus = users.filter(user => user.active == true)
console.log(filterUsersByStatus);

let userNames = users.map(({name}) => ({name}))
console.log(userNames)

let filterUsersBiId = users.filter(user => user.id == 1)
console.log(filterUsersBiId)


