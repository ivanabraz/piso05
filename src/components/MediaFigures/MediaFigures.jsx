import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { v4 as uuidv4 } from 'uuid';

const MediaFigures = () => {
    const figures = {
        social: [
            { name: 'Followers', icon: faInstagram, href: 'instagram.com/piso.05', number: '16,8k', bg: 'bg-[#f5f360]' },
            { name: 'Views', icon: faInstagram, href: 'instagram.com/piso.05', number: '195k', bg: 'bg-[#a89fca]' },
            { name: 'Followers', icon: faTiktok, href: 'tiktok.com/@piso.05', number: '11,5k', bg: 'bg-[#fe6218]' },
            { name: 'Likes', icon: faTiktok, href: 'tiktok.com/@piso.05', number: '306K', bg: 'bg-[#dbfebc]' },
        ]
    };

    return (
        <>
        <div className="relative w-full h-full flex flex-col justify-between text-neutral-100 condensed text-black p-0 md:p-5">
            <div className="grid grid-cols-2 md:grid-cols-4 my-24 gap-4 md:gap-5 m-auto">
                {figures.social.map((media) => (
                    <a key={uuidv4()} className={`${media.bg} p-5 rounded-lg`}
                        href={"https://" + media.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <div className="flex flex-row justify-between" >
                            <p className="text-xs uppercase border border-black py-1 px-2 rounded-full w-fit">{media.name}</p>
                            <FontAwesomeIcon icon={media.icon} size="md" />
                        </div>
                        <p className="text-5xl md:text-7xl my-5 text-center">+{media.number}</p>
                    </a>
                ))}
            </div>
        </div>
        </>
    );
}

export default MediaFigures;
