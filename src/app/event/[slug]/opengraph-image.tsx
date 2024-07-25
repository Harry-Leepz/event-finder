import { ImageResponse } from "next/og";

// image metadata
export const altText = "Eventy";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type ImageProps = {
  params: {
    slug: string;
  };
};

export default async function Image({ params }: ImageProps) {
  return new ImageResponse(
    (
      <section>
        <h1>{params.slug}</h1>
        <p>Eventy - Browse events around you</p>
      </section>
    )
  );
}
