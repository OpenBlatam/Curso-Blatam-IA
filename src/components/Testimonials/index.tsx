import {
  SimpleGrid,
  HStack,
  Stack,
  useBreakpointValue
} from "@chakra-ui/react";
import { chunk } from "@chakra-ui/utils";
import { getUniqueID } from "../../utils";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import TweetCard from "./TweetCard";
import FaceCard from "./TweetCard";
import tweets from "./tweets";
import useIsMobile from "../../hooks/uselsMobile";

const Testimonials = () => {
  const ROWS = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const CHUNK_SIZE = Math.floor(tweets.length / ROWS);
  const isBrowser = typeof window !== "undefined";
  const isMobile = useIsMobile();

  return (
    <SectionLayout
      aria-label="Testimonials"
      pb={{ base: "8", sm: "16", lg: "24", xl: "36" }}
    >
      <HeadingBox
        title="Que dicen de nosotros en Google"
        titleProps={{ color: "rainbow" }}
        subtitle="en twitter y las redes sociales"
        subtitleProps={{
          fontSize: { base: "lg", sm: "xl", md: "2xl", lg: "3xl" }
        }}
      />
      <SimpleGrid
        templateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))"
        }}
        gridColumnGap={{ md: "4" }}
      >
        {chunk(tweets, CHUNK_SIZE).map((tweetList, index) => (
          <Stack
            key={getUniqueID()}
            aria-label={`Tweet-Row-${index}`}
            spacing="2"
          >
            {tweetList.map((tweet) => (
              <TweetCard key={tweet.handle} {...tweet} />
              ))}
          </Stack>
        ))}
      </SimpleGrid>
    </SectionLayout>
  );
};

export default Testimonials;
