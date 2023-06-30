import useSWR from "swr";
import Spotlight from "@/components/Spotlight";
import { useEffect, useState } from "react";

export default function SpotlightPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState();
  
  useEffect(() => {
    if (artPieces && artPieces.length > 0) {
      setRandomArtPiece(
        artPieces[Math.floor(Math.random() * artPieces.length)]
      );
    }
  }, [artPieces]);

  if (!randomArtPiece) return <div>Loading...</div>;

  const additionalInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === randomArtPiece.slug
  ) ?? { isFavorite: false };

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        name={randomArtPiece.name}
        artist={randomArtPiece.artist}
        slug={randomArtPiece.slug}
        isFavorite={additionalInfo.isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  )
  }