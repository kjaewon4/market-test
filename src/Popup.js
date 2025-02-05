import React from 'react';
import { BiX } from "react-icons/bi";


const Styles = {
    wrapper: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000'
    },
    popupContent: {
        backgroundColor: 'white',
        width: '800px',
        maxHeight: '600px',
        borderRadius: '8px',
        padding: '20px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',  // overflow가 발생하면 스크롤을 활성화

    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '20px',
        cursor: 'pointer',
        border: 'none',
        background: 'none'
    },
    item: {
        textAlign: 'center',  // 텍스트 중앙 정렬
        display: 'block'
    },
    inputBox: {
        padding: '10px',
        fontSize: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        marginBottom: '30px'
    },
    textAreaBox: {
        padding: '10px',
        fontSize: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        width: '100%',
        minHeight: '150px',
        flexGrow: 1,  // flexbox에서 전체 공간 차지

        boxSizing: 'border-box',
        resize: 'vertical',  // 세로로 크기 조절 가능

    }

}

const Popup = ({ mode, data, onInputChange, closePopup }) => {
    if (!mode) return null;

    return (
        <div style={Styles.wrapper} onClick={closePopup}>
            <div style={Styles.popupContent} onClick={(e) => e.stopPropagation()}>
                <button style={Styles.closeButton} onClick={() => {
                    console.log("X 버튼 클릭됨");
                    if (closePopup) closePopup(); // ✅ closePopup 함수가 있을 때만 실행
                }}>
                    <BiX />
                </button>

                {mode === "ITEM" && (
                    <div className='Item' style={Styles.item}>
                        <h3>상품 상세 보기</h3>
                        <img src={data.img} alt="상품 이미지" style={{ width: '200px', height: '200px' }} />
                        <h4>{data.title}</h4>
                        <h5 className='item-price' style={Styles.item}>
                            가격: {data.price}원
                        </h5>
                        <hr></hr>
                        <h4 style={{ textAlign: 'start' }}>상품 세부 정보</h4>
                        <p style={{ textAlign: 'start' }}>{data.body}</p>
                    </div>
                )}

                {mode === "CREATE" && (
                    <div>
                        <h3>상품 등록</h3>
                        <div>
                            <p>이미지</p>
                            <img src={data.img || "./image.png"} alt="상품 이미지" style={{ width: '100px', height: '100px' }} />
                        </div>
                        <div>
                            <p>상품명</p>
                            <input type='text' name="title" value={data.title} style={Styles.inputBox} onChange={(e) => onInputChange(e.target.name, e.target.value)} />
                            <p>가격</p>
                            <input type='text' name="price" value={data.price} style={Styles.inputBox}  onChange={(e) => onInputChange(e.target.name, e.target.value)} />
                            <p>상세설명</p>
                            <textarea type='text' name="body" value={data.body} style={Styles.textAreaBox}  onChange={(e) => onInputChange(e.target.name, e.target.value)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Popup;
