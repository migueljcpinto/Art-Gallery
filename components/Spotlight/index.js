import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecesPreview";

const Container = styled.div`
  margin: 20px;
`;

export default function Spotlight({
  image,
  name,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Container>
      <ArtPiecePreview
        artPiece={{ slug, name, artist, imageSource: image }}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </Container>
  );
}
