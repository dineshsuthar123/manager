import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// SVG Icons
const ExportIcon = () => (
  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_308_212)">
      <path d="M3.4469 0H7.55309C7.82964 0 8.05531 0.230156 8.05531 0.517281V4.37524H10.5C10.7765 4.37524 11 4.60539 11 4.89252C11 5.0338 10.9469 5.16369 10.854 5.25712L5.85398 10.4049C5.65708 10.6077 5.34292 10.6077 5.1438 10.4049L5.13495 10.3957L0.148226 5.2594C-0.0486763 5.05659 -0.0486763 4.73073 0.148226 4.52792C0.245571 4.42993 0.376102 4.37752 0.502209 4.37752H2.9469V0.517281C2.9469 0.230156 3.17256 0 3.4469 0ZM0.502209 12C0.22566 12 0.0022086 11.7676 0.0022086 11.485C0.0022086 11.2024 0.22566 10.9677 0.499996 10.9677H10.4978C10.7743 10.9677 10.9978 11.1979 10.9978 11.485C10.9978 11.7721 10.7721 12 10.4978 12H0.502209ZM7.05088 1.03456H3.95132V4.89252C3.95132 5.17509 3.72787 5.40752 3.4469 5.40752H1.7146L5.50221 9.30877L9.28761 5.40752H7.55309C7.27654 5.40752 7.05088 5.17509 7.05088 4.89252V1.03456Z" fill="#202224"/>
    </g>
    <defs>
      <clipPath id="clip0_308_212">
        <rect width="11" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const DiaryMenuIcon = () => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.666672 5.99996C0.666672 6.46019 1.03977 6.83329 1.5 6.83329H16.5C16.9602 6.83329 17.3333 6.46019 17.3333 5.99996C17.3333 5.53973 16.9602 5.16663 16.5 5.16663H1.5C1.03977 5.16663 0.666672 5.53973 0.666672 5.99996Z" fill="#6B7280"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.666672 0.999959C0.666672 1.46019 1.03977 1.83329 1.5 1.83329H16.5C16.9602 1.83329 17.3333 1.46019 17.3333 0.999959C17.3333 0.539726 16.9602 0.166626 16.5 0.166626H1.5C1.03977 0.166626 0.666672 0.539726 0.666672 0.999959Z" fill="#6B7280"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.666672 11C0.666672 11.4602 1.03977 11.8333 1.5 11.8333H16.5C16.9602 11.8333 17.3333 11.4602 17.3333 11C17.3333 10.5397 16.9602 10.1666 16.5 10.1666H1.5C1.03977 10.1666 0.666672 10.5397 0.666672 11Z" fill="#6B7280"/>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.26562 3.35449C6.34616 3.13684 6.65384 3.13684 6.73438 3.35449L7.6709 5.88574C7.74686 6.09103 7.90897 6.25314 8.11426 6.3291L10.6455 7.26562C10.8632 7.34616 10.8632 7.65384 10.6455 7.73438L8.11426 8.6709C7.90897 8.74686 7.74686 8.90897 7.6709 9.11426L6.73438 11.6455C6.65384 11.8632 6.34616 11.8632 6.26562 11.6455L5.3291 9.11426C5.25314 8.90897 5.09103 8.74686 4.88574 8.6709L2.35449 7.73438C2.13684 7.65384 2.13684 7.34616 2.35449 7.26562L4.88574 6.3291C5.09103 6.25314 5.25314 6.09103 5.3291 5.88574L6.26562 3.35449Z" stroke="#202224" strokeWidth="0.5"/>
    <path d="M10.8828 0.821289C10.9231 0.712462 11.0769 0.712462 11.1172 0.821289L11.5986 2.12109C11.6467 2.25101 11.749 2.35325 11.8789 2.40137L13.1787 2.88281C13.2875 2.92308 13.2875 3.07692 13.1787 3.11719L11.8789 3.59863C11.749 3.64675 11.6467 3.74899 11.5986 3.87891L11.1172 5.17871C11.0769 5.28754 10.9231 5.28754 10.8828 5.17871L10.4014 3.87891C10.3533 3.74899 10.251 3.64675 10.1211 3.59863L8.82129 3.11719C8.71246 3.07692 8.71246 2.92308 8.82129 2.88281L10.1211 2.40137C10.251 2.35325 10.3533 2.25101 10.4014 2.12109L10.8828 0.821289Z" stroke="#202224" strokeWidth="0.35"/>
    <path d="M2.51465 1.55566C2.51681 1.5571 2.52048 1.5595 2.52344 1.56738L2.97949 2.79883C3.01747 2.90147 3.09853 2.98253 3.20117 3.02051L4.43262 3.47656C4.4405 3.47952 4.4429 3.48319 4.44434 3.48535C4.44639 3.48849 4.44824 3.49346 4.44824 3.5C4.44824 3.50654 4.44639 3.51151 4.44434 3.51465C4.4429 3.51681 4.4405 3.52048 4.43262 3.52344L3.20117 3.97949C3.09853 4.01747 3.01747 4.09853 2.97949 4.20117L2.52344 5.43262C2.52048 5.4405 2.51681 5.4429 2.51465 5.44434C2.51151 5.44639 2.50654 5.44824 2.5 5.44824C2.49346 5.44824 2.48849 5.44639 2.48535 5.44434C2.48319 5.4429 2.47952 5.4405 2.47656 5.43262L2.02051 4.20117C1.98253 4.09853 1.90147 4.01747 1.79883 3.97949L0.567383 3.52344C0.559503 3.52048 0.5571 3.51681 0.555664 3.51465C0.553605 3.51151 0.551758 3.50654 0.551758 3.5C0.551758 3.49346 0.553605 3.48849 0.555664 3.48535C0.5571 3.48319 0.559503 3.47952 0.567383 3.47656L1.79883 3.02051C1.90147 2.98253 1.98253 2.90147 2.02051 2.79883L2.47656 1.56738C2.47952 1.5595 2.48319 1.5571 2.48535 1.55566C2.48849 1.55361 2.49346 1.55176 2.5 1.55176C2.50654 1.55176 2.51151 1.55361 2.51465 1.55566Z" stroke="#202224" strokeWidth="0.35"/>
  </svg>
);

// Basic overlay + container
const Overlay = styled.div`
  position: fixed; inset: 0; background: rgba(9, 30, 66, 0.35); z-index: 1000;
  display: grid; place-items: center; padding: 24px;
`;

const Sheet = styled.div`
  position: absolute;
  width: 1280px;
  height: 680px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.18);
  overflow: hidden;
`;

const Top = styled.div`
  position: absolute;
  width: 100%;
  height: 52px;
  background: #E6F4FF;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-sizing: border-box;
`;

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Title = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4B5462;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AutoSaving = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4B5563;
`;

const CloseBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
  color: #6B7280;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  &:hover {
    background: rgba(0,0,0,0.05);
  }
`;

const Body = styled.div`
  position: absolute;
  top: 52px;
  width: 100%;
  height: calc(100% - 104px);
  display: grid;
  grid-template-columns: 234px 1fr 246px;
  gap: 0;
`;

const LeftCol = styled.div`
  background: #F7FBFE;
  border-right: 1px solid #E5E7EB;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const DateSection = styled.div`
  padding: 24px 24px 16px;
  border-bottom: 1px solid #E5E7EB;
`;

const TodayLabel = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #2D5BFF;
  margin-bottom: 8px;
`;

const DateNumber = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #4B5563;
  margin-bottom: 4px;
`;

const DateNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 4px;
`;

const DateArrow = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  color: #6B7280;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #4B5563;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const DateMonth = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #4B5563;
`;

const LinkNotesSection = styled.div`
  padding: 24px;
  flex: 1;
`;

const LinkNotesTitle = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #202224;
  margin-bottom: 20px;
`;

const SectionLabel = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6B7280;
  margin-bottom: 12px;
`;

const DropdownSection = styled.div`
  margin-bottom: 12px;
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6B7280;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover {
    color: #4B5563;
  }
`;

const DropdownArrow = styled.span`
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  font-size: 12px;
  color: #6B7280;
`;

const DropdownContent = styled.div`
  max-height: ${props => props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-left: 12px;
`;

const MeetingCard = styled.div`
  background: #F7FBFE;
  border: 1px solid #38AEE0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
`;

const MeetingTime = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #202224;
  margin-bottom: 8px;
`;

const MeetingTitle = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #202224;
  margin-bottom: 12px;
`;

const InProgressBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #4B5563;
  
  &::before {
    content: '';
    width: 12px;
    height: 12px;
    background: #58BF55;
    border-radius: 50%;
  }
`;

const NewNoteBtn = styled.button`
  background: #38AEE0;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  color: #FFFFFF;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  margin: 0 24px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Center = styled.div`
  background: #FFFFFF;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const CenterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E5E7EB;
`;

const MeetingLabel = styled.span`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #202224;
  flex: 1;
`;

const CenterHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AutoSavingInline = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #6B7280;
`;

const PageText = styled.span`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #202224;
`;

const AddPageBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  color: #202224;
  padding: 4px 8px;
  border-radius: 4px;
  &:hover {
    background: #F3F4F6;
  }
`;

const Editor = styled.textarea`
  background: #F9FBFF;
  border: 1px solid #E5EEF9;
  border-radius: 12px;
  flex: 1;
  padding: 16px;
  color: #202224;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 14px;
  resize: none;
  outline: none;
  
  &::placeholder {
    color: #64748B;
  }
`;

const RightCol = styled.div`
  background: #F7FBFE;
  border-left: 1px solid #E5E7EB;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #E8EEF5;
  position: relative;
`;

const TabsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const TabItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  position: relative;
  flex-shrink: 0;
`;

const TabIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const TabText = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px 0;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.active ? '#38AEE0' : '#6B7280'};
  position: relative;
  white-space: nowrap;
  
  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -18px;
      height: 2px;
      background: #38AEE0;
      border-radius: 2px;
    }
  `}
`;

const BadgeCounter = styled.span`
  position: absolute;
  top: -2px;
  right: -6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${props => props.color};
  color: #FFFFFF;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AISection = styled.div`
  padding: 20px;
  flex: 1;
  display: ${props => props.show ? 'block' : 'none'};
`;

const TasksSection = styled.div`
  padding: 20px;
  flex: 1;
  display: ${props => props.show ? 'block' : 'none'};
`;

const ToDoSection = styled.div`
  padding: 20px;
  flex: 1;
  display: ${props => props.show ? 'block' : 'none'};
`;

const ScheduleSection = styled.div`
  padding: 20px;
  flex: 1;
  display: ${props => props.show ? 'block' : 'none'};
`;

const ToDoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 9px;
`;

const RadioButton = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #4B5563;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
`;

const ToDoText = styled.span`
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #4B5563;
`;

const AssignButton = styled.button`
  background: transparent;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  padding: 8px 16px;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #6B7280;
  cursor: pointer;
  margin-top: 16px;
`;

const ScheduleEvent = styled.div`
  margin-bottom: 20px;
`;

const EventTitle = styled.h4`
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #1F2937;
  margin: 0 0 4px 0;
`;

const EventDescription = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #6B7280;
  margin-bottom: 4px;
`;

const EventDetail = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #374151;
  margin-bottom: 4px;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
`;

const EventDetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EventIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const EventText = styled.span`
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #374151;
`;

const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const TaskTitle = styled.h4`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #111827;
  margin: 0;
`;

const TaskDescription = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #111827;
  margin-bottom: 20px;
`;

const TaskDetailsList = styled.div`
  margin: 0;
`;

const TaskDetailsTitle = styled.h5`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #111827;
  margin: 0 0 12px 0;
`;

const TaskDetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const TaskDetailIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const TaskDetailLabel = styled.span`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #6B7280;
  flex: 1;
`;

const TaskDetailValue = styled.span`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #111827;
`;

const AIHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const AITitle = styled.h4`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1D4ED8;
  margin: 0;
`;

const AISubtitle = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #1D4ED8;
  margin-bottom: 20px;
`;

const AIList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const AIListItem = styled.li`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #4B5563;
  margin-bottom: 8px;
  position: relative;
  padding-left: 16px;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #4B5563;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  background: #FFFFFF;
  border-top: 1px solid #EEF2F7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-sizing: border-box;
`;

const FooterLeft = styled.div`
  display: flex;
  gap: 16px;
`;

const SummarizeBtn = styled.button`
  background: #FFFFFF;
  border: 0.5px solid #202224;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #202224;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ExportBtn = styled.button`
  background: #FFFFFF;
  border: 0.5px solid #202224;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #202224;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Diary = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('MoM');
  const [notes, setNotes] = useState('');
  const [pastMeetingsOpen, setPastMeetingsOpen] = useState(false);
  const [upcomingMeetingsOpen, setUpcomingMeetingsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <Sheet onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <Top>
          <TopLeft>
            <DiaryMenuIcon />
            <Title>Diary</Title>
          </TopLeft>
          <TopRight>
            <CloseBtn onClick={onClose}>×</CloseBtn>
          </TopRight>
        </Top>

        {/* Main body grid */}
        <Body>
          {/* Left column */}
          <LeftCol>
            <DateSection>
              <TodayLabel>Today</TodayLabel>
              <DateNavigation>
                <DateArrow>‹</DateArrow>
                <DateNumber>05</DateNumber>
                <DateArrow>›</DateArrow>
              </DateNavigation>
              <DateMonth>June 2025</DateMonth>
            </DateSection>

            <LinkNotesSection>
              <LinkNotesTitle>Link Notes to Meeting</LinkNotesTitle>
              
              <DropdownSection>
                <DropdownHeader onClick={() => setPastMeetingsOpen(!pastMeetingsOpen)}>
                  Past Meetings
                  <DropdownArrow isOpen={pastMeetingsOpen}>▼</DropdownArrow>
                </DropdownHeader>
                <DropdownContent isOpen={pastMeetingsOpen}>
                  {/* Past meetings content would go here */}
                </DropdownContent>
              </DropdownSection>
              
              <SectionLabel>Current Meetings</SectionLabel>
              <MeetingCard>
                <MeetingTime>04:00 PM - 05:00 PM</MeetingTime>
                <MeetingTitle>Product Team Sync</MeetingTitle>
                <InProgressBadge>In Progress</InProgressBadge>
              </MeetingCard>
              
              <DropdownSection>
                <DropdownHeader onClick={() => setUpcomingMeetingsOpen(!upcomingMeetingsOpen)}>
                  Upcoming Meetings
                  <DropdownArrow isOpen={upcomingMeetingsOpen}>▼</DropdownArrow>
                </DropdownHeader>
                <DropdownContent isOpen={upcomingMeetingsOpen}>
                  {/* Upcoming meetings content would go here */}
                </DropdownContent>
              </DropdownSection>
            </LinkNotesSection>

            <NewNoteBtn>
              + New Note
            </NewNoteBtn>
          </LeftCol>

          {/* Center column */}
          <Center>
            <CenterHeader>
              <MeetingLabel>Meeting: <strong>Product Team Sync</strong></MeetingLabel>
              <CenterHeaderRight>
                <PageInfo>
                  <PageText>Page 1</PageText>
                  <AddPageBtn>+</AddPageBtn>
                </PageInfo>
                <AutoSavingInline>Auto-saving</AutoSavingInline>
              </CenterHeaderRight>
            </CenterHeader>
            <Editor 
              placeholder="Start taking notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Center>

          {/* Right column */}
          <RightCol>
            <TabsContainer>
              <TabsRow>
                <TabItem>
                  <TabIcon>
                    <svg width="14" height="11" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0H18C19.1046 0 20 0.89543 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.89543 0 2 0ZM2 2V14H18V2H2Z" fill={activeTab === 'MoM' ? '#38AEE0' : '#6B7280'}/>
                      <path d="M4 4H16V6H4V4ZM4 8H16V10H4V8ZM4 12H12V14H4V12Z" fill={activeTab === 'MoM' ? '#38AEE0' : '#6B7280'}/>
                    </svg>
                  </TabIcon>
                  <TabText active={activeTab === 'MoM'} onClick={() => setActiveTab('MoM')}>
                    MoM
                  </TabText>
                </TabItem>

                <TabItem>
                  <TabIcon>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0H18C19.1046 0 20 0.89543 20 2V18C20 19.1046 19.1046 20 18 20H2C0.89543 20 0 19.1046 0 18V2C0 0.89543 0.89543 0 2 0ZM2 2V18H18V2H2Z" fill={activeTab === 'Tasks' ? '#38AEE0' : '#6B7280'}/>
                      <path d="M6 7L8.5 9.5L14 4" stroke={activeTab === 'Tasks' ? '#38AEE0' : '#6B7280'} strokeWidth="2" fill="none"/>
                    </svg>
                  </TabIcon>
                  <TabText active={activeTab === 'Tasks'} onClick={() => setActiveTab('Tasks')}>
                    Tasks
                  </TabText>
                  <BadgeCounter color="#7C3AED">2</BadgeCounter>
                </TabItem>

                <TabItem>
                  <TabIcon>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" fill={activeTab === 'ToDo' ? '#38AEE0' : '#6B7280'}/>
                      <path d="M7 10L9 12L13 8" stroke={activeTab === 'ToDo' ? '#38AEE0' : '#6B7280'} strokeWidth="2" fill="none"/>
                    </svg>
                  </TabIcon>
                  <TabText active={activeTab === 'ToDo'} onClick={() => setActiveTab('ToDo')}>
                    ToDo
                  </TabText>
                  <BadgeCounter color="#3B82F6">4</BadgeCounter>
                </TabItem>

                <TabItem>
                  <TabIcon>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0H18C19.1046 0 20 0.89543 20 2V18C20 19.1046 19.1046 20 18 20H2C0.89543 20 0 19.1046 0 18V2C0 0.89543 0.89543 0 2 0ZM2 2V18H18V2H2Z" fill={activeTab === 'Schedule' ? '#38AEE0' : '#6B7280'}/>
                      <path d="M6 0V4M14 0V4M0 8H20" stroke={activeTab === 'Schedule' ? '#38AEE0' : '#6B7280'} strokeWidth="1"/>
                    </svg>
                  </TabIcon>
                  <TabText active={activeTab === 'Schedule'} onClick={() => setActiveTab('Schedule')}>
                    Schedule
                  </TabText>
                  <BadgeCounter color="#F59E0B">3</BadgeCounter>
                </TabItem>
              </TabsRow>
            </TabsContainer>

            <AISection show={activeTab === 'MoM'}>
              <AIHeader>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" fill="#1D4ED8"/>
                </svg>
                <AITitle>AI Assistant</AITitle>
              </AIHeader>
              <AISubtitle>Analyzing your notes to generate MoM</AISubtitle>
              <AIList>
                <AIListItem style={{ color: '#000000' }}>Review API integration</AIListItem>
                <AIListItem>Discussed new feature</AIListItem>
                <AIListItem>Implementation timeline</AIListItem>
                <AIListItem>Reviewed user feedback from beta testing</AIListItem>
                <AIListItem>Scheduled follow-up meeting for next week</AIListItem>
              </AIList>
            </AISection>

            <TasksSection show={activeTab === 'Tasks'}>
              <AIHeader>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" fill="#1D4ED8"/>
                </svg>
                <AITitle>AI Assistant</AITitle>
              </AIHeader>
              
              <TaskHeader>
                <TaskTitle>Review API Integration</TaskTitle>
              </TaskHeader>
              <TaskDescription>Check if the third-party API integration is working correctly with our authentication system</TaskDescription>
              <TaskDetailsList>
                <TaskDetailsTitle>Details</TaskDetailsTitle>
                <TaskDetailRow>
                  <TaskDetailIcon>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                      <path d="M8 12H16M8 15H13" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </TaskDetailIcon>
                  <TaskDetailLabel>Project</TaskDetailLabel>
                  <TaskDetailValue>AI Tech</TaskDetailValue>
                </TaskDetailRow>
                <TaskDetailRow>
                  <TaskDetailIcon>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                      <path d="M21 21C21 17.134 16.9706 14 12 14C7.02944 14 3 17.134 3 21" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </TaskDetailIcon>
                  <TaskDetailLabel>Assignee</TaskDetailLabel>
                  <TaskDetailValue>Alex Murgan</TaskDetailValue>
                </TaskDetailRow>
                <TaskDetailRow>
                  <TaskDetailIcon>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5M16 2V5M3.5 9H20.5M4 18V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </TaskDetailIcon>
                  <TaskDetailLabel>Due Date</TaskDetailLabel>
                  <TaskDetailValue>May 15, 2025</TaskDetailValue>
                </TaskDetailRow>
              </TaskDetailsList>
            </TasksSection>

            <ToDoSection show={activeTab === 'ToDo'}>
              <AIHeader>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" fill="#1D4ED8"/>
                </svg>
                <AITitle>AI Assistant</AITitle>
              </AIHeader>
              
              <ToDoItem>
                <RadioButton />
                <ToDoText>Review Design System</ToDoText>
              </ToDoItem>
              
              <ToDoItem>
                <RadioButton />
                <ToDoText>Schedule follow-up with client</ToDoText>
              </ToDoItem>
              
              <ToDoItem>
                <RadioButton />
                <ToDoText>Update project timeline</ToDoText>
              </ToDoItem>
              
              <AssignButton>Assign to my ToDo List</AssignButton>
            </ToDoSection>

            <ScheduleSection show={activeTab === 'Schedule'}>
              <AIHeader>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" fill="#1D4ED8"/>
                </svg>
                <AITitle>AI Assistant</AITitle>
              </AIHeader>
              
              <ScheduleEvent>
                <EventTitle>Team Standup</EventTitle>
                <EventDescription>Description</EventDescription>
                <EventDetail>Daily Updates from team members</EventDetail>
                
                <EventDetails>
                  <EventDetailRow>
                    <EventIcon>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2V5M16 2V5M3.5 9H20.5M4 18V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </EventIcon>
                    <EventText>Tomorrow</EventText>
                  </EventDetailRow>
                  
                  <EventDetailRow>
                    <EventIcon>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#6B7280" strokeWidth="1.5"/>
                        <path d="M12 6v6l4 2" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </EventIcon>
                    <EventText>9:30 AM - 10:00 AM</EventText>
                  </EventDetailRow>
                  
                  <EventDetailRow>
                    <EventIcon>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L12 12L22 12" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 12L12 22" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </EventIcon>
                    <EventText>Main Conference</EventText>
                  </EventDetailRow>
                  
                  <EventDetailRow>
                    <EventIcon>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="7" r="4" stroke="#6B7280" strokeWidth="1.5"/>
                      </svg>
                    </EventIcon>
                    <EventText>5 Attendees : Manoj. M</EventText>
                  </EventDetailRow>
                </EventDetails>
              </ScheduleEvent>
            </ScheduleSection>
          </RightCol>
        </Body>

        {/* Footer */}
        <Footer>
          <FooterLeft>
            <SummarizeBtn>
              <StarIcon />
              Summarize Day
            </SummarizeBtn>
            <ExportBtn>
              <ExportIcon />
              Export Notes
            </ExportBtn>
          </FooterLeft>
        </Footer>
      </Sheet>
    </Overlay>
  );
};

export default Diary;