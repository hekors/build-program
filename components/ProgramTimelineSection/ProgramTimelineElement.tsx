import Container from '@/components/UIComponents/Container';
import { ProgramTimelineElementType } from '@/types/program-timeline-element-type';
import Image from 'next/image';
import Button from '@/components/UIComponents/Button';
import { WrappedContainer } from '../UIComponents/Container/WrappedContainer';
import Headline from '../UIComponents/Typography/Headline';
import Paragraph from '../UIComponents/Typography/Paragraph';
import Link from 'next/link';
import { ButtonType } from '@/types/UIComponentTypes/button-type';

import TracksData from '@/components/ProgramTrackSection/ProgramTrackData.json';
import { useState } from 'react';

const ProgramTimelineElement: React.FunctionComponent<
  ProgramTimelineElementType
> = ({
  emoji,
  headline,
  description,
  displayURL,
  displayURLPath,
  timelineAction,
}) => {
  const [selectedTrack, setSelectedTrack] = useState(TracksData[0]);
  return (
    <Container
      className="program-timeline-element pl-12 border-l border-gray-300 relative
            flex flex-col items-start justify-start">
      <Container
        className="program-timeline-element__header-layer-wrapper absolute 
                flex flex-row items-stretch justify-start gap-4 -top-16 -left-10">
        {emoji && (
          <WrappedContainer className="program-timeline-element__emoji-box select-none cursor-default bg-white p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-sm">
            <Image
              src={`/ios-emojis/${emoji}.svg`}
              width="40"
              height="40"
              alt={emoji}
              priority
            />
          </WrappedContainer>
        )}
        {displayURL && (
          <Container className="program-timeline-element__link-display bg-gray-50 border border-gray-200 rounded-xl overflow-hidden w-fit pr-24 flex flex-row items-center justify-start gap-4">
            <Container className="program-timeline-element__link-display__search-label-wrapper bg-gray-200 h-full flex flex-row items-center justify-center p-4">
              <Paragraph className="select-none cursor-default">
                {'look at'}
              </Paragraph>
            </Container>
            <Link href={displayURLPath}>
              <Paragraph>{displayURL}</Paragraph>
            </Link>
          </Container>
        )}
      </Container>
      <Container className="program-timeline-element__details mt-6 flex flex-col items-start justify-start gap-6 mb-56">
        <Headline className="text-6xl font-extrabold w-[18ch]">
          {headline}
        </Headline>
        <Paragraph className="w-[56ch]">{description}</Paragraph>
        {timelineAction && (
          <WrappedContainer className="flex flex-row items-start justify-start gap-6">
            {timelineAction?.map((actionItem: ButtonType, actionIndex) => (
              <Button
                variant={actionItem?.variant}
                key={actionIndex}
                link={actionItem?.link}
                type={null}>
                {actionItem?.children}
              </Button>
            ))}
          </WrappedContainer>
        )}
      </Container>
    </Container>
  );
};

export default ProgramTimelineElement;
