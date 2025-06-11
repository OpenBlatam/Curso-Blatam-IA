import { Flex, Tab, TabList, Tabs, FlexProps } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';

import { ImportantText } from '../headings';

interface Props {
  tabIndex: number;
  handleChange: (index: number) => void;
  tabsList: string[];
  isSticky?: boolean;
}

export const NavigationTabs: FC<Props> = ({ tabIndex, handleChange, tabsList, isSticky = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabStyles: FlexProps = {
    mt: { base: -8, md: -12 },
    mb: { base: 6, md: 0 },
    mx: { base: 0, md: 12 },
    px: { base: 4, md: 10 },
    backgroundColor: 'white',
    overflowX: 'auto' as const,
    borderBottom: '1px solid',
    borderBottomColor: 'brand.divider.100',
    position: isSticky ? 'sticky' : 'relative',
    top: 0,
    zIndex: 2,
    shadow: isSticky ? 'sm' : 'none',
    width: '100%',
    maxWidth: '100%'
  };

  if (!mounted) {
    return (
      <Flex {...tabStyles}>
        <Tabs
          id='tabbed-navigation'
          align='center'
          index={0}
          variant='unstyled'
          isLazy
          width="100%"
        >
          <TabList 
            whiteSpace='nowrap' 
            h={{ base: '48px', md: '64px' }} 
            role='tablist'
            width="100%"
            overflowX="auto"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {tabsList.map(tabElement => (
              <Tab
                key={tabElement}
                px={0}
                mx={{ base: 4, md: 6 }}
                pb={0}
                borderBottom='10px solid'
                borderBottomColor='transparent'
                role='tab'
                aria-controls=''
                flexShrink={0}
              >
                <ImportantText as='h2' color='brand.ready.text' fontSize={{ base: 'sm', md: 'md' }}>
                  {tabElement}
                </ImportantText>
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </Flex>
    );
  }

  return (
    <Flex {...tabStyles}>
      <Tabs
        id='tabbed-navigation'
        align='center'
        index={tabIndex}
        onChange={index => handleChange(index)}
        variant='unstyled'
        isLazy
        width="100%"
      >
        <TabList 
          whiteSpace='nowrap' 
          h={{ base: '48px', md: '64px' }} 
          role='tablist'
          width="100%"
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {tabsList.map(tabElement => (
            <Tab
              key={tabElement}
              px={0}
              mx={{ base: 4, md: 6 }}
              pb={0}
              borderBottom='10px solid'
              borderBottomColor='transparent'
              _selected={{
                borderBottom: '10px solid',
                borderBottomColor: 'brand.accent'
              }}
              role='tab'
              aria-controls=''
              flexShrink={0}
            >
              <ImportantText as='h2' color='brand.ready.text' fontSize={{ base: 'sm', md: 'md' }}>
                {tabElement}
              </ImportantText>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Flex>
  );
};
