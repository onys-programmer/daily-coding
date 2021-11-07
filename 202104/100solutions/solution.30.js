function solution(d, budget) {
    var answer = 0;

    // d 배열에서 값이 작은 놈부터 빼서 answer에 +1
    d.sort((a, b) => a - b);
    var sum = 0;
    for(var i = 0; i < d.length; i++) {
        if(budget < sum + d[i]) break;
        sum += d[i];
        answer++;
    }

    return answer;
}
