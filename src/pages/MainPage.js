import React from "react";
import SearchForm from "../components/forms/SearchForm";

export default function MainPage(props) {
  const locationsArray = [
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      destinationNumber: 86,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      destinationNumber: 86,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      destinationNumber: 86,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      destinationNumber: 86,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      destinationNumber: 86,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      destinationNumber: 86,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      destinationNumber: 86,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      destinationNumber: 86,
    },
  ];
  const locationsRatingArray = [
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      activitiesNumber: 86,
      rating: 3.5,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      activitiesNumber: 186,
      rating: 3.5,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      activitiesNumber: 86,
      rating: 3.5,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      activitiesNumber: 86,
      rating: 3.5,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      activitiesNumber: 86,
      rating: 3.5,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      activitiesNumber: 86,
      rating: 3.5,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      activitiesNumber: 86,
      rating: 3.5,
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/4f/95/caption.jpg?w=300&h=300&s=1",
      name: "Batu, East Java",
      activitiesNumber: 86,
      rating: 3.5,
    },
  ];

  // function generateCartClass(location) {
  //   return `w-full `;
  // }
  return (
    <>
      <div className="banner text-white p-16 bg-[url('https://images.hdqwalls.com/wallpapers/airplane-wings.jpg')] bg-no-repeat">
        <h1 className="font-extrabold text-8xl mb-6">
          Amazing Flight to Switzerland
        </h1>
        <h3 className="font-bold text-5xl">Find and book a great experience</h3>
      </div>
      <SearchForm />
      <div className="p-16 flex flex-col">
        <h2 className="text-gray-800 text-3xl font-semibold text-center mb-4">
          Search a best place in the world
        </h2>
        <p className="text-gray-400 font-xl text-center">
          Whether you're looking for places for a vacation. We are hear to Guide
          you <br /> about the details you need to check in and ease your trips
          in advance
        </p>
        <div className="p-16 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {locationsArray.map((element, index) => (
            <div
              key={index}
              className="sm:max-md:w-1/2 sm:max-md:mx-auto border border-gray-100 rounded-lg hover:shadow-md flex flex-col p-4 gap-3"
            >
              <img src={element.url} className="h-10 w-10 rounded-md" />
              <span className="text-gray-800 text-md font-bold">
                {element.name}
              </span>
              <span className="text-sm text-gray-400">
                {element.destinationNumber} Destinations
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-16 flex flex-col">
        <h4 className="text-gray-800 text-3xl font-semibold mb-4">
          Featured Destinations
        </h4>
        <p className="text-gray-400 font-xl">
          Popular destinations open to visitors from Indonesia
        </p>
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col" style={{ height: "400px" }}>
            <div
              className="w-full rounded-lg flex flex-col gap-2 p-4 justify-between h-1/2 my-2"
              style={{
                backgroundImage: `url(${locationsRatingArray[0].url})`,
              }}
            >
              <span className="text-red-600 text-md font-semibold bg-white rounded-xl p-1 w-fit">
                {locationsRatingArray[0].rating}
              </span>
              <div className="flex flex-col">
                <span className="text-lg text-white font-bold">
                  {locationsRatingArray[0].name}
                </span>
                <span className="text-md text-white">
                  {locationsRatingArray[0].activitiesNumber} Activities
                </span>
              </div>
            </div>
            <div className="flex">
              <div
                className="w-1/2 rounded-lg flex flex-col gap-2 p-4 justify-between mr-2 my-2"
                style={{
                  backgroundImage: `url(${locationsRatingArray[0].url})`,
                }}
              >
                <span className="text-red-600 text-md font-semibold bg-white rounded-xl p-1 w-fit">
                  {locationsRatingArray[0].rating}
                </span>
                <div className="flex flex-col">
                  <span className="text-lg text-white font-bold">
                    {locationsRatingArray[0].name}
                  </span>
                  <span className="text-md text-white">
                    {locationsRatingArray[0].activitiesNumber} Activities
                  </span>
                </div>
              </div>
              <div
                className="w-1/2 rounded-lg flex flex-col gap-2 p-4 justify-between ml-2 my-2"
                style={{
                  backgroundImage: `url(${locationsRatingArray[0].url})`,
                }}
              >
                <span className="text-red-600 text-md font-semibold bg-white rounded-xl p-1 w-fit">
                  {locationsRatingArray[0].rating}
                </span>
                <div className="flex flex-col">
                  <span className="text-lg text-white font-bold">
                    {locationsRatingArray[0].name}
                  </span>
                  <span className="text-md text-white">
                    {locationsRatingArray[0].activitiesNumber} Activities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-16">
        <h2 className="text-gray-800 text-3xl font-semibold text-center mb-4">
          Trending Cities
        </h2>
        <p className="text-gray-400 font-xl text-center">
          The most searched for cities in TripGuide
        </p>
      </div>
    </>
  );
}
