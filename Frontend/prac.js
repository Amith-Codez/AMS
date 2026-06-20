// // // // // var a = 10;
// // // // // var b = "10";
// // // // // console.log(a===b); console.log("Hello, World!");
































// // // // const a =["apple", "banana", "cherry"];

// // // // for (let i = 0; i < a.length; i++) {
// // // //     console.log(a[i]);
// // // // }

// // // // const object = {
// // // //   name: "John",
// // // //   age: 30,
// // // //   city: "New York"
// // // // },{
// // // //     name: "Jane",
// // // //     age: 25,
// // // //     city: "London"
// // // // },{
// // // //     name: "Doe",
// // // //     age: 35,
// // // //     city: "Paris"
// // // // };



// // // // for (let key in object) {
// // // //   console.log(key + ": " + object[key]);
// // // // }



// // // // function declaration - A named function defined with the function keyword, hoisted to the top of its scope.
// // // // function declaration (typo fixed) - same as above.
// // // // arrow function - A concise function syntax using =>; does not have its own this or arguments.
// // // // function expression - A function assigned to a variable; can be anonymous or named; not hoisted like declarations.
// // // // IIFE - Immediately Invoked Function Expression; a function that runs immediately after it's defined to create a private scope.
// // // // anonymous function - A function without a name, often used as a callback or in function expressions.
// // // // named function - A function with an identifier; useful for recursion and debugging.
// // // // function constructor - Creating functions via the Function constructor (rarely used; eval-like behavior).
// // // // function hoisting - JS behavior where function declarations are moved to the top of their scope, allowing calls before declarations.
// // // // function currying - Transforming a function that takes multiple args into a sequence of functions each taking a single arg.
// // // // function partial application - Pre-filling some arguments of a function, returning a new function expecting the rest.
// // // // function composition - Combining two or more functions so the output of one becomes the input of the next.
// // // // function memoization - Caching function results for given inputs to avoid repeated expensive computations.
// // // // function throttling - Limiting a function to run at most once in a specified time interval.
// // // // function debouncing - Delaying function execution until a specified period has passed without additional calls.
// // // // function overloading - Defining multiple function signatures with same name (JS doesn't support it natively; handled via arg checks).
// // // // function overriding - Subclass or later declaration provides a new implementation for an existing function/method.
// // // // function polymorphism - Ability for functions/methods to operate on different types or classes (e.g., via duck typing).
// // // // higher order function - A function that takes other functions as arguments or returns a function.
// // // // function closure - A function that retains access to variables from its lexical scope even when executed outside that scope.
// // // // function callback - A function passed as an argument to be invoked later.
// // // // function generator - A function declared with function* that can pause and resume using yield, returning an iterator.
// // // // function async/await - async marks a function that returns a promise; await pauses execution until the promise resolves.
// // // // function promise - An object representing the eventual completion or failure of an asynchronous operation.




// // // // const arr = [1, 2, 3, 4, 5];
// // // // console.log(arr.push(6)); // Output: 6 (new length of the array)

// // // // console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// // // // console.log(arr.pop()); // Output: 6 (removed element from the end of the array)
// // // // console.log(arr); // Output: [1, 2, 3, 4, 5]

// // // // console.log(arr.shift()); // Output: 1 (removed element from the beginning of the array)
// // // // console.log(arr); // Output: [2, 3, 4, 5]

// // // // console.log(arr.unshift(0)); // Output: 6 (new length of the array)
// // // // console.log(arr); // Output: [0, 2, 3, 4, 5]

// // // // console.log(arr.splice(1, 2,3,4)); // Output: [2, 3] (removed elements starting from index 1, removing 2 elements, and adding 3 and 4)
// // // // console.log(arr); // Output: [0, 3, 4, 4, 5] (array after splicing)

// // // // console.log(arr.slice(1, 3)); // Output: [3, 4] (sliced elements from index 1 to 2)
// // // // console.log(arr); // Output: [0, 3, 4, 4, 5] (array remains unchanged)

// // // // console.log(arr.reverse()); // Output: [5, 4, 4, 3, 0] (reversed array)
// // // // console.log(arr); // Output: [5, 4, 4, 3, 0] (array remains unchanged)

// // // // console.log(arr.sort()); // Output: [0, 3, 4, 4, 5] (sorted array)
// // // // console.log(arr); // Output: [0, 3, 4, 4, 5] (array remains unchanged)

// // // // console.log(arr.indexOf(4)); // Output: 2 (index of the first occurrence of 4 in the array)
// // // // console.log(arr); // Output: [0, 3, 4, 4, 5] (array remains unchanged)


// // // // find() - Returns the value of the first element in the array that satisfies the provided testing function; otherwise, undefined is returned.
// // // // findIndex() - Returns the index of the first element in the array that satisfies the provided testing function; otherwise, -1 is returned.
// // // // filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// // // // map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
// // // // reduce() - Executes a reducer function on each element of the array, resulting in a single output value.
// // // // forEach() - Executes a provided function once for each array element; does not return a new array.
// // // // some() - Tests whether at least one element in the array passes the test implemented by the provided function; returns a boolean.
// // // // every() - Tests whether all elements in the array pass the test implemented by the provided function; returns a boolean.
// // // const arr = [
// // //     {
// // //         name: "John",
// // //         age: 30,
// // //         city: "New York"
// // //     },
// // //     {
// // //         name: "Jane",
// // //         age: 45,
// // //         city: "London"
// // //     },
// // //     {
// // //         name: "Doe",
// // //         age: 35,
// // //         city: "Paris"
// // //     }
// // // ];
// // // // Using find() to get the first person older than 30 years old
// // // const olderThan30 = arr.find(person => person.age > 30);
// // // console.log(olderThan30); // Output: { name: 'Jane', age: 45, city: 'London' }

// // // // Using findIndex() to get the index of the first person older than 30 years old
// // // const index = arr.findIndex(person => person.age > 30);
// // // console.log(index); // Output: 1

// // // // Using forEach() to log the names of all people in the array
// // // arr.forEach(person => console.log(person.name)); // Output: John, Jane, Doe

// // // // Using filter() to get all people older than 30 years old
// // // const olderThan30Array = arr.filter(person => person.age > 30); // here we are using filter to create a new array that contains only the people older than 30 years old
// // // console.log(olderThan30Array); // Output: [{ name: 'Jane', age: 45, city: 'London' }, { name: 'Doe', age: 35, city: 'Paris' }]

// // // // Using map() to create an array of names
// // // const names = arr.map(person => person.name); // here we are using map to create a new array that contains only the names of the people in the original array. The map function takes each person object, extracts the name property, and returns it, resulting in an array of names.
// // // console.log(names); // Output: ['John', 'Jane', 'Doe']

// // // // Using reduce() to calculate the total age of all people in the array
// // // const totalAge = arr.reduce((sum, person) => sum + person.age, 0); // 0 is the initial value for the sum 
// // // console.log(totalAge); // Output: 110

// // // // Using some() to check if any person is from New York
// // // const isFromNY = arr.some(person => person.city === "New York");
// // // console.log(isFromNY); // Output: true

// // // // Using every() to check if all people are older than 20 years old
// // // const allOlderThan20 = arr.every(person => person.age > 20);
// // // console.log(allOlderThan20); // Output: true

// // // // Using sort() to sort the array by age in ascending order
// // // const sortedByAge = arr.sort((a, b) => a.age - b.age); // here we are using sort to sort the array of people by their age in ascending order. The sort function takes two person objects, compares their age properties, and returns a negative value if the first person is younger, a positive value if the first person is older, or zero if they are the same age.
// // // console.log(sortedByAge); // Output: [{ name: 'John', age: 30, city: 'New York' }, { name: 'Doe', age: 35, city: 'Paris' }, { name: 'Jane', age: 45, city: 'London' }]

// // const students = [
// //   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
// //   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
// //   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
// //   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
// //   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

// //   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
// //   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
// //   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
// //   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
// //   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

// //   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
// //   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
// //   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
// //   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
// //   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

// //   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
// //   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
// //   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
// //   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
// //   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

// //   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
// //   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
// //   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
// //   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
// //   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

// //   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
// //   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
// //   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
// //   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
// //   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// // ];

// // // A student is considered to have passed if they have scored 35 or more marks .
// // // Display all passed students 
// // const passedstd = students.filter(student => student.marks >=35);
// // console.log("passed Students = ", passedstd);

// // // Display all passed students in CSE department
// // const passedCSE = students.filter(student => student.marks >=35 && student.department === "CSE");
// // console.log("Passed Students in CSE Department = ", passedCSE);

// // const passedCSM = students.filter(student => student.marks >=35 && student.department === "CSM");
// // console.log("Passed Students in CSM Department = ", passedCSM);

// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
//   { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
//   { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
//   { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
//   { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
//   { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
//   { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
//   { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
//   { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
// ];

// const placedstd = students.filter(student => student.placed === true);
// console.log(placedstd);

// const nmofplacedstd= students.filter(student => student.placed === true);
// const nm = nmofplacedstd.map(student => ( {name: student.name, package: student.package}));
// console.log(nm);

// const avg = placedstd.reduce((sum,student) => sum + student.package, 0)/placedstd.length;
// console.log("Average package of placed students = ", avg);

// const max = placedstd.reduce((max,student) => Math.max(max, student.package), 0);
// console.log("Maximum package of placed students = ", max);

// const nmore10 = placedstd.filter(student => student.package>10);
// const nmore = nmore10.map(student => ( {name: student.name, package: student.package}));
// console.log("Students with package more than 10 = ", nmore);

