import Container from '@/components/UIComponents/Container';
import { SectionContainer } from '@/components/UIComponents/Container/SectionContainer';
import Headline from '@/components/UIComponents/Typography/Headline';
import Paragraph from '@/components/UIComponents/Typography/Paragraph';
import ProgramTrackData from '@/components/ProgramTrackSection/ProgramTrackData.json';
import { useRef } from 'react';
import ProgramTrackCard from './ProgramTrackCard';
import { ProgramTrackCardType } from '@/types/program-track-card-type';

const ProgramTrackSection: React.FunctionComponent = (props: any) => {
  const ProgramTrackDataRef = useRef(ProgramTrackData);

  return (
    <Container className="bg-gray-900" id="tracks" {...props}>
      <SectionContainer>
        <Container className="flex flex-col items-center gap-6">
          <Headline className="text-white font-bold text-5xl">
            {'Choose a track you want to apply for.'}
          </Headline>
          <Paragraph>
            {'Explore a program track, according to your interests'}
          </Paragraph>
        </Container>
        <Container className="program-tracks-list-wrapper grid grid-cols-2 items-start justify-center gap-24 my-12">
          {ProgramTrackDataRef.current?.map(
            (programTrack: ProgramTrackCardType, programTrackIndex: number) => (
              <ProgramTrackCard
                trackTitle={programTrack?.trackTitle}
                trackDescription={programTrack?.trackDescription}
                trackApplyPage={programTrack?.trackApplyPage}
                trackEmoji={programTrack?.trackEmoji}
                key={programTrackIndex}
              />
            ),
          )}
        </Container>
      </SectionContainer>
    </Container>
  );
};

export default ProgramTrackSection;
