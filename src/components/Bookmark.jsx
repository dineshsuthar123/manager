import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 60px;
  right: 120px;
  z-index: 1000;
`;

const BookmarkCard = styled.div`
  position: relative;
  width: 320px;
  height: 300px;
  background: linear-gradient(179.3deg, #DFEEFC 3.95%, #FFFFFF 59.13%, #DFEEFC 94.17%);
  border: 0.5px solid #E6F4FF;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  position: absolute;
  height: 17px;
  left: 10.31%;
  right: 62.19%;
  top: calc(50% - 17px/2 - 120.5px);
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;
  color: #333333;
  mix-blend-mode: normal;
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 90%;
  right: 5%;
  top: calc(50% - 16px/2 - 118px);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 20.83%;
    right: 20.83%;
    top: 20.83%;
    bottom: 20.83%;
    background: #606060;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    border-radius: 1px;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 20.83%;
    right: 20.83%;
    top: 20.83%;
    bottom: 20.83%;
    background: #606060;
    width: 8px;
    height: 8px;
    transform: rotate(-45deg);
    border-radius: 1px;
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  width: 288px;
  height: 27px;
  left: 16px;
  top: 53px;
  background: #FFFFFF;
  border-radius: 8px;
`;

const SearchInput = styled.input`
  position: absolute;
  width: 240px;
  height: 14px;
  left: 14px;
  top: 6px;
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #606060;
  border: none;
  outline: none;
  background: transparent;
  
  &::placeholder {
    color: #606060;
  }
`;

const Tabs = styled.div`
  position: absolute;
  left: 5%;
  right: 67.5%;
  top: calc(50% - 14px/2 - 50px);
  display: flex;
  gap: 20px;
`;

const Tab = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  cursor: pointer;
  position: relative;
  
  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      width: 85px;
      height: 2px;
      background: #38AEE0;
      bottom: -8px;
      left: 0;
    }
  `}
`;

const OtherTab = styled.div`
  position: absolute;
  height: 14px;
  left: 39.06%;
  right: 31.25%;
  top: calc(50% - 14px/2 - 50px);
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  cursor: pointer;
`;

const Divider = styled.div`
  position: absolute;
  width: 207px;
  height: 0px;
  left: 97px;
  top: 113px;
  border: 0.5px solid #D9D9D9;
`;

const BookmarkRow1 = styled.div`
  position: absolute;
  width: 233px;
  height: 58.8px;
  left: 17px;
  top: 129px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

const BookmarkRow2 = styled.div`
  position: absolute;
  width: 173px;
  height: 58px;
  left: 17px;
  top: 204px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

const BookmarkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 47px;
  height: 58px;
  flex: none;
  order: ${props => props.order || 0};
  flex-grow: 0;
`;

const BookmarkIcon = styled.div`
  width: 36px;
  height: 36px;
  background: ${props => props.gradient};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BookmarkLetter = styled.span`
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  color: ${props => props.color || '#FFFFFF'};
`;

const BookmarkLabel = styled.span`
  width: 47px;
  height: 14px;
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #333333;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const FirstRowItem = styled.div`
  width: ${props => props.width}px;
  height: 58px;
  flex: none;
  order: ${props => props.order};
  flex-grow: 0;
  position: relative;
`;

const FirstRowLabel = styled.div`
  position: absolute;
  height: 14px;
  left: 0%;
  right: ${props => props.rightPercent}%;
  top: calc(50% - 14px/2 + 21.6px);
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #333333;
  mix-blend-mode: normal;
`;

const AddButton = styled.div`
  position: absolute;
  width: 21px;
  height: 14px;
  left: 251px;
  top: 25px;
  font-family: 'Samsung InterFace', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #38AEE0;
  cursor: pointer;
`;

export default function Bookmark({ onClose }) {
  const [activeTab, setActiveTab] = useState('Frequently Used');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Overlay>
      <BookmarkCard>
        <Title>Bookmarks</Title>
        <CloseButton onClick={onClose} />
        
        <SearchContainer>
          <SearchInput 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <Tabs>
          <Tab 
            active={activeTab === 'Frequently Used'} 
            onClick={() => setActiveTab('Frequently Used')}
          >
            Frequently Used
          </Tab>
        </Tabs>
        
        <OtherTab onClick={() => setActiveTab('Other Bookmarks')}>
          Other Bookmarks
        </OtherTab>
        
        <Divider />
        
        {activeTab === 'Frequently Used' && (
          <>
            <BookmarkRow1>
              <FirstRowItem width={44} order={0}>
                <BookmarkIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">
                  <BookmarkLetter>C</BookmarkLetter>
                </BookmarkIcon>
                <FirstRowLabel rightPercent={81.12}>Calendar</FirstRowLabel>
              </FirstRowItem>
              
              <FirstRowItem width={47} order={1}>
                <BookmarkIcon gradient="linear-gradient(135.64deg, #A17DFC 18.89%, #D8CCF4 99.45%)">
                  <BookmarkLetter>H</BookmarkLetter>
                </BookmarkIcon>
                <FirstRowLabel rightPercent={54.08}>HR Portal</FirstRowLabel>
              </FirstRowItem>
              
              <BookmarkItem order={2}>
                <BookmarkIcon gradient="linear-gradient(132.49deg, #00C3D0 2.01%, #4FA0CA 97.99%)">
                  <BookmarkLetter>H</BookmarkLetter>
                </BookmarkIcon>
                <BookmarkLabel>HR Portal</BookmarkLabel>
              </BookmarkItem>
              
              <FirstRowItem width={47} order={3}>
                <BookmarkIcon gradient="linear-gradient(135.64deg, #FFCA8B 16.24%, #FEF9C3 99.45%)">
                  <BookmarkLetter color="#FF9500">M</BookmarkLetter>
                </BookmarkIcon>
                <FirstRowLabel rightPercent={0}>Mail</FirstRowLabel>
              </FirstRowItem>
            </BookmarkRow1>
            
            <BookmarkRow2>
              <BookmarkItem order={0}>
                <BookmarkIcon gradient="linear-gradient(135.64deg, #A17DFC 18.89%, #D8CCF4 99.45%)">
                  <BookmarkLetter>C</BookmarkLetter>
                </BookmarkIcon>
                <BookmarkLabel>Calendar</BookmarkLabel>
              </BookmarkItem>
              
              <BookmarkItem order={1}>
                <BookmarkIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">
                  <BookmarkLetter>A</BookmarkLetter>
                </BookmarkIcon>
                <BookmarkLabel>comm....</BookmarkLabel>
              </BookmarkItem>
              
              <BookmarkItem order={2}>
                <BookmarkIcon gradient="linear-gradient(135.64deg, #A17DFC 18.89%, #D8CCF4 99.45%)">
                  <BookmarkLetter>H</BookmarkLetter>
                </BookmarkIcon>
                <BookmarkLabel>HR Portal</BookmarkLabel>
              </BookmarkItem>
            </BookmarkRow2>
            
            <AddButton>Add</AddButton>
          </>
        )}
      </BookmarkCard>
    </Overlay>
  );
}