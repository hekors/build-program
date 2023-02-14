import Container from '@/components/UIComponents/Container';
import Image from 'next/image';
import Paragraph from '@/components/UIComponents/Typography/Paragraph';
import Link from 'next/link';
import NavbarData from '@/components/Navbar/NavbarData.json';
import { useRef } from 'react';
import Button from '@/components/UIComponents/Button';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

type NavbarPropsType = {
  isUserAuthorized: boolean;
};

const Navbar: React.FunctionComponent<NavbarPropsType> = ({
  isUserAuthorized = false,
}) => {
  const NavbarDataRef = useRef(NavbarData);
  return (
    <Container className="navbar bg-gray-900 py-12" id="navbar">
      <Container className="navbar-content-container section-content-container flex flex-row items-center justify-between">
        <Link href={'/'}>
          <Paragraph className="build-program-logo-wrapper flex flex-row items-start justify-start gap-1">
            <Image
              src={'/ios-emojis/school-bag.svg'}
              width={'20'}
              height={'20'}
              alt="bag"
            />
            <span className="text-white hover:text-gray-400">
              {'Build Program'}
            </span>
          </Paragraph>
        </Link>
        <Container className="flex flex-row items-center justify-center gap-6">
          {NavbarDataRef.current?.map((navbarOption, navbarOptionIndex) => (
            <Link href={navbarOption?.path} key={navbarOptionIndex}>
              <Paragraph className="hover:text-gray-400">
                {navbarOption?.title}
              </Paragraph>
            </Link>
          ))}
          {isUserAuthorized ? (
            <Link href={'/dashboard'}>
              <Button className="bg-white text-gray-900 hover:bg-gray-200">
                {'Dashboard'}
              </Button>
            </Link>
          ) : (
            <Link href={'/join'}>
              <Button className="bg-white text-gray-900 hover:bg-gray-200">
                {'Join Build Program'}
              </Button>
            </Link>
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default Navbar;
