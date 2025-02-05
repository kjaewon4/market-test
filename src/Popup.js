import React from 'react';

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
        width: '1000px',
        height: '800px',
        borderRadius: '8px',
        padding: '20px',
        position: 'relative'
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '20px',
        cursor: 'pointer',
        border: 'none',
        background: 'none'
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
                    ×
                </button>

                {mode === "ITEM" && (
                    <div>
                        <h3>상품 상세 보기</h3>
                        <p>{data.title}</p>
                        <p>{data.body}</p>
                        <img src={data.img} alt="상품 이미지" style={{ width: '200px', height: '200px' }} />
                    </div>
                )}

                {mode === "CREATE" && (
                    <div>
                        <h3>상품 등록</h3>
                        <div>
                            <h4>이미지</h4>
                            <img src={data.img || "./image.png"} alt="상품 이미지" style={{ width: '100px', height: '100px' }} />
                        </div>
                        <div>
                            <h4>상품명</h4>
                            <input type='text' name="title" value={data.title} onChange={(e) => onInputChange(e.target.name, e.target.value)} />
                            <h4>가격</h4>
                            <input type='text' name="price" value={data.price} onChange={(e) => onInputChange(e.target.name, e.target.value)} />
                            <h4>상세설명</h4>
                            <input type='text' name="body" value={data.body} onChange={(e) => onInputChange(e.target.name, e.target.value)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Popup;
