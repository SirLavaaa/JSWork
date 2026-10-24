 let numbs = [20, -1, -3, 288, 28,87, -43, -222, -1899]
 let filternumbs = numbs.filter(value=> value > 100 && value %2 == 0)
 console.log(filternumbs)
 
 let names = ["Jhon", "Mike", "Walter", "Jim", "Jerry"]
 let filternames = names.filter(name => name.length > 3 && name.startsWith("J"))
 console.log(filternames)
 filternames.forEach(names => {
    console.log("Hello " + names)
 })