// src/config/menuItems.ts
import { BiHomeSmile, BiUser } from 'react-icons/bi';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';

export const menuItems = [
  { title: 'Home', Icon: BiHomeSmile, href: '/#home' },
  { title: 'About', Icon: BiUser, href: '/about-us' },
  { title: 'Services', Icon: HiOutlineChatBubbleBottomCenterText, href: '/#services' },
  { title: 'Blog', Icon: HiOutlineChatBubbleBottomCenterText, href: '/blog' },
];
