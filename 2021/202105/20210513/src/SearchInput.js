const TEMPLATE = '<input type="text">';

class SearchInput {
  /**
   * searchInput 변수에 input태그 element를 생성해 할당합니다.
   * searchInput field에 searchInput 변수를 할당합니다.
   * searchInput field의 placeholder를 설정합니다.
   * 
   * searchInput 변수의 className을 "SearchInput"으로 설정합니다.
   * target(선택자)의 마지막 자식 노드에 searchInput 변수를 붙입니다.
   * @param {*} param0 { target, onSearch } 선택자, onSearch함수 
   */
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    /**
     * searchInput 변수에 eventListener를 추가합니다.
     * "keyup"을 event의 이름으로 합니다.
     * 이벤트가 엔터이면 onSearch를 e.target.value를 인자로 받아 실행합니다.
     */
    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    /**
     * 인스턴스가 생성되었다는 것을 알려주며 인스턴스를 콘솔에 표시합니다.
     */
    console.log("SearchInput created.", this);
  }

  /**
   * render함수를 실행합니다.
   */
  render() {}
}
