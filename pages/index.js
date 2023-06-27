import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art");

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <ArtPieces artPieces={data} />
    </div>
  );
}