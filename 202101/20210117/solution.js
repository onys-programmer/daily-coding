function solution(n) {
    let string = "";

    for(let i = 1; i <= n; i++) {
        if(i % 2 == 0) {
            string += "박";
        } else {
            string += "수";
        }
    }  
    return string;
}

module.exports = solution;