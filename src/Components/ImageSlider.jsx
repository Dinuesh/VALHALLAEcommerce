import React, { useState, useRef, useEffect } from "react";

const images = [
    "/images/s4.jpeg",
    "/images/s2.jpeg",
    "/images/s3.jpeg",
    "/images/s1.jpeg",
    "/images/s5.jpeg",
];

const extendedImages = [
    images[images.length - 1],
    ...images,
    images[0],
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);

    const slideWidthPercent = 100 / extendedImages.length;

    const goBefore = () => {
        if (isTransitioning) {
            setCurrentIndex((prev) => prev - 1);
        }
    };


    const goAfter = () => {
        if (isTransitioning) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(images.length);
        }
        else if (currentIndex === extendedImages.length - 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        }
    };

    useEffect(() => {
        if (!isTransitioning) {
            const timeout = setTimeout(() => setIsTransitioning(true), 20);
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    return (
        <div
            style={{
                position: "relative",
                width: "400px",
                overflow: "hidden",
                margin: "40px auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                userSelect: "none",
            }}
        >
            <div
                ref={sliderRef}
                style={{
                    display: "flex",
                    width: `${extendedImages.length * 100}%`,
                    transform: `translateX(-${slideWidthPercent * currentIndex}%)`,
                    transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {extendedImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        style={{
                            width: `${100 / extendedImages.length}%`,
                            height: "250px",
                            objectFit: "cover",
                            flexShrink: 0,
                            userSelect: "none",
                        }}
                        draggable={false}
                    />
                ))}
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    gap: "20px",
                    backgroundColor: "rgba(0,0,0,0.25)",
                    padding: "6px 12px",
                    borderRadius: "40px",
                    userSelect: "none",
                    zIndex: 10,
                }}
            >
                <button
                    onClick={goBefore}
                    aria-label="Previous Image"
                    style={{
                        fontSize: "1.2rem",
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        border: "none",
                        borderRadius: "50%",
                        padding: "5px 8px",
                        cursor: "pointer",
                        userSelect: "none",
                        transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)")
                    }
                >
                    &#8592;
                </button>

                <button
                    onClick={goAfter}
                    aria-label="Next Image"
                    style={{
                        fontSize: "1.2rem",
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        border: "none",
                        borderRadius: "50%",
                        padding: "5px 8px",
                        cursor: "pointer",
                        userSelect: "none",
                        transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)")
                    }
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
