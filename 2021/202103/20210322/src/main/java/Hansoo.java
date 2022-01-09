public class Hansoo {
    static int hansooNumber = 0;
    public int countHansoo(int inputValue) {


        for(int i = 0; i < inputValue; i++) {
            if (i < 100) {
                hansooNumber++;
            } else {
                int first = i/100;
                int second = (i%100)/10;
                int third = i%10;

                hansooOverHundred(first, second, third);
            }
        }
        return hansooNumber;
    }

    private void hansooOverHundred(int first, int second, int third) {
        if(first - second == second - third) {
            hansooNumber++;
        }
    }
}
