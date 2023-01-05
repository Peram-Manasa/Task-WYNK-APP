import React from 'react'
import { Slide } from "react-slideshow-image"
 import 'react-slideshow-image/dist/styles.css'
import { FiPlayCircle } from "react-icons/fi";
import { IoArrowRedoSharp } from "react-icons/io5"
import { BiDotsVerticalRounded  } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import './Songs.css'
const Songsone = () => {
    const proprietes = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
         arrows: true
    }
    return (
        <>
        <div className="total">
        <div> <div className='title'>Recently Played </div>
         <div className="a1"><a>More</a></div>
         <div className='main-container'>
             <Slide {...proprietes}>
                 <div className='slide-image'>
                    <IoArrowRedoSharp className="sound1"/>
                    <figure> <img className='img' src="https://static.toiimg.com/photo/msid-81648613/81648613.jpg" alt="first" title="rangde">
                        </img> 
                        <figcaption></figcaption>
                        </figure>
                     <figure>
                     < BsFillPlayFill className="sound"/><IoArrowRedoSharp className="sound1"/><BiDotsVerticalRounded className="dots"/>
                     <img src="https://a10.gaanacdn.com/gn_img/song/Bp1bAnK029/1bAJvzpJK0/size_m_1650283429.webp" alt="three" ></img>
                     <figcaption>Acharya</figcaption>
                     </figure>
                     <figure>  < BsFillPlayFill className="sound"/><IoArrowRedoSharp className="sound1"/><BiDotsVerticalRounded className="dots"/>
                      <img src="https://timesofindia.indiatimes.com/photo/77457365.cms" alt="four"></img>
                      <figcaption>Srkaruvari Pata</figcaption>
                      </figure>
                      <figure>  < BsFillPlayFill className="sound"/><IoArrowRedoSharp className="sound1"/><BiDotsVerticalRounded className="dots"/>
                     <img src="https://i.ytimg.com/vi/NwMaEv8qpOk/maxresdefault.jpg" alt="five"></img>
                        <figcaption>Kalisundamra</figcaption>
                     </figure>
                     <figure>  <BsFillPlayFill className="sound"/><IoArrowRedoSharp className="sound1"/><BiDotsVerticalRounded className="dots"/>
                     <img src="https://c.saavncdn.com/826/99-Songs-Telugu-Original-Motion-Picture-Soundtrack--Telugu-2021-20210325120933-500x500.jpg" alt="six"></img>
                     <figcaption>Jayam</figcaption>
                     </figure>
                     <figure>  <BsFillPlayFill className="sound"/><IoArrowRedoSharp className="sound1"/><BiDotsVerticalRounded className="dots"/>
                     <img src="https://naasongs.co/wp-content/uploads/2020/01/Bheeshma-Telugu-2020-FM.jpg" alt="seven"></img>
                     <figcaption>Love 2day</figcaption>
                     </figure>
                     <figure>  <BsFillPlayFill className="sound"/><IoArrowRedoSharp className="sound1"/><BiDotsVerticalRounded className="dots"/>
                     <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/81/81/81-v" alt="eight"></img>
                     <figcaption>Mukunda</figcaption>
                     </figure>
                     <figure>  <BsFillPlayFill className="sound"/><IoArrowRedoSharp className="sound1"/><BiDotsVerticalRounded className="dots"/>
                     <img src="https://sensongsmp3.tv/wp-content/uploads/2016/07/jayam-mp3-songs-telugu-sensongsmp3.jpg" alt="nine"></img>
                     <figcaption>Athadu</figcaption>
                     </figure>
                     <figure>  <BsFillPlayFill className="sound"/><IoArrowRedoSharp className="sound1"/><BiDotsVerticalRounded className="dots"/>
                     <img src="https://sensongsmp3.tv/wp-content/uploads/2019/03/majili-2019-telugu-movie-songs-naga-chaitanya-samantha.jpg" alt="ten"></img>
                     <figcaption>Rakshashudu</figcaption>
                     </figure>
                 </div>
             </Slide>
             </div>
             </div>
             </div>
     </>
    )
}
export default Songsone;