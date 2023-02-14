import { useEffect, useRef, useState } from 'react';

import Container from '@/components/UIComponents/Container';
import { SectionContainer } from '@/components/UIComponents/Container/SectionContainer';
import Headline from '@/components/UIComponents/Typography/Headline';
import Paragraph from '@/components/UIComponents/Typography/Paragraph';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/UIComponents/Dropdown';
import { generateYearsFromStart } from '@/lib/utils';
import { LucideArrowDown } from 'lucide-react';

const Builders = () => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString(),
  );
  const allYears = useRef(generateYearsFromStart());
  return (
    <Container>
      <Container className="bg-gray-900">
        <SectionContainer>
          <Container className="text-center flex flex-col items-center justify-start gap-4">
            <Headline className="font-semibold text-white text-6xl flex flex-row items-center justify-center gap-1">
              <span>{'Past Builders'}</span>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="pl-4 py-2 rounded-lg
                                    flex flex-row items-center justify-center
                                    hover:bg-white hover:bg-opacity-20 
                                    active:bg-white active:bg-opacity-40
                                    focus:outline-none
                                ">
                  <span className="underline">{selectedYear}</span>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
                      fill="white"
                    />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800">
                  <DropdownMenuLabel className="text-gray-400">
                    {'Select Year/Cohort'}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={selectedYear.toString()}
                    onValueChange={setSelectedYear}>
                    {allYears.current?.map((yearItem, yearIndex) => (
                      <DropdownMenuRadioItem
                        value="2023"
                        className="text-gray-300 hover:text-gray-900"
                        key={yearIndex}>
                        {yearItem}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </Headline>
            <Paragraph>
              {
                'Meet the builders who built amazing projects during Build Program'
              }
            </Paragraph>
          </Container>
        </SectionContainer>
      </Container>
      <SectionContainer className="past-builders-content-wrapper"></SectionContainer>
    </Container>
  );
};

export default Builders;
