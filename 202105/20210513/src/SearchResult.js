class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  /**
   * searchResult field에 "div" 태그 element를 할당합니다.
   * searchResult field의 className을 "SearchResult"로 설정합니다.
   * 선택자의 마지막 자식노드에 searchResult field를 붙입니다.
   * 
   * 주어진 초기 데이터를 data field에 할당합니다.
   * 주어진 onClick함수를 onClick field에 할당합니다.
   * 
   * render함수를 실행합니다.
   * @param {*} param0 {선택자, 초기 데이터, onClick함수}
   */
  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  /**
   * 주어진 데이터로 data field를 갱신하고 render함수를 실행합니다.
   * @param {*} nextData 새로운 데이터
   */
  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  /**
   * searchResult의 innerHTML에 다음 string을 할당합니다.
   * 다음 string: data field의 각 요소를 받아 "item" 클래스의 div로 감싸진 img 태그 element를 string으로 이어붙인 것
   * 
   */
  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        cat => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
      )
      .join("");

    /**
     * searchResult field의 모든 item클래스들에 eventListner를 추가합니다.
     * 이벤트의 이름은 "click"
     * onClick함수를 data의 index를 인자로 받아 실행합니다.
     */
    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
  }
}
