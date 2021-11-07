console.log("app is running!");

class App {
  $target = null;
  data = [];

  /**
   * target field에 인자로 받은 target을 할당합니다.
   * 
   * @param {*} $target 선택자
   */
  constructor($target) {
    this.$target = $target;

    /**
     * searchInput field에 SearchInput 인스턴스를 만들어 할당합니다.
     * 인스턴스가 생성될 때 인자는 target, onSearch함수입니다.
     * onSearch함수는 keyword를 받아 api에서 Cats를 fetch해오고 
     * 거기서 구조분해할당한 data로 state를 갱신합니다.
     */
    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      }
    });

    /**
     * searchResult field에 SearchResult 인스턴스를 만들어 할당합니다.
     * 인스턴스가 생성될 때 인자는 target, initialData, onClick입니다.
     * initialData는 현재 data field입니다.
     * onClick함수는 image를 받아 imageInfo field의 state를 
     * visible: true, image를 image로 갱신합니다.
     */
    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    /**
     * imageInfo field에 ImageInfo 인스턴스를 만들어 할당합니다.
     * 인스턴스가 생성될 때 인자는 target, data입니다.
     * data는 visible: false이고 image: null인 객체입니다.
     */
    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  /**
   * 주어진 데이터로 data field를 갱신하고 searchResult의 state를 새 데이터로 갱신합니다.
   * @param {*} nextData 새로운 데이터
   */
  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
