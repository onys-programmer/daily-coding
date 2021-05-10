function solution(a, b) {
  const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const daysOfMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  let gap = 0;
  
  if(a != 1 || b != 1) {
      let temp = daysOfMonth.slice();
      temp.splice(a-1);
      
      const gapOfMonth = temp.reduce((acc, cur) => acc + cur, 0);
      gap += gapOfMonth;
      
      const gapOfDay = b-1;
      gap += gapOfDay;
  }
  
  var answer = week[gap%7];
  return answer;
}
