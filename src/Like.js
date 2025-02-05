import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";


export default function Like({ items, setItems }) {
    const toggleLike = (id) => {
        setItems((prevItem) =>
            prevItem.map((item) =>
                item.id === id ? { ...item, like: !item.like } : item));
    };

    const list = items
        .filter((item) => item.like)
        .map((item) => (
            <div className='contentBox'>
                <img src={item.img} alt={item.title}></img>
                <h3 className='item-title' title={item.title}>{item.title}
                </h3>
                <h5 className='item-price'>
                    {item.price}원
                    <span onClick={() => toggleLike(item.id)}>{item.like ? <FaStar /> : <CiStar />}</span>
                </h5>
            </div>
        ))
    return (
        <div className='Content'>
            {list}
        </div>
    )
}
