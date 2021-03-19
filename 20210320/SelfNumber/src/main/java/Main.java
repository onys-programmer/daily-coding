import java.util.List;

public class Main {
    public static void main(String[] args) {
        ModifyArray2 something = new ModifyArray2();
        List<Integer> selfNumbers = something.modifyArray();

        PrintSelfNumber.printSelfNumber(selfNumbers);
    }
}
