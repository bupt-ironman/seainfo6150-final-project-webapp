import React from 'react';
import DogItem from "../DogItem/DogItem";
import styles from "../DogList/DogList.module.css";
const dogs = [{
    key:1,
    name:"PP",
    age:"2 months",
    img:"http://sdoq.jdsybp.com/uploads/allimg/190821/1-1ZR1150152341.jpg"
},
    {
        key:2,
        name:"apple",
        age:"4 months",
        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2972743467,129165969&fm=26&gp=0.jpg"
    },
    {
        key:3,
        name:"orange",
        age:"6 months",
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607505648744&di=809864b8595453f861762cd0dad1d2cd&imgtype=0&src=http%3A%2F%2Fimg2.tbcdn.cn%2Ftfscom%2Fi3%2F1945738760%2FTB2vhf1eHJmpuFjSZFBXXXaZXXa_%2521%25211945738760.jpg"
    }
]




const DogList = () => {
    return (<div className={styles.List}>
        {
            dogs.map(dog =>{
                return (<DogItem dog={dog} key={dog.key}/>) } )
        }
    </div>);
}


export default DogList;