"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

import "./gallery.css";

import ProjectImage from "./ProjectImage";

export default function MasonryGallery({ images = [] }) {

    const [selectedImage, setSelectedImage] = useState(null);

    if (!images.length) {
        return (
            <p className="gallery-empty">
                No images available.
            </p>
        );
    }

    return (

        <section className="masonry-gallery">

            {images.map((image, index) => (

                <ProjectImage
                    key={index}
                    src={image}
                    alt={`Project ${index + 1}`}
                    priority={index === 0}
                    size={index === 0 || index % 4 === 0 ? "hero" : "half"}
                    onClick={() => setSelectedImage(index)}
                />

            ))}

            {
                selectedImage !== null && (

                    <Lightbox

                        images={images}

                        current={selectedImage}

                        onClose={() => setSelectedImage(null)}

                        onNext={() => setSelectedImage(

                            (selectedImage + 1) % images.length

                        )}

                        onPrevious={() => setSelectedImage(

                            (selectedImage - 1 + images.length) % images.length

                        )}

                    />

                )
            }

        </section>

    );

}