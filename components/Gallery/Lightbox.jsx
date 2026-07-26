"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Lightbox({
    images,
    current,
    onClose,
    onNext,
    onPrevious,
}) {

    useEffect(() => {

        const handleKeyDown = (e) => {

            if (e.key === "Escape") onClose();

            if (e.key === "ArrowRight") onNext();

            if (e.key === "ArrowLeft") onPrevious();

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);

    }, [onClose, onNext, onPrevious]);

    return (

        <div
            className="lightbox-overlay"
            onClick={onClose}
        >

            <button
                className="lightbox-close"
                onClick={onClose}
            >
                <FiX size={34} />
            </button>

            <button
                className="lightbox-arrow left"
                onClick={(e) => {
                    e.stopPropagation();
                    onPrevious();
                }}
            >
                <FiChevronLeft size={38} />
            </button>

            <div
                className="lightbox-image-wrapper"
                onClick={(e) => e.stopPropagation()}
            >

                <Image
                    src={images[current]}
                    alt=""
                    fill
                    priority
                    className="lightbox-image"
                />

            </div>

            <button
                className="lightbox-arrow right"
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
            >
                <FiChevronRight size={38} />
            </button>

            <div className="lightbox-counter">
                {current + 1} / {images.length}
            </div>

        </div>

    );

}