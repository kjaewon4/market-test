import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";


export default function Like({items , setItems}) {
    const toggleLike = (id) =>{
        setItems((prevItem) => 
            prevItem.map((item) => 
                item.id === id ? {...item, like: !item.like} : item));
    };

    const list = items
    .filter((item) => item.like)
    .map((item) => (
        <div className='contentBox'>
            <img src={item.img} alt={item.title}></img>
            <h3>{item.title}</h3>
              <span onClick={() => toggleLike(item.id)}>{item.like ? <FaStar /> : <CiStar />}</span>
            <p>{item.price}원</p>
        </div>
    ))
    return (
        <div className='Content'>
            {list}
        </div>
    )
}
