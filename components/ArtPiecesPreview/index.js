import Image from "next/image";

export default function ArtPiecePreview({ artPiece }) {
  return (
    <div>
      <h2>{artPiece.name}</h2>
      <p>by {artPiece.artist}</p>
      <Image
        src={artPiece.imageSource}
        width={artPiece.dimensions.width / 4}
        height={artPiece.dimensions.height / 4}
        alt={artPiece.name}
      />
    </div>
  );
}