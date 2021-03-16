import java.util.ArrayList;
import java.util.List;

public class Main {
    int[] modifyArray() {
        int[] array = new int[10001];
        int temp;
        for(int i = 1; i <= 10000; i++) {
            if(i < 10) {
                temp = i + i;
                array[temp] = 1;
            } else if(i < 100) {
                temp = i + (i/10) + (i%10);
                array[temp] = 1;
            } else if(i < 1000) {
                temp = i + (i/100) + ((i%100)/10) + ((i%100)%10);
                array[temp] = 1;
            } else {
                temp = i + (i/1000) + ((i%1000)/100) + (((i%1000)%100)/10) + (((i%1000)%100)%10);
                array[temp] = 1;
            }
        }

        return array;
    }

    public static void printSelfNumber(int[] selfNumbers) {
        for(int i = 1; i <= 10000; i++) {
            System.out.println(selfNumbers[i]);
        }
    }

    public static void main(String[] args) {
        printSelfNumber();
    }
}
