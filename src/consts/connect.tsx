import {
  FaGithub, FaInstagram, FaLinkedin, FaChalkboardTeacher,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: 'Партнерство',
    href: 'mailto:kirill-pavlovskiy@rambler.ru',
    icon: <MdEmail />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kirill_pavlovskii15/',
    icon: <FaInstagram />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kirill-pavlovskii-6a18791ab/',
    icon: <FaLinkedin />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/stevenKirill',
    icon: <FaGithub />,
  },
  {
    label: 'Менторство',
    href: 'https://getmentor.dev/mentor/kirill-pavlovskiy-4887',
    icon: <FaChalkboardTeacher />,
  },
];

export default ConnectLinks;
