import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();

  if (!artPieces) return <div>Loading...</div>;

  const { slug } = router.query;
  const artPiece = artPieces.find((artPiece) => artPiece.slug === slug);
  const artPieceInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  ) ?? { isFavorite: false };

  return (
    <ArtPieceDetails
      {...artPiece}
      isFavorite={artPieceInfo.isFavorite}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
