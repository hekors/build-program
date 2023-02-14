import { useRef } from 'react';
import { SectionContainer } from '@/components/UIComponents/Container/SectionContainer';
import ProgramTimelineData from '@/components/ProgramTimelineSection/ProgramTimelineData.json';
import ProgramTimelineElement from '@/components/ProgramTimelineSection/ProgramTimelineElement';
import { ProgramTimelineElementType } from '@/types/program-timeline-element-type';

const ProgramTimelineSection: React.FunctionComponent = (props: any) => {
  const ProgramTimelineDataRef = useRef(ProgramTimelineData);
  return (
    <SectionContainer id="program-timeline" {...props}>
      {ProgramTimelineDataRef.current?.map(
        (timelineElement, timelineIndex: number) => {
          return (
            <ProgramTimelineElement
              emoji={timelineElement?.emoji}
              headline={timelineElement?.headline}
              description={timelineElement?.description}
              displayURL={timelineElement?.displayURL}
              displayURLPath={timelineElement?.displayURLPath}
              // @ts-ignore
              timelineAction={timelineElement?.timelineAction}
              key={timelineIndex}
            />
          );
        },
      )}
    </SectionContainer>
  );
};

export default ProgramTimelineSection;
