import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int hansooNumber = 0;

    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int inputValue = Integer.parseInt(st.nextToken());
        System.out.println(countHansoo(inputValue));
    }

    private static int countHansoo(int inputValue) {
        for(int i = 1; i <= inputValue; i++) {
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

    private static void hansooOverHundred(int first, int second, int third) {
        if(first - second == second - third) {
            hansooNumber++;
        }
    }
}
