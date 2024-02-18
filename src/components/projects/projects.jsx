import React from "react";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import huay from "../../projects/huay.png";
import nai from "../../projects/nai.png";
import priorite from "../../projects/priorite.png";
import facces from "../../projects/facces.png";

const Projects = () => {
    const slides = [nai, priorite, huay, facces];
    const captions = [
        "Nai - Administration System",
        "Priorite Odonto - Web Page",
        "Huay - Administration System",
        "Facces Odonto - Web Page"
    ];

    return (
        <div className="projects">
            <h1 className="aboutTitle tracking-in-expand-fwd-top">Projects</h1>
            <div>
                <Swiper
                    pagination={{ clickable: true }}
                    slidesPerView={1} // Defina o número de slides visíveis
                    spaceBetween={30}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-container">
                                <img className="projectsImgs" src={slide} alt={`Slide ${index}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>
                <h4>
                    projects carried out as a team. all rights reserved.
                </h4>
                <div className="divMg">
                    <h6 className="mgCode">&lt;<span className="mg">mg</span>/&gt;code ©️</h6>
                </div>
            </div>
        </div>
    );
}

export default Projects;
