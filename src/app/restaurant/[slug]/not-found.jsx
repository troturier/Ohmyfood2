import Link from "next/link";

export default function NotFound() {
  return (
    <div className="contentWrapper">
      <h2 className="restaurantName">Restaurant introuvable</h2>
      <p>Le restaurant que vous recherchez n&apos;existe pas.</p>
      <Link href="/">Retour à l&apos;accueil</Link>
    </div>
  );
}
