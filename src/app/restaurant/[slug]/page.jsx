import { restaurants } from "@/data/restaurants.json";

export default async function RestaurantPage({ params }) {
  const { slug } = await params;
  const restaurant = restaurants.find((r) => r.slug === slug);

  return (
    <div>{restaurant?.name}</div>
  );
}
