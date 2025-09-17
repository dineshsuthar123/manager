import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 62px;
  right: 20px;
  z-index: 1000;
  max-height: calc(100vh - 80px);
  overflow: hidden;
`;

const BookmarkCard = styled.div`
  position: relative;
  width: 420px;
  max-height: calc(100vh - 80px);
  background: linear-gradient(171.77deg, #DBFBFF -6.17%, #E5F8FF 25.06%, #E4DAFF 84.43%);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  position: relative;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #333333;
`;

const BookmarkIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  color: #38AEE0;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #2A8CB8;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 18px;
  
  &:hover {
    color: #333;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  flex: 1;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 14px;
  color: #333;
  
  &::placeholder {
    color: #999;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 8px 0;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 14px;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#333' : '#666'};
  cursor: pointer;
  position: relative;
  
  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: #38AEE0;
      border-radius: 1px;
    }
  `}
  
  &:hover {
    color: #333;
  }
`;

const Content = styled.div`
  padding: 20px;
  overflow-y: auto;
  flex: 1;
  max-height: calc(100vh - 220px);
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(56, 174, 224, 0.3);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(56, 174, 224, 0.5);
  }
`;

const Section = styled.div`
  margin-bottom: 32px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h3`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SectionIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const SeeAllButton = styled.button`
  background: none;
  border: none;
  color: #38AEE0;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    color: #2A8CB8;
  }
`;

const BookmarkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 16px;
`;

const BookmarkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const AppIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${props => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.textColor || '#FFFFFF'};
  position: relative;
`;

const AppLabel = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #333;
  text-align: center;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SmartSuggestionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 16px;
`;

const SuggestionCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }
`;

const CardTitle = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

const CardSubtitle = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
`;

const CardTime = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 11px;
  color: #999;
`;

const TimeSensitiveCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 12px;
  position: relative;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const CardInfo = styled.div`
  flex: 1;
`;

const SharedBadge = styled.div`
  background: rgba(56, 174, 224, 0.1);
  color: #38AEE0;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  background: rgba(56, 174, 224, 0.1);
  border: none;
  color: #38AEE0;
  padding: 8px 20px;
  border-radius: 20px;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: rgba(56, 174, 224, 0.2);
  }
`;

const SubtitleText = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #666;
  margin-bottom: 16px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const CategoryIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.background};
  border: 2px solid ${props => props.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${props => props.iconColor || props.borderColor};
  position: relative;
  
  /* Custom icon styles */
  &::before {
    content: ${props => props.iconContent ? `"${props.iconContent}"` : '""'};
    font-family: 'Samsung InterFace', sans-serif;
    font-weight: 600;
  }
`;

const CategoryLabel = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #202224;
  text-align: center;
`;

const DragDropContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const DragDropText = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #202224;
`;

const FolderIcon = styled.div`
  font-size: 16px;
  color: #36A8DE;
`;

const ResourceFolderIcon = styled.div`
  width: 16px;
  height: 16px;
  color: #4880FF;
  font-size: 14px;
`;

// Shared Tab Styled Components
const SharedContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SharedHeader = styled.div`
  margin-bottom: 20px;
`;

const SharedTitle = styled.h2`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #333333;
  margin: 0 0 16px 0;
`;

const SharedTabs = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #E5E8EB;
`;

const SharedTab = styled.button`
  background: none;
  border: none;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? '#4880FF' : '#606060'};
  padding: 8px 0;
  border-bottom: ${props => props.active ? '2px solid #4880FF' : '2px solid transparent'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #4880FF;
  }
`;

const SharedResourceCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E5E8EB;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const ResourceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const ResourceIcon = styled.div`
  font-size: 16px;
  margin-right: 12px;
  margin-top: 2px;
`;

const ResourceContent = styled.div`
  flex: 1;
`;

const ResourceTitle = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 4px;
`;

const ResourceSubtitle = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #606060;
`;

const MoreOptionsIcon = styled.div`
  font-size: 16px;
  color: #606060;
  cursor: pointer;
`;

const ResourceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ResourceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #333333;
  padding: 4px 0;
`;

const ExpenseCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E5E8EB;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
`;

const ExpenseHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ExpenseIcon = styled.div`
  font-size: 16px;
  margin-right: 12px;
`;

const ExpenseInfo = styled.div`
  flex: 1;
`;

const ExpenseTitle = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 4px;
`;

const ExpenseSubtitle = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #606060;
`;

// All Bookmarks Tab Additional Styled Components
const BookmarkContainer = styled.div`
  width: 100%;
`;

const BookmarkGroupRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BookmarkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BookmarkRowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const BookmarkGroupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const SmallBookmarkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const BookmarkGroupItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SmallAppIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: ${props => props.gradient || '#4880FF'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: white;
`;

const MoreIcon = styled.div`
  font-size: 12px;
  color: #606060;
  cursor: pointer;
`;

const SmallLabels = styled.div`
  display: flex;
  gap: 16px;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 10px;
  color: #606060;
  margin-top: 4px;
  
  span {
    width: 24px;
    text-align: center;
  }
`;

const BookmarkBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
`;

const BottomBookmarkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background: #F5F7FA;
    border-radius: 8px;
  }
`;

const LargeAppIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: ${props => props.gradient || '#4880FF'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

const SmallLabel = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 8px;
  color: #333333;
  text-align: center;
  margin-top: 4px;
`;

const GroupMoreIcon = styled.div`
  font-size: 14px;
  color: #606060;
  cursor: pointer;
  text-align: center;
  margin-top: 8px;
`;

const ExpenseTime = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #FF6B6B;
  display: flex;
  align-items: center;
  gap: 4px;
  
  span {
    font-size: 10px;
  }
`;

const ResourceActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const ExpenseNote = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  color: #666666;
  margin-top: 12px;
  padding: 8px;
  background: #F8F9FA;
  border-radius: 4px;
`;

const ExtendButton = styled.button`
  background: #E8F5E8;
  border: 1px solid #4CAF50;
  border-radius: 4px;
  color: #4CAF50;
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 12px;
  cursor: pointer;
  margin-top: 12px;
  transition: background-color 0.2s ease;

  &:hover {
    background: #DCEDC8;
  }
`;

export default function Bookmark({ onClose }) {
  const [activeTab, setActiveTab] = useState('Smart Collections');
  const [sharedActiveTab, setSharedActiveTab] = useState('Shared with you');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Overlay>
      <BookmarkCard>
        <Header>
          <HeaderTop>
            <Title>
              <BookmarkIcon>🔖</BookmarkIcon>
              Quick Action
            </Title>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <AddButton>+ Add</AddButton>
              <CloseButton onClick={onClose}>×</CloseButton>
            </div>
          </HeaderTop>
          
          <SearchContainer>
            <SearchInput 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          
          <TabContainer>
            <Tab 
              active={activeTab === 'All Bookmarks'} 
              onClick={() => setActiveTab('All Bookmarks')}
            >
              All Bookmarks
            </Tab>
            <Tab 
              active={activeTab === 'Smart Collections'} 
              onClick={() => setActiveTab('Smart Collections')}
            >
              Smart Collections
            </Tab>
            <Tab 
              active={activeTab === 'Shared'} 
              onClick={() => setActiveTab('Shared')}
            >
              Shared
            </Tab>
          </TabContainer>
        </Header>

        <Content>
          {activeTab === 'Smart Collections' && (
            <>
              <Section>
                <SectionHeader>
                  <SectionTitle>Frequently Used</SectionTitle>
                  <SeeAllButton>See All</SeeAllButton>
                </SectionHeader>
                <BookmarkGrid>
                  <BookmarkItem>
                    <AppIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">
                      C
                    </AppIcon>
                    <AppLabel>Calendar</AppLabel>
                  </BookmarkItem>
                  <BookmarkItem>
                    <AppIcon gradient="linear-gradient(135.64deg, #A17DFC 18.89%, #D8CCF4 99.45%)">
                      H
                    </AppIcon>
                    <AppLabel>HR Portal</AppLabel>
                  </BookmarkItem>
                  <BookmarkItem>
                    <AppIcon gradient="linear-gradient(132.49deg, #00C3D0 2.01%, #4FA0CA 97.99%)">
                      H
                    </AppIcon>
                    <AppLabel>HR Portal</AppLabel>
                  </BookmarkItem>
                  <BookmarkItem>
                    <AppIcon gradient="linear-gradient(135.64deg, #FFCA8B 16.24%, #FEF9C3 99.45%)" textColor="#FF9500">
                      M
                    </AppIcon>
                    <AppLabel>Mail</AppLabel>
                  </BookmarkItem>
                </BookmarkGrid>
              </Section>

              <Section>
                <SectionHeader>
                  <SectionTitle>
                    <SectionIcon>💡</SectionIcon>
                    Smart Suggestion
                  </SectionTitle>
                </SectionHeader>
                <SubtitleText>Based on your Recent activity</SubtitleText>
                <SmartSuggestionGrid>
                  <SuggestionCard>
                    <CardTitle>Reach Development</CardTitle>
                    <CardSubtitle>Article</CardSubtitle>
                    <CardTime>2 hrs ago</CardTime>
                  </SuggestionCard>
                  <SuggestionCard>
                    <CardTitle>Design System</CardTitle>
                    <CardSubtitle>Article</CardSubtitle>
                  </SuggestionCard>
                </SmartSuggestionGrid>
              </Section>

              <Section>
                <SectionHeader>
                  <SectionTitle>Recently Added</SectionTitle>
                  <SeeAllButton>See All</SeeAllButton>
                </SectionHeader>
                <SmartSuggestionGrid>
                  <SuggestionCard>
                    <CardTitle>Product Roadmap</CardTitle>
                    <CardSubtitle>📁 Check after release</CardSubtitle>
                    <CardTime>2 hrs ago</CardTime>
                  </SuggestionCard>
                  <SuggestionCard>
                    <CardTitle>Brand Guidelines</CardTitle>
                    <CardSubtitle>📁 For Onboarding</CardSubtitle>
                    <CardTime>Yesterday</CardTime>
                  </SuggestionCard>
                </SmartSuggestionGrid>
              </Section>

              <Section>
                <SectionHeader>
                  <SectionTitle>Time-Sensitive</SectionTitle>
                  <SeeAllButton>See All</SeeAllButton>
                </SectionHeader>
                
                <TimeSensitiveCard>
                  <CardHeader>
                    <CardInfo>
                      <CardTitle>Team Meeting Notes</CardTitle>
                    </CardInfo>
                    <SharedBadge>
                      👥 Shared
                    </SharedBadge>
                  </CardHeader>
                  <TimeInfo>
                    <span>⏰</span>
                    Reminder in 2 days
                  </TimeInfo>
                  <ActionButtons>
                    <ActionButton>
                      📄 Open
                    </ActionButton>
                    <ActionButton>
                      🔗 Share
                    </ActionButton>
                  </ActionButtons>
                </TimeSensitiveCard>

                <TimeSensitiveCard>
                  <CardHeader>
                    <CardInfo>
                      <CardTitle>Quarterly Report</CardTitle>
                    </CardInfo>
                  </CardHeader>
                  <TimeInfo>
                    <span>⚠️</span>
                    Expires in 5 days
                  </TimeInfo>
                  <ActionButtons>
                    <ActionButton>
                      📄 Open
                    </ActionButton>
                    <ActionButton>
                      🔗 Share
                    </ActionButton>
                  </ActionButtons>
                </TimeSensitiveCard>
              </Section>
            </>
          )}

          {activeTab === 'All Bookmarks' && (
            <>
              <Section>
                <SectionHeader>
                  <SectionTitle>Categories</SectionTitle>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <AddButton>+ Add</AddButton>
                    <SeeAllButton>See All</SeeAllButton>
                  </div>
                </SectionHeader>
                
                <CategoryGrid>
                  <CategoryItem>
                    <CategoryIcon 
                      background="#DFEEFC" 
                      borderColor="#2196F3"
                      iconColor="#2196F3"
                    >
                      🎓
                    </CategoryIcon>
                    <CategoryLabel>Learning</CategoryLabel>
                  </CategoryItem>
                  <CategoryItem>
                    <CategoryIcon 
                      background="#E8DEF8" 
                      borderColor="#9F7AEA"
                      iconColor="#9F7AEA"
                    >
                      ✓
                    </CategoryIcon>
                    <CategoryLabel>Daily Tools</CategoryLabel>
                  </CategoryItem>
                  <CategoryItem>
                    <CategoryIcon 
                      background="#FEF9C3" 
                      borderColor="#FF9500"
                      iconColor="#FF9500"
                    >
                      💡
                    </CategoryIcon>
                    <CategoryLabel>Quick Access</CategoryLabel>
                  </CategoryItem>
                  <CategoryItem>
                    <CategoryIcon 
                      background="#DDF9C8" 
                      borderColor="#4CAF50"
                      iconColor="#4CAF50"
                    >
                      🔧
                    </CategoryIcon>
                    <CategoryLabel>Dev.</CategoryLabel>
                  </CategoryItem>
                </CategoryGrid>
              </Section>

              <Section>
                <DragDropContainer>
                  <DragDropText>Drag and drop bookmarks to create folders</DragDropText>
                  <FolderIcon>📁</FolderIcon>
                </DragDropContainer>
              </Section>

              <Section>
                <BookmarkContainer>
                  <BookmarkGroupRow>
                    <BookmarkGroup>
                      <BookmarkRowGrid>
                        <SmallBookmarkItem>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">C</SmallAppIcon>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #99D7EC 30.04%, #9BCDFF 99.45%)">A</SmallAppIcon>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #4CB3C1 30.04%, #9BCDFF 99.45%)">X</SmallAppIcon>
                          <MoreIcon>⋯</MoreIcon>
                        </SmallBookmarkItem>
                        <SmallBookmarkItem>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #4880FF 30.04%, #9BCDFF 99.45%)">B</SmallAppIcon>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #01A8D2 30.04%, #9BCDFF 99.45%)">C</SmallAppIcon>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">D</SmallAppIcon>
                          <MoreIcon>⋯</MoreIcon>
                        </SmallBookmarkItem>
                        <SmallBookmarkItem>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #2196F3 30.04%, #9BCDFF 99.45%)">C</SmallAppIcon>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #6896FF 30.04%, #9BCDFF 99.45%)">C</SmallAppIcon>
                          <MoreIcon>⋯</MoreIcon>
                        </SmallBookmarkItem>
                      </BookmarkRowGrid>
                      <SmallLabels>
                        <span>Leo..</span>
                        <span>Ne..</span>
                        <span>Ne..</span>
                      </SmallLabels>
                    </BookmarkGroup>

                    <BookmarkGroup>
                      <BookmarkGroupGrid>
                        <BookmarkGroupItem>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">C</SmallAppIcon>
                          <SmallLabel>React</SmallLabel>
                        </BookmarkGroupItem>
                        <BookmarkGroupItem>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">C</SmallAppIcon>
                          <SmallLabel>React</SmallLabel>
                        </BookmarkGroupItem>
                        <BookmarkGroupItem>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">C</SmallAppIcon>
                          <SmallLabel>React</SmallLabel>
                        </BookmarkGroupItem>
                        <BookmarkGroupItem>
                          <SmallAppIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">C</SmallAppIcon>
                          <SmallLabel>React</SmallLabel>
                        </BookmarkGroupItem>
                      </BookmarkGroupGrid>
                      <GroupMoreIcon>⋯</GroupMoreIcon>
                    </BookmarkGroup>
                  </BookmarkGroupRow>

                  <BookmarkBottomRow>
                    <BottomBookmarkItem>
                      <AppIcon gradient="linear-gradient(135.64deg, #36A8DE 30.04%, #9BCDFF 99.45%)">R</AppIcon>
                      <AppLabel>React</AppLabel>
                      <MoreIcon style={{ position: 'absolute', top: '8px', right: '8px' }}>⋯</MoreIcon>
                    </BottomBookmarkItem>
                    <BottomBookmarkItem>
                      <AppIcon gradient="linear-gradient(135.64deg, #2196F3 30.04%, #9BCDFF 99.45%)">H</AppIcon>
                      <AppLabel>HTML</AppLabel>
                      <MoreIcon style={{ position: 'absolute', top: '8px', right: '8px' }}>⋯</MoreIcon>
                    </BottomBookmarkItem>
                    <BottomBookmarkItem>
                      <AppIcon gradient="linear-gradient(135.64deg, #4880FF 30.04%, #9BCDFF 99.45%)">C</AppIcon>
                      <AppLabel>CSS</AppLabel>
                      <MoreIcon style={{ position: 'absolute', top: '8px', right: '8px' }}>⋯</MoreIcon>
                    </BottomBookmarkItem>
                    <BottomBookmarkItem>
                      <AppIcon gradient="linear-gradient(135.64deg, #6FB7FF 30.04%, #9BCDFF 99.45%)">J</AppIcon>
                      <AppLabel>JAVA</AppLabel>
                      <MoreIcon style={{ position: 'absolute', top: '8px', right: '8px' }}>⋯</MoreIcon>
                    </BottomBookmarkItem>
                  </BookmarkBottomRow>
                </BookmarkContainer>
              </Section>
            </>
          )}

          {activeTab === 'Shared' && (
            <SharedContainer>
              <SharedHeader>
                <SharedTitle>Team - Bookmark</SharedTitle>
                <SharedTabs>
                  <SharedTab 
                    active={sharedActiveTab === 'Shared with you'} 
                    onClick={() => setSharedActiveTab('Shared with you')}
                  >
                    Shared with you
                  </SharedTab>
                  <SharedTab 
                    active={sharedActiveTab === 'You Shared'} 
                    onClick={() => setSharedActiveTab('You Shared')}
                  >
                    You Shared
                  </SharedTab>
                </SharedTabs>
              </SharedHeader>

              {sharedActiveTab === 'Shared with you' && (
                <>
                  <SharedResourceCard>
                    <ResourceHeader>
                      <ResourceIcon>📁</ResourceIcon>
                      <ResourceContent>
                        <ResourceTitle>Must-read Resources</ResourceTitle>
                        <ResourceSubtitle>Shared by Alex for the design team</ResourceSubtitle>
                      </ResourceContent>
                      <MoreOptionsIcon>⋯</MoreOptionsIcon>
                    </ResourceHeader>
                    <ResourceItems>
                      <ResourceItem>
                        <ResourceFolderIcon>📁</ResourceFolderIcon>
                        Design Trends
                      </ResourceItem>
                      <ResourceItem>
                        <ResourceFolderIcon>📁</ResourceFolderIcon>
                        2025 UX Research guidelines
                      </ResourceItem>
                    </ResourceItems>
                  </SharedResourceCard>

                  <ExpenseCard>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                      <div style={{ fontSize: '16px', marginRight: '12px' }}>💻</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'Samsung InterFace', fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '4px' }}>
                          Onboarding Material
                        </div>
                        <div style={{ fontFamily: 'Samsung InterFace', fontSize: '12px', color: '#FF6B6B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span>⚠️</span>
                          Expires in 3 days
                        </div>
                      </div>
                      <div style={{ fontSize: '16px', color: '#606060', cursor: 'pointer' }}>⋯</div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                      <button style={{ background: '#4880FF', border: 'none', borderRadius: '4px', color: 'white', fontFamily: 'Samsung InterFace', fontSize: '12px', fontWeight: 500, padding: '6px 12px', cursor: 'pointer' }}>
                        📄 Welcome Guide
                      </button>
                      <button style={{ background: '#4880FF', border: 'none', borderRadius: '4px', color: 'white', fontFamily: 'Samsung InterFace', fontSize: '12px', fontWeight: 500, padding: '6px 12px', cursor: 'pointer' }}>
                        📄 Team Structure
                      </button>
                    </div>
                  </ExpenseCard>

                  <ExpenseCard>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                      <div style={{ fontSize: '16px', marginRight: '12px' }}>💻</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'Samsung InterFace', fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '4px' }}>
                          Product Dashboard
                        </div>
                        <div style={{ fontFamily: 'Samsung InterFace', fontSize: '12px', color: '#FF6B6B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span>⚠️</span>
                          Expires in 3 days
                        </div>
                      </div>
                      <div style={{ fontSize: '16px', color: '#606060', cursor: 'pointer' }}>⋯</div>
                    </div>
                    <div style={{ fontFamily: 'Samsung InterFace', fontSize: '12px', color: '#666', marginTop: '12px', padding: '8px', background: '#F8F9FA', borderRadius: '4px' }}>
                      Check again after release on Friday. Need to validate metrics
                    </div>
                    <button style={{ background: '#E8F5E8', border: '1px solid #4CAF50', borderRadius: '4px', color: '#4CAF50', fontFamily: 'Samsung InterFace', fontSize: '12px', fontWeight: 500, padding: '8px 12px', cursor: 'pointer', marginTop: '12px' }}>
                      🕐 Extend 1 week
                    </button>
                  </ExpenseCard>

                  <Section>
                    <SectionHeader>
                      <SectionTitle>Time-Sensitive</SectionTitle>
                      <SeeAllButton>See All</SeeAllButton>
                    </SectionHeader>
                    
                    <TimeSensitiveCard>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: 'Samsung InterFace', fontSize: '14px', fontWeight: 600, color: '#333' }}>
                            Team Meeting Notes
                          </div>
                        </div>
                        <div style={{ background: '#E3F2FD', color: '#1976D2', fontFamily: 'Samsung InterFace', fontSize: '10px', fontWeight: 500, padding: '4px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          👥 Shared
                        </div>
                      </div>
                      <div style={{ fontFamily: 'Samsung InterFace', fontSize: '12px', color: '#FF6B6B', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                        <span>⏰</span>
                        Reminder in 2 days
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ background: '#F5F7FA', border: '1px solid #E5E8EB', borderRadius: '4px', color: '#333', fontFamily: 'Samsung InterFace', fontSize: '12px', fontWeight: 500, padding: '6px 12px', cursor: 'pointer' }}>
                          📄 Open
                        </button>
                        <button style={{ background: '#F5F7FA', border: '1px solid #E5E8EB', borderRadius: '4px', color: '#333', fontFamily: 'Samsung InterFace', fontSize: '12px', fontWeight: 500, padding: '6px 12px', cursor: 'pointer' }}>
                          🔗 Share
                        </button>
                      </div>
                    </TimeSensitiveCard>

                    <TimeSensitiveCard>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: 'Samsung InterFace', fontSize: '14px', fontWeight: 600, color: '#333' }}>
                            Quarterly Report
                          </div>
                        </div>
                      </div>
                      <div style={{ fontFamily: 'Samsung InterFace', fontSize: '12px', color: '#FF6B6B', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                        <span>⚠️</span>
                        Expires in 5 days
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ background: '#F5F7FA', border: '1px solid #E5E8EB', borderRadius: '4px', color: '#333', fontFamily: 'Samsung InterFace', fontSize: '12px', fontWeight: 500, padding: '6px 12px', cursor: 'pointer' }}>
                          📄 Open
                        </button>
                        <button style={{ background: '#F5F7FA', border: '1px solid #E5E8EB', borderRadius: '4px', color: '#333', fontFamily: 'Samsung InterFace', fontSize: '12px', fontWeight: 500, padding: '6px 12px', cursor: 'pointer' }}>
                          🔗 Share
                        </button>
                      </div>
                    </TimeSensitiveCard>
                  </Section>
                </>
              )}

              {sharedActiveTab === 'You Shared' && (
                <div style={{ color: '#666', textAlign: 'center', padding: '40px 0' }}>
                  Items you've shared will appear here
                </div>
              )}
            </SharedContainer>
          )}
        </Content>
      </BookmarkCard>
    </Overlay>
  );
}