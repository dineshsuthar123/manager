import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Card = styled.section`
  background: #fff;
  border-radius: 10px;
  border: 1px solid #E5E7EB;
  padding: 12px;
  display: grid;
  gap: 12px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #202224;
  font-size: 14px;

  .left {
    display: flex; align-items: center; gap: 10px;
  }
  .updated {
    display: flex; align-items: center; gap: 6px; color: #6B7280; font-size: 12px;
  }
`;

const SelectBox = styled.div`
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px; color: #202224;
  display: inline-flex; align-items: center; gap: 6px;
`;

const DDWrap = styled.div`
  position: relative; display: inline-block; min-width: 220px; /* prevent layout shift */
`;
const DDButton = styled(SelectBox)`
  cursor: pointer; user-select: none; width: 100%; justify-content: space-between;
`;
const DDList = styled.ul`
  position: absolute; top: calc(100% + 6px); left: 0; z-index: 50;
  margin: 0; padding: 6px 0; list-style: none; background: #fff; border: 1px solid #E5E7EB; border-radius: 8px; min-width: 100%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
`;
const DDItem = styled.li`
  padding: 8px 10px; font-size: 12px; color: #111827; cursor: pointer; display: flex; align-items: center; gap: 8px;
  &:hover{ background: #F3F4F6; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(160px, 1fr));
  gap: 12px;
  @media (max-width: 1200px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const Chip = styled.div`
  background: #FFFFFF;
  border: 1px solid #EEF0F2;
  border-radius: 8px;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr auto; /* text + delta */
  gap: 8px;
`;

const Title = styled.div`
  display: flex; align-items: center; gap: 8px; color: #202224; font-size: 14px; font-weight: 500;
`;

const Stat = styled.div`
  display: flex; align-items: baseline; gap: 6px; color: #6B7280;
  .val { font-size: 18px; font-weight: 800; color: #374151; }
`;

const Delta = styled.div`
  display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600;
  &.up { color: #16A34A; }
  &.down { color: #DC2626; }
`;

// small inline icons
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#9CA3AF" strokeWidth="1.6"/>
    <path d="M12 7v6l4 2" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20V4" stroke="#3B82F6" strokeWidth="1.6"/>
    <rect x="7" y="11" width="3" height="7" fill="#3B82F6" rx="1"/>
    <rect x="12" y="8" width="3" height="10" fill="#3B82F6" rx="1"/>
    <rect x="17" y="5" width="3" height="13" fill="#3B82F6" rx="1"/>
  </svg>
);
const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#16A34A" strokeWidth="1.6"/>
    <path d="M9 4v16M4 9h16" stroke="#16A34A" strokeWidth="1.6"/>
  </svg>
);
const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#9333EA" strokeWidth="1.6"/>
    <path d="M12 2v3M21 12h-3M12 21v-3M6 12H3M18.4 5.6l-2.1 2.1M5.6 5.6l2.1 2.1M18.4 18.4l-2.1-2.1M5.6 18.4l2.1-2.1" stroke="#9333EA" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const PeopleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zM8 11c1.657 0 3-1.79 3-4S9.657 3 8 3 5 4.79 5 7s1.343 4 3 4zM8 13c-3.314 0-6 2.239-6 5v2h8" stroke="#EA580C" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M16 13c-3.314 0-6 2.239-6 5v2h12v-2c0-2.761-2.686-5-6-5z" stroke="#EA580C" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const ArrowUp = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19V6M12 6l-6 6M12 6l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5v13M12 18l-6-6M12 18l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TeamScore = () => {
  const [team, setTeam] = useState('Information Systems & AI Tools');
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);
  useEffect(()=>{
    const onDoc = (e)=>{ if(ddRef.current && !ddRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return ()=>document.removeEventListener('mousedown', onDoc);
  },[]);
  const teamOptions = [
    'Information Systems & AI Tools',
    'Payments & Security',
    'Data Platform',
    'Customer Experience'
  ];
  return (
    <Card>
      <Header>
        <div className="left">
          <span style={{fontWeight: 600}}>Team Score:</span>
          <DDWrap ref={ddRef}>
            <DDButton onClick={()=>setOpen(v=>!v)} aria-haspopup="listbox" aria-expanded={open}>
              <span style={{overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{team}</span>
              <ChevronDown />
            </DDButton>
            {open && (
              <DDList role="listbox">
                {teamOptions.map(opt => (
                  <DDItem key={opt} role="option" aria-selected={team===opt} onClick={()=>{ setTeam(opt); setOpen(false); }}>
                    {opt}
                  </DDItem>
                ))}
              </DDList>
            )}
          </DDWrap>
        </div>
        <div className="updated">
          <ClockIcon />
          <span>Last updated: 2 days ago</span>
        </div>
      </Header>

      <Grid>
        <Chip>
          <div>
            <Title><ChartIcon /> Overall</Title>
            <Stat><span className="val">85</span><span>vs SRIB 78</span></Stat>
          </div>
          <Delta className="up"><ArrowUp /> 4.2%</Delta>
        </Chip>

        <Chip>
          <div>
            <Title><BuildingIcon /> Business</Title>
            <Stat><span className="val">76</span><span>vs SRIB 80</span></Stat>
          </div>
          <Delta className="down"><ArrowDown /> 5.2%</Delta>
        </Chip>

        <Chip>
          <div>
            <Title><GearIcon /> Internal Process</Title>
            <Stat><span className="val">92</span><span>vs SRIB 85</span></Stat>
          </div>
          <Delta className="up"><ArrowUp /> 8.1%</Delta>
        </Chip>

        <Chip>
          <div>
            <Title><PeopleIcon /> People Management</Title>
            <Stat><span className="val">88</span><span>vs SRIB 85</span></Stat>
          </div>
          <Delta className="up"><ArrowUp /> 3.7%</Delta>
        </Chip>
      </Grid>
    </Card>
  );
};

export default TeamScore;
