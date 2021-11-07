describe('findLongestSubstring', () => {
  function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for(let i = 0; i < str.length; i++) {
      let char = str[i];

      if(seen[char]) {
        start = Math.max(start, seen[char]);
      }

      seen[char] = i + 1;

      longest = Math.max(longest, i - start + 1);
    }

    return longest;
  }

  it('returns the length of the longest substring with all distinct characters', () => {
    expect(findLongestSubstring('')).toBe(0);
    expect(findLongestSubstring('thisisawesome')).toBe(6);

  });
});

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for(let i = 0; i < str.length; i++) {
//     let char = str[i];
//     console.log(`char is str[${i}]: ${char}`);
//     if(seen[char]) {
//       start = Math.max(start, seen[char]);
//       console.log(`char is in seen, start becomes greater one between start: ${start} and seen[${char}]: ${seen[char]}`);
//     }

//     console.log(`longest : ${longest} or i: ${i} - start: ${start} + 1`)
//     longest = Math.max(longest, i - start + 1);

//     console.log(`seen[char] : (i)${i} + 1`);
//     seen[char] = i + 1;
//     console.log(seen);
//   }

//   return longest;
// }


// thisisawesome
// this
// si
// isawe
// some
