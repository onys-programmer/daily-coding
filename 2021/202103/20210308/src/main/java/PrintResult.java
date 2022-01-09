public class PrintResult {

    public static InvalidScoreException invalidScoreException;

    String print(int score) {
        if (score > 100 || score < 0) {
            throw new InvalidScoreException(score);
        }
        
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}
