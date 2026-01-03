import React from "react";
import BoatRideCard from "../components/BoatRideCard.jsx";

const HomePage = () => {
  const boatRides = [
      {
        id: 1,
        title: "Visakhapatnam Coastal Boat Cruise",
        place: "RK Beach, Visakhapatnam, Andhra Pradesh",
        img: "https://www.vizagcustoms.gov.in/Content/images/tinfo/rkbeach.png",
        ticketPrice: 1000,
      },
      {
          id: 2,
          title: "Nagarjuna Sagar Premium Boat Ride",
          place: "Nagarjuna Sagar Dam, Telangana",
          img: "https://kpiasacademy.com/wp-content/uploads/2025/03/nagarjuna-sagar-dam-hyderabad-telangana-1-musthead-hero-2.jpg",
          ticketPrice: 1050,
        },
        {
            id: 3,
            title: "Papikondalu River Cruise",
            place: "Godavari River, Andhra Pradesh",
            img: "https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2019/06/IMG_2343.jpeg",
            ticketPrice: 900,
        },
        {
            id: 4,
            title: "Srisailam Dam Scenic Boat Ride",
            place: "Srisailam, Andhra Pradesh",
            img: "https://hblimg.mmtcdn.com/content/hubble/img/srisailam/mmt/activities/m_Srisailam%20Dam-2_l_425_640.jpg",
            ticketPrice: 1100,
        },
        {
          id: 5,
          title: "Hussain Sagar Luxury Cruise",
          place: "Hussain Sagar Lake, Hyderabad, Telangana",
          img: "https://www.shutterstock.com/shutterstock/videos/3733653919/thumb/1.jpg?ip=x480",
          ticketPrice: 950,
        },
    ];
    
    return (
        <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Premium Boat Rides
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {boatRides.map((ride) => (
            <BoatRideCard key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
