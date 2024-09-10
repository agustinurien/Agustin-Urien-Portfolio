
import "./carrousel.css"
import { useEffect, useRef, useState } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GoDot, GoDotFill } from "react-icons/go";

const Carrousel = () => {

    const experience = [
        {
            title: "Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum consequuntur cumque fuga, error fugit, totam porro laudantium perferendis dolorem tempore, distinctio sunt ipsum voluptatem qui? Itaque necessitatibus perspiciatis eum?",
            date: "2023"
        },
        {
            title: "Title1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum consequuntur cumque fuga, error fugit, totam porro laudantium perferendis dolorem tempore, distinctio sunt ipsum voluptatem qui? Itaque necessitatibus perspiciatis eum?",
            date: "2023"
        },
        {
            title: "Title2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum consequuntur cumque fuga, error fugit, totam porro laudantium perferendis dolorem tempore, distinctio sunt ipsum voluptatem qui? Itaque necessitatibus perspiciatis eum?",
            date: "2023"
        },
        {
            title: "Title3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum consequuntur cumque fuga, error fugit, totam porro laudantium perferendis dolorem tempore, distinctio sunt ipsum voluptatem qui? Itaque necessitatibus perspiciatis eum?",
            date: "2024"
        },
        {
            title: "Title4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum consequuntur cumque fuga, error fugit, totam porro laudantium perferendis dolorem tempore, distinctio sunt ipsum voluptatem qui? Itaque necessitatibus perspiciatis eum?",
            date: "2024"
        }

    ]

    const [slide, setSlide] = useState(0);
    const [boxWidth, setBoxWidth] = useState(0);

    const containerRef = useRef(null);


    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = (containerRef.current.clientWidth);

            setBoxWidth((containerWidth / 4));
        }
    }, []);

    const handleClick = (value) => {
        setSlide(value);
    };
    return (
        <>
            <button className="buttonCarrousel" style={{ marginRight: 7 }} disabled={slide === 0} onClick={() => handleClick(slide + 1)}><RiArrowLeftSLine /></button>
            <div className="carrouselContainer" ref={containerRef} >
                {
                    experience.map((item, index) => (
                        <div key={index} className="box" style={{ transform: `translateX(${slide * boxWidth}px)`, minWidth: `${boxWidth - 32}px`, transition: 'transform 0.3s ease' }}>
                            <div className="card">
                                <div className="text">
                                    <h3>{item.title}</h3>
                                    <p >{item.description}</p>
                                </div>
                                <div className="date">
                                    <h4>{item.date}</h4>
                                    <GoDot className="dot" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="buttonCarrousel" style={{ marginLeft: 7 }} disabled={slide === -1} onClick={() => handleClick(slide - 1)}><RiArrowRightSLine className="arrow" /></button>
        </>
    )
}

export default Carrousel
