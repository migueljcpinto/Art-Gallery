import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({
  imageSource: image,
  slug,
  name: title,
  artist: name,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
}) 
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.back()}>go back</button>
      <h2>
        {title} ({year})
      </h2>
      <p>{genre}</p>
      <Image src={image} width={480} height={608} alt={title} />
      <div>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(slug)}
        />
      </div>
      <p>by {name}</p>
    </div>
  );
