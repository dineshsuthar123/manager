import React, { useState } from 'react';
import styled from 'styled-components';
import { Avatar, Badge } from 'antd';

// Inline SVGs from Figma converted to React components
const MenuIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_145_292" fill="white">
      <path d="M8 12H0V10H8V12ZM16 7H0V5H16V7ZM16 2H8V0H16V2Z"/>
    </mask>
    <path d="M8 12H0V10H8V12ZM16 7H0V5H16V7ZM16 2H8V0H16V2Z" fill="#202224"/>
    <path d="M8 12V12.5H8.5V12H8ZM0 12H-0.5V12.5H0V12ZM0 10V9.5H-0.5V10H0ZM8 10H8.5V9.5H8V10ZM16 7V7.5H16.5V7H16ZM0 7H-0.5V7.5H0V7ZM0 5V4.5H-0.5V5H0ZM16 5H16.5V4.5H16V5ZM16 2V2.5H16.5V2H16ZM8 2H7.5V2.5H8V2ZM8 0V-0.5H7.5V0H8ZM16 0H16.5V-0.5H16V0ZM8 12V11.5H0V12V12.5H8V12ZM0 12H0.5V10H0H-0.5V12H0ZM0 10V10.5H8V10V9.5H0V10ZM8 10H7.5V12H8H8.5V10H8ZM16 7V6.5H0V7V7.5H16V7ZM0 7H0.5V5H0H-0.5V7H0ZM0 5V5.5H16V5V4.5H0V5ZM16 5H15.5V7H16H16.5V5H16ZM16 2V1.5H8V2V2.5H16V2ZM8 2H8.5V0H8H7.5V2H8ZM8 0V0.5H16V0V-0.5H8V0ZM16 0H15.5V2H16H16.5V0H16Z" fill="white" mask="url(#path-1-inside-1_145_292)"/>
  </svg>
);

const DiaryIcon = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.71436 11.2855H13.0001" stroke="#667185" strokeLinecap="round"/>
    <path d="M3.74083 9.99439L1.48714 11.0708C1.19812 11.2088 0.898358 10.9022 1.03333 10.6067L2.08595 8.30207L8.88392 1.35023C9.34089 0.88293 10.0818 0.88293 10.5388 1.35023C10.9958 1.81754 10.9958 2.57525 10.5388 3.04256L3.74083 9.99433V9.99439Z" stroke="#667185" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookmarkIcon = () => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66504 6.62598L4.57812 6.71387L4.5791 6.71582L1.80176 9.52539V1.80957H8.1875V9.52344L5.32227 6.62598C5.14064 6.44228 4.84667 6.44229 4.66504 6.62598ZM4.66504 6.62598L4.75293 6.71387H4.75391L4.66504 6.62598ZM8.65039 0.875C8.86419 0.875 9.0405 1.02124 9.09473 1.21777H9.125V10.6553C9.12494 10.7213 9.10919 10.7806 9.08887 10.832V10.834C9.04125 10.9488 8.95218 11.0394 8.83789 11.0879L8.83691 11.0869C8.77857 11.1135 8.71874 11.125 8.65918 11.125C8.59303 11.125 8.53268 11.1096 8.48145 11.0889V11.0879C8.42031 11.0642 8.37143 11.0291 8.3291 10.9863L5 7.62012L1.6709 10.9863C1.62617 11.0316 1.57436 11.0663 1.51855 11.0889L1.51758 11.0879C1.403 11.1358 1.27654 11.1364 1.16211 11.0879C1.04781 11.0394 0.958752 10.9488 0.911133 10.834L0.912109 10.833C0.886833 10.7736 0.875047 10.7142 0.875 10.6553V1.34277C0.875 1.08608 1.08164 0.875 1.33887 0.875H8.65039Z" fill="#667185" stroke="#667185" strokeWidth="0.25"/>
  </svg>
);

const KeyIcon = () => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.6625 0.754471C12.4347 0.526667 12.0653 0.526667 11.8376 0.754471L6.60882 5.98322C5.96073 5.5135 5.21839 5.28228 4.3818 5.28954C3.34764 5.29853 2.46491 5.66866 1.73362 6.39995C1.00233 7.13124 0.632197 8.01396 0.623213 9.04811C0.61423 10.0823 0.968978 10.9713 1.68745 11.7152C2.42923 12.467 3.32612 12.8447 4.37811 12.8482C5.43011 12.8517 6.32805 12.4816 7.07192 11.7377C7.8158 10.9938 8.18597 10.0958 8.18245 9.04384C8.1796 8.19321 7.9331 7.44493 7.44293 6.79901L9.04169 5.20024L10.3793 6.53776C10.4339 6.59246 10.497 6.63461 10.5685 6.66421C10.64 6.69382 10.7144 6.70862 10.7917 6.70862C10.8691 6.70862 10.9435 6.69382 11.0149 6.66421C11.0864 6.63461 11.1495 6.59246 11.2042 6.53776L13.2458 4.49609C13.2711 4.47087 13.2938 4.44355 13.314 4.41415C13.3332 4.38629 13.3498 4.35698 13.3638 4.32623C13.3779 4.29548 13.3893 4.26374 13.3978 4.23102C13.4063 4.1983 13.412 4.16509 13.4147 4.13139C13.4175 4.09768 13.4173 4.064 13.4142 4.03032C13.4112 3.99665 13.4052 3.96349 13.3963 3.93085C13.3875 3.89822 13.3759 3.86659 13.3615 3.83597C13.3472 3.80536 13.3303 3.77621 13.3109 3.74853C13.2914 3.72085 13.2698 3.69505 13.2458 3.67114L11.9083 2.33362L12.6625 1.57943C12.8903 1.35162 12.8903 0.982275 12.6625 0.754471ZM11.0834 3.15858L12.0084 4.08362L10.7917 5.30032L9.86664 4.37528L11.0834 3.15858ZM4.38202 11.6815C5.11033 11.684 5.73197 11.4277 6.24696 10.9127C6.76195 10.3977 7.01823 9.77609 7.0158 9.04776C7.01336 8.31946 6.75292 7.69955 6.2345 7.18801C5.72287 6.69389 5.10868 6.44994 4.39194 6.45616C3.67598 6.46238 3.06486 6.71863 2.55858 7.22491C2.0523 7.73119 1.79606 8.34231 1.78984 9.05826C1.78362 9.77422 2.02921 10.3897 2.52662 10.9047C3.03525 11.4202 3.65372 11.6791 4.38202 11.6815Z" fill="#667185"/>
  </svg>
);

const CustomizeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_145_45" fill="white">
      <path d="M0 0.3C0 0.134315 0.134315 0 0.3 0H5.15455C5.32023 0 5.45455 0.134315 5.45455 0.3V3.95455C5.45455 4.78297 4.78297 5.45455 3.95455 5.45455H0.3C0.134315 5.45455 0 5.32023 0 5.15455V0.3Z"/>
    </mask>
    <path d="M0 0.3C0 0.134315 0.134315 0 0.3 0H5.15455C5.32023 0 5.45455 0.134315 5.45455 0.3V3.95455C5.45455 4.78297 4.78297 5.45455 3.95455 5.45455H0.3C0.134315 5.45455 0 5.32023 0 5.15455V0.3Z" stroke="#667185" strokeWidth="2" mask="url(#path-1-inside-1_145_45)"/>
    <mask id="path-2-inside-2_145_45" fill="white">
      <path d="M12 0.3C12 0.134315 11.8657 0 11.7 0H6.84545C6.67977 0 6.54545 0.134315 6.54545 0.3V3.95455C6.54545 4.78297 7.21703 5.45455 8.04545 5.45455H11.7C11.8657 5.45455 12 5.32023 12 5.15455V0.3Z"/>
    </mask>
    <path d="M12 0.3C12 0.134315 11.8657 0 11.7 0H6.84545C6.67977 0 6.54545 0.134315 6.54545 0.3V3.95455C6.54545 4.78297 7.21703 5.45455 8.04545 5.45455H11.7C11.8657 5.45455 12 5.32023 12 5.15455V0.3Z" stroke="#667185" strokeWidth="2" mask="url(#path-2-inside-2_145_45)"/>
    <mask id="path-3-inside-3_145_45" fill="white">
      <path d="M0 11.7C0 11.8657 0.134315 12 0.3 12H5.15455C5.32023 12 5.45455 11.8657 5.45455 11.7V8.04545C5.45455 7.21703 4.78297 6.54545 3.95455 6.54545H0.3C0.134315 6.54545 0 6.67977 0 6.84545V11.7Z"/>
    </mask>
    <path d="M0 11.7C0 11.8657 0.134315 12 0.3 12H5.15455C5.32023 12 5.45455 11.8657 5.45455 11.7V8.04545C5.45455 7.21703 4.78297 6.54545 3.95455 6.54545H0.3C0.134315 6.54545 0 6.67977 0 6.84545V11.7Z" stroke="#667185" strokeWidth="2" mask="url(#path-3-inside-3_145_45)"/>
    <mask id="path-4-inside-4_145_45" fill="white">
      <path d="M12 11.7C12 11.8657 11.8657 12 11.7 12H6.84545C6.67977 12 6.54545 11.8657 6.54545 11.7V8.04545C6.54545 7.21703 7.21703 6.54545 8.04545 6.54545H11.7C11.8657 6.54545 12 6.67977 12 6.84545V11.7Z"/>
    </mask>
    <path d="M12 11.7C12 11.8657 11.8657 12 11.7 12H6.84545C6.67977 12 6.54545 11.8657 6.54545 11.7V8.04545C6.54545 7.21703 7.21703 6.54545 8.04545 6.54545H11.7C11.8657 6.54545 12 6.67977 12 6.84545V11.7Z" stroke="#667185" strokeWidth="2" mask="url(#path-4-inside-4_145_45)"/>
  </svg>
);

const BellIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.88578 2.51546C5.92612 1.49157 6.32116 0.971043 7.02973 1.00114C7.72595 1.0307 8.13197 1.58731 8.10288 2.47215C8.38609 2.61188 8.68315 2.72942 8.9499 2.89516C10.0453 3.57571 10.5848 4.57223 10.6494 5.84889C10.6856 6.56512 10.728 7.28653 10.8502 7.99146C10.9763 8.71886 11.4079 9.27806 12.0467 9.67942C12.4434 9.92865 12.6129 10.4241 12.4214 10.8492C12.3624 10.9801 12.1249 11.1018 11.9657 11.1063C11.0926 11.131 10.2184 11.1216 9.34466 11.115C9.16134 11.1137 9.06776 11.1532 9.00945 11.3531C8.70977 12.3808 7.90049 13.0223 6.96935 12.9995C5.99226 12.9755 5.27833 12.3627 4.98264 11.2949C4.96974 11.2482 4.95081 11.2033 4.92131 11.1198C4.03395 11.1198 3.13849 11.125 2.24303 11.1165C1.98864 11.1141 1.67387 11.2192 1.55257 10.8612C1.42401 10.4816 1.5383 9.94322 1.81836 9.761C2.97932 9.00554 3.3498 7.87897 3.37697 6.57956C3.38589 6.15301 3.36448 5.71787 3.44132 5.30208C3.66786 4.07567 4.3778 3.20268 5.51873 2.67753C5.64113 2.62114 5.76531 2.56871 5.88564 2.51573L5.88578 2.51546ZM11.6987 10.3765C10.5226 9.27221 10.3001 8.9986 10.0864 7.89463C9.96239 7.25385 9.97461 6.58473 9.95005 5.92761C9.8894 4.31128 8.61578 3.05886 7.03302 3.07534C5.38207 3.09237 4.10735 4.34315 4.0784 5.9746C4.07209 6.32883 4.08224 6.68402 4.05837 7.03703C3.97577 8.25581 3.5467 9.31579 2.58442 10.1229C2.50415 10.1903 2.42731 10.2616 2.29751 10.3765H11.6987ZM8.25875 11.118C7.4802 11.118 6.73088 11.1175 5.98169 11.119C5.9102 11.1191 5.83872 11.1325 5.76832 11.1397C5.78644 11.7435 6.27986 12.2307 6.90514 12.2748C7.54922 12.3205 8.13334 11.8439 8.25889 11.118H8.25875ZM7.32186 2.31458C7.32556 2.03743 7.30594 1.7837 6.98719 1.79269C6.67435 1.80154 6.66639 2.0554 6.67544 2.31458H7.32186Z" fill="#667185"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_145_53)">
      <path d="M8.84277 2.46119C8.66769 2.46119 8.52734 2.3231 8.52734 2.15388V0.30731C8.52734 0.136733 8.66908 0 8.84277 0C9.01646 0 9.15819 0.138087 9.15819 0.30731V2.15388C9.15819 2.32446 9.01646 2.46119 8.84277 2.46119Z" fill="#667185"/>
      <path d="M3.1582 2.46119C2.98312 2.46119 2.84277 2.3231 2.84277 2.15388V0.30731C2.84277 0.136733 2.98451 0 3.1582 0C3.33189 0 3.47362 0.138087 3.47362 0.30731V2.15388C3.47362 2.32446 3.33189 2.46119 3.1582 2.46119Z" fill="#667185"/>
      <path d="M9.62671 6.33032H9.59144C9.22246 6.33032 8.92334 6.62944 8.92334 6.99842C8.92334 7.3674 9.22246 7.66652 9.59144 7.66652H9.62671C9.99569 7.66652 10.2948 7.3674 10.2948 6.99842C10.2948 6.62944 9.99569 6.33032 9.62671 6.33032Z" fill="#667185"/>
      <path d="M6.88404 6.33032H6.84876C6.47978 6.33032 6.18066 6.62944 6.18066 6.99842C6.18066 7.3674 6.47978 7.66652 6.84876 7.66652H6.88404C7.25302 7.66652 7.55213 7.3674 7.55213 6.99842C7.55213 6.62944 7.25302 6.33032 6.88404 6.33032Z" fill="#667185"/>
      <path d="M9.62671 9.00271H9.59144C9.22246 9.00271 8.92334 9.30182 8.92334 9.6708C8.92334 10.0398 9.22246 10.3389 9.59144 10.3389H9.62671C9.99569 10.3389 10.2948 10.0398 10.2948 9.6708C10.2948 9.30182 9.99569 9.00271 9.62671 9.00271Z" fill="#667185"/>
      <path d="M6.88404 9.00271H6.84876C6.47978 9.00271 6.18066 9.30182 6.18066 9.6708C6.18066 10.0398 6.47978 10.3389 6.84876 10.3389H6.88404C7.25302 10.3389 7.55213 10.0398 7.55213 9.6708C7.55213 9.30182 7.25302 9.00271 6.88404 9.00271Z" fill="#667185"/>
      <path d="M4.14087 9.00271H4.1056C3.73662 9.00271 3.4375 9.30182 3.4375 9.6708C3.4375 10.0398 3.73662 10.3389 4.1056 10.3389H4.14087C4.50985 10.3389 4.80897 10.0398 4.80897 9.6708C4.80897 9.30182 4.50985 9.00271 4.14087 9.00271Z" fill="#667185"/>
      <path d="M11.6846 4.61507H0.315424C0.140343 4.61507 0 4.47699 0 4.30776V2.46119C0 1.61236 0.708661 0.923285 1.57851 0.923285H10.4215C11.2927 0.923285 12 1.61372 12 2.46119V4.30776C12 4.47834 11.8583 4.61507 11.6846 4.61507ZM0.632237 4.00045H11.3692V2.46255C11.3692 1.95352 10.944 1.53926 10.4215 1.53926H1.57851C1.05604 1.53926 0.630848 1.95352 0.630848 2.46255V4.00045H0.632237Z" fill="#667185" stroke="#667185" strokeWidth="0.25"/>
      <path d="M10.4215 12H1.57851C0.707272 12 0 11.3096 0 10.4621V4.30776C0 4.13718 0.141732 4.00045 0.315424 4.00045H11.6846C11.8597 4.00045 12 4.13854 12 4.30776V10.4607C12 11.3096 11.2913 11.9986 10.4215 11.9986V12ZM0.632237 4.61507V10.4607C0.632237 10.9698 1.05743 11.384 1.5799 11.384H10.4229C10.9453 11.384 11.3705 10.9698 11.3705 10.4607V4.61507H0.632237Z" fill="#667185" stroke="#667185" strokeWidth="0.25"/>
    </g>
    <defs>
      <clipPath id="clip0_145_53">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const CalendarGreenMark = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#009951"/>
    <path d="M4 6.5L5.86597 8.5L10 5" stroke="#F9FAFB" strokeLinecap="round"/>
  </svg>
);

// Small icons for the Discover Colleague pill
const GlassIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="6.5" stroke="#667185" strokeWidth="1.8" />
    <path d="M15.5 15.5L20 20" stroke="#667185" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const PeopleSearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10.2C8.71067 10.2 10.1 8.81067 10.1 7.1C10.1 5.38933 8.71067 4 7 4C5.28933 4 3.9 5.38933 3.9 7.1C3.9 8.81067 5.28933 10.2 7 10.2Z" stroke="#667185" strokeWidth="1.8"/>
    <path d="M13.5 10C14.8807 10 16 8.88071 16 7.5C16 6.11929 14.8807 5 13.5 5" stroke="#667185" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M2.5 18C2.5 15.7909 4.29086 14 6.5 14H7.5C9.70914 14 11.5 15.7909 11.5 18" stroke="#667185" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M13.5 13.5C15.1569 13.5 16.5 14.8431 16.5 16.5" stroke="#667185" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 60px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 7px rgba(31, 54, 199, 0.06));
`;

const Bar = styled.div`
  max-width: 1446px;
  margin: 0 auto;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr auto; /* left area grows, right area hugs */
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  box-sizing: border-box;

  @media (min-width: 992px) {
    padding: 0 16px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0; /* allow children to shrink */
`;

const Nest = styled.div`
  font-family: 'Samsung InterFace', Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #202224;
`;

const ToggleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  background: #E8E8E8;
  border-radius: 100px;
  padding: 3px;
  gap: 4px;
  margin-left: 12px;
`;

const Pill = styled.button`
  border: none;
  outline: none;
  padding: 6px 12px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  color: ${(p) => (p.active ? '#FFFFFF' : '#6B7280')};
  background: ${(p) => (p.active ? 'linear-gradient(125.81deg, #3FBCE6 26.4%, #36A8DE 73.6%)' : 'transparent')};
`;

const SearchWrap = styled.div`
  margin-left: 8px;
  flex: 0 1 auto;
  display: none;
  @media (min-width: 480px) { display: block; }
`;

const SearchPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  background: #E0F6FF;
  border-radius: 20px;
  svg { display: block; }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 4px;

  /* progressively hide lesser-important icons on small screens */
  .hide-sm { display: none; }
  @media (min-width: 480px) { .hide-sm { display: grid; } }
  @media (min-width: 640px) { .hide-md { display: grid; } }
`;

const IconBox = styled.div`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: #F5F7F9;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-self: end;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  small, span { font-family: 'Samsung Sharp Sans', Inter, sans-serif; font-weight: 700; }
  span { font-size: 10px; color: #606060; }
  small { font-size: 10px; color: #606060; }
  @media (max-width: 640px) { display: none; }
`;

const CalendarWithMark = styled.div`
  position: relative;
  width: 28px; height: 28px;
  display: grid; place-items: center; border-radius: 8px; background: #F5F7F9;
  svg.mark { position: absolute; right: -2px; top: -2px; }
`;

export default function Navbar() {
  const [tab, setTab] = useState('manager');

  return (
    <Container>
      <Bar>
        <Left>
          <MenuIcon />
          <Nest>Nest</Nest>
          <ToggleWrap>
            <Pill active={tab === 'workspace'} onClick={() => setTab('workspace')}>My Workspace</Pill>
            <Pill active={tab === 'manager'} onClick={() => setTab('manager')}>Manager Hub</Pill>
          </ToggleWrap>
        </Left>

        <Right>
          <SearchWrap>
            <SearchPill>
              <GlassIcon />
              <PeopleSearchIcon />
            </SearchPill>
          </SearchWrap>
          <Icons>
            <IconBox title="Diary" className="hide-sm"><DiaryIcon /></IconBox>
            <IconBox title="Bookmark" className="hide-sm"><BookmarkIcon /></IconBox>
            <IconBox title="Password" className="hide-sm"><KeyIcon /></IconBox>
            <IconBox title="Customise" className="hide-md"><CustomizeIcon /></IconBox>
            <Badge count={4} color="#F93C65">
              <IconBox title="Notifications"><BellIcon /></IconBox>
            </Badge>
            <CalendarWithMark title="Weekly Compliance" className="hide-sm">
              <CalendarIcon />
              <span className="mark"><CalendarGreenMark /></span>
            </CalendarWithMark>
          </Icons>
          <Profile>
            <Avatar size={32} src="https://i.pravatar.cc/64?img=5" />
            <Names>
              <span>Jone Aly</span>
              <small>Admin</small>
            </Names>
          </Profile>
        </Right>
      </Bar>
    </Container>
  );
}
