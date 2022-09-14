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
import { FaFacebook } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import className from "../../utils/classname";
import globalClassName from "../../utils/globalclassname";
//import mp from "../../services/mixpanel";
import css from './name.module.css';
import VerifiedBadgeSvg from '../../../public/images/VerifiedBadge.svg';
import Padlock from "./Padlock";

type NameProps = {
  name: string;
  clickableProfileLink?: boolean;
  isVerified?: boolean;
  isProtected?: boolean;
};

const name = ({
                name, clickableProfileLink, isVerified, isProtected,
              }: NameProps) => (
    <span
        {...className(
            globalClassName('author-name'),
            css.name,
            clickableProfileLink && css.clickable,
        )}
    >
    <span>{ name }</span>
      {isVerified && (
          <img
              src={VerifiedBadgeSvg}
              alt="verified twitter acount"
              {...className(
                  globalClassName('verified-badge'),
                  css.verifiedBadge,
              )}
          />
      )}
      {isProtected && (
          <Padlock
              {...className(
                  globalClassName('protected-icon'),
                  css.padlock,
              )}
          />
      )}
  </span>
);

export interface TweetCardProps {
  name: string;
  handle: string;
  image?: string;
  date?: string;
  content: string;
  url: string;
}

const TweetCard: React.FC<TweetCardProps> = ({
  name,
  image,
  date,
  handle,
  content,
  url
}) => {
  const tweetMetaProps: TextProps = {
    fontSize: { base: "sm", md: "md" }
  };

  const tweetContentProps: TextProps = {
    fontSize: { base: "sm", md: "md" }
  };
/*
  const trackMetric = () => {
    mp.track("Twitter Card Trigger", { handle, date, url });
  };
*/
  return (
    <Link href={url} target="_blank" _hover={{ textDecoration: "none" }}>
      <Box
        padding="2"
        my="2"
        borderRadius="1px"
        shadow="md"
        transition="0.2s all"
        _hover={{
          backgroundColor: useColorModeValue("blackAlpha.100", "whiteAlpha.100")
        }}
       // onClick={trackMetric}
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
        <HStack alignItems="center">
          <Avatar src={image} size="sm" my="1" />
          <Box>
            <HStack spacing="0.1" mb="1" flexWrap="wrap">
              <Text fontWeight="medium" {...tweetMetaProps}>
                {name}
              </Text>
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
            <Text {...tweetContentProps}>{content}</Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
};

export interface TweetCardProps {
  name: string;
  handle: string;
  image?: string;
  date?: string;
  content: string;
  url: string;
}

const FaceCard2: React.FC<TweetCardProps> = ({
                                               name,
                                               image,
                                               date,
                                               handle,
                                               content,
                                               url
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
            //onClick={trackMetric}
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
            <Icon as={FaFacebook} w={4} h={4} mb="4" color="twitter.500" />
          </Box>
          <HStack alignItems="flex-start">
            <Avatar src={image} size="sm" my="1" />
            <Box>
              <HStack spacing="1" mb="2" flexWrap="wrap">
                <Text fontWeight="medium" {...tweetMetaProps}>
                  {name}
                </Text>
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
              <Text {...tweetContentProps}>{content}</Text>
            </Box>
          </HStack>
        </Box>
      </Link>
  );
};

//export default  FaceCard2;
export default TweetCard;
