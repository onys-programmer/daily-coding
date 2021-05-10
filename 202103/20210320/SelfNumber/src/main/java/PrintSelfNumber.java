import java.util.List;

public class PrintSelfNumber {
    public static void printSelfNumber(List<Integer> selfNumbers) {
        for(int i = 1; i <= 10000; i++) {
            System.out.println(selfNumbers.get(i));
        }
    }
}
