import errors.zeroException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class WhilePlusTest {
    WhilePlus whilePlus = new WhilePlus();

    @Test
    @DisplayName("입력값이 0일 때까지 덧셈해 반환한다.")
    public void calculate() throws RuntimeException{
        assertThat(whilePlus.calculate(1, 2)).isEqualTo(3);
        assertThatThrownBy(() -> whilePlus.calculate(0,0)).isInstanceOf(zeroException.class);
    }
}
