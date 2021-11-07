// function solution(participant, completion) {
//   var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
//   return participant.find(t=> {
//       if(dic[t])
//           dic[t] = dic[t]-1;
//       else 
//           return true;
//   });
// }

function solution(participant, completion) {
  const notCompleted = [ '서영' ];
  return(
    notCompleted
  );
};

module.exports = solution;