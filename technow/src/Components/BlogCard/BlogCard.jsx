
import { useState } from "react"
import styles from "./BlogCard.module.css"
import {FaTrashCan} from 'react-icons/fa6'
import { FiEdit } from "react-icons/fi"
import { Link } from 'react-router-dom'
import axios from "axios"

 const BlogCard = ({title  , author , image , createdAt , reversed , id})=>{
    const reverse = reversed === true ? styles.blogReverse : styles.blogNormal ;
    const reversedImg = reversed === true ? styles.ReversedImg : styles.normalImg ;

    const time = new Date(createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", timeZone: "GMT"}) 


    const [errorDelete , setErrorDelete] = useState(false)
    const handleDelete = (e) => {
        e.preventDefault() ;
        axios.delete('http://localhost:5000/delete/blogs' , {
            data : {id : id}
        })
        .then((response) => {
            if(response.ok){
                setErrorDelete(false)
            }
        })
        .catch((error) => {
            setErrorDelete(true)
            console.log(error)
        })
    }

    const errorStyle = {
        fontSize: 14 , 
        color : "red", 
        margin : 0 ,
        padding : 0
    }

    return(   
        
            <div className={`${styles.blogcontent} ${reverse}`}>
                <div className={`${styles.mainimage} ${reversedImg}`}>
                <Link to={`/blogDetails/${id}`} className={styles.link2}>
                    <img src={`http://localhost:5000/${image}`} className={styles.image} alt="Image for the blog"></img>
                </Link>
                </div>
                <div className={styles.maincontent}>
                    <p className={styles.pclass}>{author} / {time}</p>
                    <Link to={`/blogDetails/${id}`} className={styles.link}>
                    <h2 className={styles.h2}>{title}</h2>
                    </Link>
                     {/* <div className={styles.icons}>
                        {errorDelete && <p style={errorStyle}>Error Deleting Blog</p>}
                        <span className={styles.span}>
                        <button onClick={(e) => handleDelete(e)} className={styles.btnDelete}><FaTrashCan className={styles.Icon}/></button>
                        <Link to={`/updateBlog/${id}`} className={styles.link}><FiEdit className={styles.Icon} /></Link>
                        </span>

                        </div> */}
                </div>
            </div>
    );
}
export default BlogCard