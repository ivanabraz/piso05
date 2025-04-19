import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram, faYoutube, faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';
import MediaFigures from "../components/MediaFigures/MediaFigures";

const Home = () => {
    const currentYear = new Date().getFullYear();
    const videoHorizontal = `${process.env.PUBLIC_URL}/media/videos/video-horizontal-3.mp4`;
    const videoVertical = `${process.env.PUBLIC_URL}/media/videos/video-vertical.mp4`;

    const [videoSource, setVideoSource] = useState(
        window.innerWidth <= 768 ? videoVertical : videoHorizontal
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const updateVideoSource = (e) => {
            setVideoSource(e.matches ? videoVertical : videoHorizontal);
        };

        updateVideoSource(mediaQuery);
        mediaQuery.addEventListener("change", updateVideoSource);

        return () => mediaQuery.removeEventListener("change", updateVideoSource);
    }, [videoHorizontal, videoVertical]);

    const navigation = {
        social: [
            { name: 'Instagram', icon: faInstagram, href: 'instagram.com/piso.05' },
            { name: 'TikTok', icon: faTiktok, href: 'tiktok.com/@piso.05' },
            { name: 'Youtube', icon: faYoutube, href: 'youtube.com/channel/UCeSsJSArms1joQmILAtemkg' },
            { name: 'Amazon', icon: faAmazon, href: 'amazon.com/shop/piso.05' },
            { name: 'Cafecito', icon: faCoffee, href: 'cafecito.app/piso05' },
        ]
    };

    return (
        <>
        <div className="relative w-full min-h-[100dvh] flex flex-col justify-between text-white p-5 md:p-10 condensed">
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoSource} type="video/mp4" />
            </video>

            <div className="flex flex-row justify-between text-xl z-10">
                <Link to='/' className="uppercase text-2xl">Piso 05</Link>
                <div className="grid grid-cols-5 gap-5">
                    {navigation.social.map((pages) => (
                        <a key={uuidv4()}
                            href={"https://" + pages.href}
                            className="hover:text-gray-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={pages.icon} size="sm" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="text-base z-10 flex flex-row justify-between align-baseline mt-auto ">
                <div>
                    <p>Departamento de 60m² en Buenos Aires</p>
                    <p>Diseño, decoración, objetos, segunda mano</p>
                </div>
                <div className="text-right mt-auto">© {currentYear}</div>
            </div>
        </div>
        </>
    );
}

export default Home;
