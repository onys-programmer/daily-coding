import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class WhilePlus {

    public static void main(String[] args) throws IOException {

        while(true) {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            StringTokenizer st = new StringTokenizer(br.readLine());

            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());


            if(a == 0 && b == 0) {
                break;
            }
            System.out.println(calculate(a, b));
    }
}
    public static int calculate(int a, int b) {
        return a + b;
    }
}
