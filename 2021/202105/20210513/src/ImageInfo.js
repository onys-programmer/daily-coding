class ImageInfo {
  $imageInfo = null;
  data = null;

  /**
   * imageInfo 변수에 div 태그 element를 만들어 할당합니다.
   * imageInfo 변수의 className을 "ImageInfo"로 설정합니다.
   * imageInfo field에 imageInfo 변수를 할당합니다.
   * target의 끝 자식노드에 imageInfo 변수를 붙입니다.
   * 
   * data field에 data를 할당합니다.
   * 
   * render함수를 실행합니다.
   * @param {*} param0 { target, data }
   */
  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  /**
   * 주어진 데이터를 받아 data field에 할당합니다.
   * render함수를 실행합니다.
   * @param {*} nextData 새로운 데이터
   */
  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  /**
   * data field의 visible: true라면
   * data field의 image에서 이름, url, 성격, 태생을 구조분해할당합니다.
   * imageInfo field의 innerHTML을 이하와 같이 설정합니다.
   * 이하 : "title"클래스의 div, img, "description"클래스의 div
   * 
   * imageInfo의 style.display를 "block"으로 설정합니다.
   * 
   * data field의 visible: false라면
   * imageInfo field의 style.display를 "none"으로 설정합니다.
   */
  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
