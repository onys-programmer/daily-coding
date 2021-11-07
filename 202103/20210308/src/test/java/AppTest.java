import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;


class AppTest {
    App app = new App();

    @Test
    void main() {
        assertThat(app.greeting()).isEqualTo("Hello world");
    }
}