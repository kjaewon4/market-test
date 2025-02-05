import React, { useState } from 'react'
import './Main.css'
import Nav from './Nav'
import Content from './Content'
import Like from './Like'
import { FaCarrot } from "react-icons/fa";
import { IoEllipseSharp } from 'react-icons/io5';
import logo from './logo.png';
import Popup from './Popup'


export default function Main() {
  // id, img url, 상품명, 가격, 상품설명, 찜여부
  const [items, setItems] = useState([
    { id: 1, img: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/da570debbdddb304fa54cdee563cb06d.jpg?imageView2/2/w/800/q/70/format/webp", title: "2.4G 원격 조종 하이테크 11 채널 RC 굴삭기 합금 플라스틱 엔지니어링 차량 전자 장난감 6-10세 어린이 할로윈 크리스마스 선물", price: 34961, body: '어쩌구 저쩌구', like: false },
    { id: 2, img: "https://img.kwcdn.com/product/open/efe92f973b264d7a9f15009491d244cd-goods.jpeg?imageView2/2/w/800/q/70/format/webp", title: "1/3개 업그레이드된 자이로 원격 제어 1/43 드리프트 레이싱 카 RTR 4WD 4륜 구동 고속 라디오 컨트롤 모델 2.4g 미니 크리스마스 및 새해 선물", price: 49934, body: '상세 설명임', like: false },
    { id: 3, img: "https://img.kwcdn.com/product/fancy/0898bc4e-7100-46bd-859f-42984261c236.jpg?imageView2/2/w/800/q/70/format/webp", title: "1008pcs 건설 차량 모델, 시티 시리즈 크레인 빌딩 블록, ABS 플라스틱 건설 트럭 벽돌, 생일/할로윈/크리스마스 선물에 완벽, 검은색 & 노란색, 차량 테마", price: 19457, body: '상세 설명임', like: false },
  ])
  const [newItem, setNewItem] = useState({
    id: 0,
    img: "",
    title: "",
    price: "",
    body: "",
    like: false
  });


  // LIKE(찜목록), CREATE(상품 등록), LIST(전체 상품), COMMU(커뮤니티)...
  const [mode, setMode] = useState('LIST');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    console.log("openPopup 실행 (CREATE 모드)");
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    console.log("closePopup 실행 (CREATE 모드)"); // 디버깅용 로그 추가
    setIsPopupOpen(false);
    setMode('LIST'); // 닫을 때 LIST 모드로 변경
  };

  const handleInputChange = (name, value) => {
    setNewItem((prev) => ({
      ...prev,
      id: items.length + 1,
      img: "./image.png",
      [name]: value
    }));
  };


  console.log(mode);
  let content = null;
  if (mode === 'LIKE') {
    // TODO: like가 true인 것만 렌더링
    content = <Like items={items} setItems={setItems}></Like>
  } else if (mode === 'CREATE') {
    // TODO: 상품 등록
    content = (
      <Popup 
        mode="CREATE" 
        data={newItem} 
        onInputChange={handleInputChange} 
        closePopup={closePopup}  // ✅ closePopup을 넘겨줌
      />
    );

   
  }
  else if (mode === 'ITEM') {
    content = (
      <Popup 
        mode="ITEM" 
        data={newItem} 
        closePopup={closePopup} 
      />
    );

  }
  else if (mode === 'COMMU') {

  } else if (mode === 'LIST') {
    content = <Content items={items} setItems={setItems} mpde={mode} setMode={setMode}></Content>
  }

  return (
    <div className='container'>
      <div className='Main'>
        <div className='titleBox'>
          <h2 className='title'><img src={logo} alt="로고" />TEMTEMU</h2>
        </div>

        <Nav mode={mode} setMode={setMode}></Nav>
        {content}

      </div>
    </div>
  )
}
