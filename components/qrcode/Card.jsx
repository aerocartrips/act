import React from "react";

const cardData = [
    {
        id: 1,
        title: "Fly from New York to Tokyo for a Cultural Escape",
        image: "hero-image.jpg",
    },
    {
        id: 2,
        title: "Book a Flight from London to Dubai for a Luxury Getaway",
        image: "https://cdn.pixabay.com/photo/2022/08/26/07/57/tavern-7411977_640.jpg",
    },
    {
        id: 3,
        title: "Travel from Paris to Bangkok for a Taste of Thailand",
        image: "https://cdn.pixabay.com/photo/2023/09/25/20/38/lisbon-8275994_640.jpg",
    },
    {
        id: 4,
        title: "Fly from Sydney to Los Angeles for a Hollywood Adventure",
        image: "https://cdn.pixabay.com/photo/2020/04/22/13/08/tuscany-5078088_640.jpg",
    },
    {
        id: 5,
        title: "Escape from Toronto to Santorini’s Sunny Shores",
        image: "https://cdn.pixabay.com/photo/2019/06/09/21/54/santorini-4263036_640.jpg",
    },
    {
        id: 6,
        title: "Take Off from Berlin to Venice for a Romantic Journey",
        image: "https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_640.jpg",
    },
    {
        id: 7,
        title: "Fly from Cape Town to Rio for a Beachside Carnival",
        image: "https://cdn.pixabay.com/photo/2023/01/15/22/48/river-7721287_640.jpg",
    },
    {
        id: 8,
        title: "Book a Flight from Delhi to Zurich for Alpine Adventures",
        image: "https://cdn.pixabay.com/photo/2020/04/16/10/16/mountain-5050026_640.jpg",
    },
    // Add more items as needed
];


const Card = () => {
    return (
        <div className="my-8 py-16 bg-[#F0F2F3]">
            <h2 className="text-4xl ml-20">Your guide to Fly</h2>
            <div className="flex flex-wrap justify-center mt-8 items-stretch gap-[30px]">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="relative overflow-hidden rounded flex-shrink-0 flex-grow-0 mb-[30px] group"
                    >
                        <div className="relative h-[340px] w-[275px] p-2">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                            <h4 className="relative z-10 mt-[210px] text-white text-[24px] font-bold">
                                {card.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
            <h5 className="ml-20 text-[#CE0C88]">Your guide to the Hawaiian Islands</h5>
        </div>
    );
};

export default Card;
