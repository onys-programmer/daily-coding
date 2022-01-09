public class InvalidScoreException extends RuntimeException {
    public InvalidScoreException(int score) {
        super("잡았다 요놈!! 점수가 왜 이모양이냐! : " + score);
    }
}
