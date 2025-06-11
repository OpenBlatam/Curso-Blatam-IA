import {
  Avatar,
  Box,
  HStack,
  Icon,
  Link,
  Text,
  TextProps,
  useColorModeValue
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import Image from 'next/image';
import VerifiedBadgeSvg from '../../../../../public/images/VerifiedBadge.svg';

export interface TweetCardProps {
  name: string;
  handle: string;
  image?: string;
  date?: string;
  content: string;
  url: string;
  isVerified?: boolean;
}

const TweetCard: React.FC<TweetCardProps> = ({
  name,
  image,
  date,
  handle,
  content,
  url,
  isVerified
}) => {
  const tweetMetaProps: TextProps = {
    fontSize: { base: "sm", md: "md" }
  };

  const tweetContentProps: TextProps = {
    fontSize: { base: "sm", md: "md" }
  };

  return (
    <Link href={url} target="_blank" _hover={{ textDecoration: "none" }}>
      <Box
        padding="4"
        my="2"
        borderRadius="10px"
        shadow="md"
        transition="0.2s all"
        _hover={{
          backgroundColor: useColorModeValue("blackAlpha.100", "whiteAlpha.100")
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px="2"
        >
          <Icon
            as={ImQuotesLeft}
            w={6}
            h={6}
            mb="4"
            opacity="0.30"
            color={useColorModeValue("blue.500", "blue.200")}
          />
          <Icon as={FaTwitter} w={4} h={4} mb="4" color="twitter.500" />
        </Box>
        <HStack alignItems="flex-start">
          <Box>
            <HStack spacing="1" mb="2" flexWrap="wrap">
              <Text fontWeight="medium" {...tweetMetaProps}>
                {name}
              </Text>
              {isVerified && (
                <Box as="span" display="inline-block" ml={1}>
                  <Image
                    src={VerifiedBadgeSvg.src}
                    alt="verified twitter account"
                    width={20}
                    height={20}
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              )}
              <Text color="gray" {...tweetMetaProps}>
                {handle}
              </Text>
              <Text color="gray" {...tweetMetaProps}>
                •
              </Text>
              <Text color="gray" {...tweetMetaProps}>
                {date}
              </Text>
            </HStack>
            <Text {...tweetContentProps} whiteSpace="pre-line">{content}</Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
};

export default TweetCard; 