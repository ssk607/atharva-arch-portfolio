"use client";

import Image from "next/image";

export default function ProjectImage({
    src,
    alt,
    size = "small",
    priority = false,
    onClick,
}) {
    return (
        <div
            className={`project-image-card ${size}`}
            onClick={onClick}
        >
            <Image
                src={src}
                alt={alt}
                width={1800}
                height={1200}
                priority={priority}
                className="project-image"
            />
        </div>
    );
}