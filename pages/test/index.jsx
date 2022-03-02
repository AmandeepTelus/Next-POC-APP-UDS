import { FlexGrid } from "@telus-uds/ds-allium";
import { Typography } from "@telus-uds/ds-allium";
import { ButtonLink } from "@telus-uds/ds-allium";
import { border } from "@telus-uds/palette-allium";

import NextImage from "next/image";

export const getServerSideProps = (t) => {
  return { props: { key: "123" } };
};
function Test(props) {
  const contentfulLoader = ({ src, width, quality }) => {
    const params = [`w=${width}`, "fm=webp"];
    if (quality) {
      params.push(`q=${quality}`);
    }
    return `${src}?${params.join("&")}`;
  };

  const Comp = (
    <FlexGrid>
      <FlexGrid.Row>
        <FlexGrid.Col xs={2} md={4}>
          <Typography
            variant={{
              size: "display1",
              colour: "secondary",
            }}
            block={true}
            align={"center"}
          >
            Some text in a footer.{props.key}
          </Typography>
          {/* <Typography>This column also contains an aside.</Typography> */}
          <ButtonLink
            href="https://www.telus.com"
            variant={{
              priority: "high",
            }}
          >
            Go to telus.com
          </ButtonLink>{" "}
        </FlexGrid.Col>
        <FlexGrid.Col xs={2} md={4}>
          {" "}
          <div style={{ width: "640px", outline: "solid red 2px" }}>
            <NextImage
              loader={contentfulLoader}
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
              alt="basketball"
              height={426}
              width={640}
            />
          </div>
        </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid>
  );
  return Comp;
}

export default Test;
