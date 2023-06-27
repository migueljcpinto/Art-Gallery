import ArtPiecePreview from "../ArtPiecesPreview";

export default function ArtPieces({ artPieces }) {
  return (
    <ul>
      {artPieces.map((artPiece) => (
        <ArtPiecePreview key={artPiece.slug} artPiece={artPiece} />
      ))}
    </ul>
  );
}