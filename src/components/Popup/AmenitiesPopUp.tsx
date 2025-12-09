"use client";
import { MdClose } from "react-icons/md";

interface AmenityProps {
  viewAllAmenities: {
    amenityType: string;
    amenities: string[];
  }[];
  isOpen?: boolean;
  setIsOpenAmenityPopup?: () => void;
}

const AmenitiesPopUp = ({
  viewAllAmenities,
  isOpen,
  setIsOpenAmenityPopup,
}: AmenityProps) => {
  return (
    <section className={`pop-up ${isOpen ? "open" : "close"}`}>
      <div className="pop-up-content relative w-full  max-w-5xl mx-auto overflow-y-auto!">
        <button
          className="absolute top-4 right-4 text-2xl text-clr text-black hover:text-red-500"
          onClick={() => setIsOpenAmenityPopup && setIsOpenAmenityPopup()}
          aria-label="Close"
        >
          <MdClose />
        </button>
        {/* all amenities */}
        <h2 className="text-2xl font-plus font-semibold text-clr">
          {/* {roomName} */}
        </h2>
        {viewAllAmenities.map((amenity, index) => (
          <div key={index} className="flex flex-col gap-3 mt-2  text-black">
            <h3 className="text-lg font-semibold text-clr1 font-plus">
              {amenity.amenityType}
            </h3>
            <ul className="grid grid-cols-2 lg:grid-cols-5 gap-8">
              {amenity.amenities.map((amenity, index) => (
                <li key={index} className="text-sm font-semibold text-Light">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesPopUp;
