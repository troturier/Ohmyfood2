import Image from "next/image";
import { restaurants } from "@/data/restaurants.json";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import MenuItem from "@/components/MenuItem/MenuItem";

export default async function RestaurantPage({ params }) {
  const { slug } = await params;
  const restaurant = restaurants.find((r) => r.slug === slug);

  let itemIndex = 0;

  return (
    <>
      <div className="heroImage">
        <Image className="image" src={restaurant.image} alt={restaurant.name} fill />
      </div>
      <div className="mainWrapper">
        <div className="contentWrapper">
          <RestaurantHeader name={restaurant.name} />
          <div className="menu">
            {Object.entries(restaurant.menu).map(([category, items]) => (
              <div key={category}>
                <h3 className="sectionTitle">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                {items.map((item) => (
                  <MenuItem key={item.nom} item={item} index={itemIndex++} />
                ))}
              </div>
            ))}
          </div>
          <button className="orderButton">Commander</button>
        </div>
      </div>
    </>
  );
}
