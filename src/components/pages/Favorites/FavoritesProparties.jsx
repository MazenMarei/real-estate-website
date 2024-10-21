import { useState } from "react";
import CarouselCard from "../../shared/CarouselCard/CarouselCard";
import image from "../../../assets/images/8-850x550.jpg";
import profileImage from "../../../assets/images/6-150x150.jpg";

export default function FavoritesProparties() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      image: image,
      type: "Family House",
      title: "Eaton Garth Penthouse",
      sellType: "for rent",
      location: "1421 San Pedro St, Los Angeles, CA 900015",
      locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
      price: 1300,
      beds: 1,
      bath: 1,
      sqft: 8280,
      author: "kate john",
      authorImage: profileImage,
      postedTime: "1 day ago",
    },
    {
      id: 2,
      image: image,
      type: "Family House",
      title: "Eaton Garth Penthouse",
      sellType: "for rent",
      location: "1421 San Pedro St, Los Angeles, CA 900015",
      locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
      price: 1300,
      beds: 1,
      bath: 1,
      sqft: 8280,
      author: "kate john",
      authorImage: profileImage,
      postedTime: "1 day ago",
    },
    {
      id: 3,
      image: image,
      type: "Family House",
      title: "Eaton Garth Penthouse",
      sellType: "for rent",
      location: "1421 San Pedro St, Los Angeles, CA 900015",
      locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
      price: 1300,
      beds: 1,
      bath: 1,
      sqft: 8280,
      author: "kate john",
      authorImage: profileImage,
      postedTime: "1 day ago",
    },
    {
      id: 4,
      image: image,
      type: "Family House",
      title: "Eaton Garth Penthouse",
      sellType: "for rent",
      location: "1421 San Pedro St, Los Angeles, CA 900015",
      locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
      price: 1300,
      beds: 1,
      bath: 1,
      sqft: 8280,
      author: "kate john",
      authorImage: profileImage,
      postedTime: "1 day ago",
    },
  ]);

  return (
    <div className="favorites">
      <h1 className="favorites__title">Favorites</h1>
      <div className="favorites__proparties">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <CarouselCard key={favorite.id} image={favorite.image} {...favorites} />
          ))
        ) : (
          <h1 className="favorites__no-favorites">No Favorites</h1>
        )}
      </div>
    </div>
  );
}
