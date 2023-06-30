import ArtPieces from "@/components/ArtPieces";

export default function ArtListPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  if (!artPieces) return <div>Loading...</div>;
  return (
    <ArtPieces
      artPieces={artPieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
