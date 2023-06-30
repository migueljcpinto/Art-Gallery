import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    const artPieceInfo = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    );

    if (artPieceInfo) {
      setArtPiecesInfo(
        artPiecesInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        )
      );
    } else {
      setArtPiecesInfo([...artPieceInfo, { slug, isFavorite: true }]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component
            {...pageProps}
            artPieces={data}
            artPieceInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
