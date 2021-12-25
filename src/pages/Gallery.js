import React, {useState, useEffect} from 'react';
import data from './Gallery-data';
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import './Gallery.css';
import Modal from "../Component/Modal";

function Gallery() {
    const [gallery, setGallery] = useState(data);
    const [index, setIndex] = useState(0);

    function checkIndex () {
        if (index > gallery.length-1) {
            setIndex(0);
        }
        if (index < 0) {
            setIndex(gallery.length-1);
        }
    }
    useEffect(()=>{
        checkIndex()
    }, [index, gallery])

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index + 1);
        }, 2500);
        return()=>{
            clearInterval(slider);
        };
    }, [index])
    return (
        <>
            <Navbar/>
            <section className='gallery-section'>
                <div className='gallery-title'>
                    <h2>Gallery</h2>
                </div>
                <div className='gallery-content'>
                    {gallery.map((item, galleryIndex)=>{
                        const {id, title, img} = item;
                        let position = 'next-slide';
                        if (galleryIndex === index) {
                            position = 'active-slide';
                        }
                        if (
                            galleryIndex === index - 1 ||
                        (index === 0 && galleryIndex === gallery.length-1)/*this is when
                        at first, index = 0; we still want A pic on the left, therefore
                         we make the last element in the gallery array already the last-slide*/
                        )
                        {
                            position = 'last-slide'
                        }

                        return(
                            <article key={id} className={`gallery-slide ${position}`}>
                                <img src={img} alt={title} className='gallery-img'/>
                                <p className='gallery-title'>{title}</p>
                            </article>
                        )
                    })}
                    <button
                        className="gallery-prev-btn"
                        onClick={()=> setIndex(index-1)}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                        className="gallery-next-btn"
                        onClick={()=> setIndex(index+1)}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </section>
            <Modal/>
            <Footer/>
        </>

    )
}
export default Gallery;