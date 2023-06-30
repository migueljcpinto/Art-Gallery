import ArtPiecePreview from "../ArtPiecesPreview";

export default function ArtPieces({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <ul>
      {artPieces.map((artPiece) => {
        const artPieceInfo = artPiecesInfo.find(
          (artPieceInfo) => artPieceInfo.slug === artPiece.slug
        ) ?? { isFavorite: false };
        return (
          <ArtPiecePreview
            key={artPiece.slug}
            artPiece={artPiece}
            isFavorite={artPieceInfo.isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        );
      })}
    </ul>
  );
}
