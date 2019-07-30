
import React from 'react'
import './Body.css'
import { Gallery , GalleryImage} from 'react-gesture-gallery'
import {images} from './images';
const initialIndex=0;
 
function Body (props){
    const [index , setIndex] = React.useState(initialIndex)
    React.useEffect(() =>{
        const interval = setInterval(() =>{
       if(index === images.length -1 ){
           setIndex(initialIndex)
       } else{
           setIndex(index + 1)
       }
       },10000)
        return() => clearInterval(interval)
    },[index])
    return(
        <Gallery
        index={index}
        onRequestChange={ i =>{
            setIndex(i);
        }}
        >

            {images.map(image =>(
                <GalleryImage objectFit="contain" src={image}/>
            ))}
        </Gallery>
    )
}

export default Body;