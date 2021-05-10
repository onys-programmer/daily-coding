package errors;

public class zeroException extends RuntimeException{

    public zeroException(int a, int b, Throwable cause) {
        super("Task finished", cause);

    }

}
