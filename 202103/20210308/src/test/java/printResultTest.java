import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;


class printResultTest {
    private PrintResult printResult = new PrintResult();

    @Test
    void printScore() {
        assertThat(printResult.print(97)).isEqualTo("A");
        assertThat(printResult.print(87)).isEqualTo("B");
        assertThat(printResult.print(77)).isEqualTo("C");
        assertThat(printResult.print(67)).isEqualTo("D");
    }

    @Test
    void printScoreWithInvalidScore() {
        assertThatThrownBy(() -> printResult.print(101)).isInstanceOf(InvalidScoreException.class);
    }
}