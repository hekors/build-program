import HeroSection from '@/components/HeroSection';
import ProgramTimelineSection from '@/components/ProgramTimelineSection';
import ProgramTrackSection from '@/components/ProgramTrackSection';

const LandingPage: React.FunctionComponent = () => {
  return (
    <main className="landing-page grid grid-cols-1 gap-32">
      <HeroSection />
      <ProgramTimelineSection />
      <ProgramTrackSection />
    </main>
  );
};

export default LandingPage;
