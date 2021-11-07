test('', () => {
  function unique(arr) {
    let mySet = new Set();
    for(let i = 0; i < arr.length; i++) {
      mySet.add(arr[i]);
    };
    
    return Array.from(mySet);
  }
  
  function uniqueByIncludes(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    
    return result;
  }

  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  expect( unique(strings) ).toStrictEqual(["Hare", "Krishna" ,":-O"]);
  expect( uniqueByIncludes(strings) ).toStrictEqual(["Hare", "Krishna" ,":-O"]);
});
