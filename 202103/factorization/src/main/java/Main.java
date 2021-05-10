import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int input = Integer.parseInt(st.nextToken());

        factorize(input);
    }

    private static void factorize(int input) {
        if(input == 1) {
            return;
        }
        for(int i = 2; i <= input; i++) {
            if (input % i == 0) {
                System.out.println(i);

                input = input / i;
                i = 1;
            }
        }
    }
}
