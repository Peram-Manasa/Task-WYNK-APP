import React from 'react'
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
import './Songs.css'
import { FiPlayCircle } from "react-icons/fi";
const Songsone = () => {
    const proprietes = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
         arrows: true
    }
    return (
        // <>
        //     <div className='title'>New Releases</div>
        //     <div className="a1"><a>More</a></div>
        //     <div className='main-container'>
        //         <Slide {...proprietes}>
        //             <div className='slide-image'>
        //             {/* <a className="a1">More</a> */}
        //                 <img src="https://images.hungama.com/c/1/539/e06/47314724/47314724_300x300.jpg" alt="first"></img>
        //                 <img src="https://a10.gaanacdn.com/gn_img/albums/ZaP37RKDy7/P37Oa4M83D/size_m.jpg" alt="second"></img>
        //                 <img src="https://www.koimoi.com/wp-content/new-galleries/2021/12/prabhas-pooja-hegde-redefine-love-in-radhe-shyams-latest-song-soch-liya-out-now-001.jpg" alt="three"></img>
        //                  <img src="https://qph.cf2.quoracdn.net/main-qimg-e37cf50a4f433fcf3b12f522aff56e23.webp" alt="four"></img>
        //                 <img src="https://i.ytimg.com/vi/NwMaEv8qpOk/maxresdefault.jpg" alt="five"></img>
        //                 <img src="https://c.saavncdn.com/826/99-Songs-Telugu-Original-Motion-Picture-Soundtrack--Telugu-2021-20210325120933-500x500.jpg" alt="six"></img>
        //                 <img src="https://naasongs.co/wp-content/uploads/2020/01/Bheeshma-Telugu-2020-FM.jpg" alt="seven"></img>
        //                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/81/81/81-v" alt="eight"></img>
        //                 <img src="https://sensongsmp3.tv/wp-content/uploads/2016/07/jayam-mp3-songs-telugu-sensongsmp3.jpg" alt="nine"></img>
        //                 <img src="https://sensongsmp3.tv/wp-content/uploads/2019/03/majili-2019-telugu-movie-songs-naga-chaitanya-samantha.jpg" alt="ten"></img>
        //             </div>
        //         </Slide>
        //         </div>
        // </>
        <>
        <div className='title'>Recently Played</div> 
        <div className="a1"><a>More</a></div>
        <div className='main-container'>
            <Slide {...proprietes}>
                <div className='slide-image'>
                < FiPlayCircle className="sound"/>
                   
                   <figure> <img className='img' src="https://static.toiimg.com/photo/msid-81648613/81648613.jpg" alt="first" title="rangde">
                       </img> 
                       <figcaption>Rangdhe</figcaption>
                       </figure>
                    < FiPlayCircle className="sound"/>
                    <figure> < FiPlayCircle className="sound"/><img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8edf620545fb1588a685eaf9f3bdd1759f407e119cea48c58db7a721609f972e._SX1080_.jpg" alt="second"></img>
                    
                    <figcaption>Macharla</figcaption>
                    </figure>
                    <figure>
                    < FiPlayCircle className="sound"/>
                    <img src="https://a10.gaanacdn.com/gn_img/song/Bp1bAnK029/1bAJvzpJK0/size_m_1650283429.webp" alt="three" ></img>
                    <figcaption>Acharya</figcaption>
                    </figure>
                    <figure>  < FiPlayCircle className="sound"/>
                     <img src="https://timesofindia.indiatimes.com/photo/77457365.cms" alt="four"></img>
                     <figcaption>Srkaruvari Pata</figcaption>
                     </figure>
                     <figure>  < FiPlayCircle className="sound"/>
                    <img src="https://i.ytimg.com/vi/NwMaEv8qpOk/maxresdefault.jpg" alt="five"></img>
                       <figcaption>Kalisundamra</figcaption>
                    </figure>
                    <figure>  < FiPlayCircle className="sound"/>
                    <img src="https://c.saavncdn.com/826/99-Songs-Telugu-Original-Motion-Picture-Soundtrack--Telugu-2021-20210325120933-500x500.jpg" alt="six"></img>
                    <figcaption>Jayam</figcaption>
                    </figure>
                    <figure>  < FiPlayCircle className="sound"/>
                    <img src="https://naasongs.co/wp-content/uploads/2020/01/Bheeshma-Telugu-2020-FM.jpg" alt="seven"></img>
                    <figcaption>Love 2day</figcaption>
                    </figure>
                    <figure>  < FiPlayCircle className="sound"/>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/81/81/81-v" alt="eight"></img>
                    <figcaption>Mukunda</figcaption>
                    </figure>
                    <figure>  < FiPlayCircle className="sound"/>
                    <img src="https://sensongsmp3.tv/wp-content/uploads/2016/07/jayam-mp3-songs-telugu-sensongsmp3.jpg" alt="nine"></img>
                    <figcaption>Athadu</figcaption>
                    </figure>
                    <figure>  < FiPlayCircle className="sound"/>
                    <img src="https://sensongsmp3.tv/wp-content/uploads/2019/03/majili-2019-telugu-movie-songs-naga-chaitanya-samantha.jpg" alt="ten"></img>
                    <figcaption>Rakshashudu</figcaption>
                    </figure>
                </div>
            </Slide>
            </div>
    </>
    )
}
export default Songsone;