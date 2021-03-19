import java.util.ArrayList;
import java.util.List;

public class ModifyArray2 {
    public List<Integer> modifyArray() {
        List<Integer> array = new ArrayList<>();
        int temp;
        for(int i = 1; i <=10000; i++) {
            if(i < 10) {
                temp = i + i;
                array.set(temp, 1);
            } else if(i < 100) {
                temp = i + (i/10) + (i%10);
                array.set(temp, 1);
            } else if(i < 1000) {
                temp = i + (i/100) + ((i%100)/10) + ((i%100)%10);
                array.set(temp, 1);
            } else {
                temp = i + (i/1000) + ((i%1000)/100) + (((i%1000)%100)/10) + (((i%1000)%100)%10);
                array.set(temp, 1);
            }
        }

        return array;
    }
}
