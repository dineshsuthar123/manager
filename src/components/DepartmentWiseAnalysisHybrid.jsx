import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Card = styled.section`
  background:#fff; border:1px solid #E5E7EB; border-radius:12px; padding:14px; width:100%; box-sizing:border-box;
`;

const Header = styled.div`
  display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;
  h3{margin:0; font-size:16px; font-weight:700; color:#202224;}
`;

const SelectBox = styled.div`
  background:#F1F8FE; border:1px solid #D0E3FF; color:#202224; border-radius:999px; padding:8px 12px; display:flex; align-items:center; gap:8px; font-weight:700; font-size:14px;
`;
const DDWrap = styled.div` position:relative; display:inline-block; `;
const DDButton = styled(SelectBox)` cursor:pointer; user-select:none; `;
const DDList = styled.ul`
  position:absolute; top:calc(100% + 6px); left:0; z-index:30; margin:0; padding:6px 0; list-style:none; background:#fff; border:1px solid #E5E7EB; border-radius:10px; min-width:240px; box-shadow:0 10px 24px rgba(0,0,0,0.06);
`;
const DDItem = styled.li` padding:10px 12px; font-size:13px; color:#111827; cursor:pointer; &:hover{background:#F3F4F6;} `;

const Tiles = styled.div`
  display:grid; gap:10px; grid-template-columns:1fr; 
`;

const TileRow = styled.div`
  display:grid; grid-template-columns:1fr 1fr; gap:10px;
`;

const Tile = styled.div`
  background:#F9FAFB; border-radius:10px; padding:12px; display:flex; align-items:center; justify-content:space-between; gap:8px;
`;

const TileV = styled.div`
  background:#F9FAFB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;
`;

const Label = styled.div`
  display:flex; align-items:center; gap:8px; color:#202224; font-size:14px; font-weight:400;
`;

const Value = styled.div`
  display:flex; align-items:center; gap:8px; font-weight:700; color:#111827; font-size:22px;
`;

const ValueRow = styled.div`
  width:100%; display:flex; align-items:center; justify-content:space-between;
`;

const Delta = styled.span`
  display:inline-flex; align-items:center; gap:4px; font-size:12px; font-weight:600; color:${p=>p.negative?'#FF6B6B':'#06D6A0'};
`;

const Footer = styled.div`
  display:flex; align-items:center; justify-content:space-between; margin-top:10px; color:#9CA3AF; font-size:12px;
`;

const Dot = ({c}) => <span style={{width:8,height:8,background:c,borderRadius:999,display:'inline-block',marginRight:6}}/>;

const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 21v-6h6v6" stroke="#4D96FF" strokeWidth="1.6"/><path d="M9 7h.01M9 10h.01M12 7h.01M12 10h.01M15 7h.01M15 10h.01" stroke="#4D96FF" strokeWidth="1.6" strokeLinecap="round"/></svg>
);

const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19V5M10 19V9M16 19V3M22 19H2" stroke="#06D6A0" strokeWidth="1.8" strokeLinecap="round"/></svg>
);

const WarnIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l9 16H3l9-16z" stroke="#FFD166" strokeWidth="1.6"/><path d="M12 9v5M12 17.5h.01" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round"/></svg>
);

const BlueDot = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="4" fill="#4D96FF"/></svg>
);

const PeopleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 11a4 4 0 10-8 0M4 21a6 6 0 0116 0" stroke="#457B9D" strokeWidth="1.6" strokeLinecap="round"/></svg>
);

const Up = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 14l6-6 6 6" stroke="#06D6A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const Down = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 10l-6 6-6-6" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function DepartmentWiseAnalysisHybrid(){
  const [group, setGroup] = useState('Smart Infra Group');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(()=>{
    const onDoc=(e)=>{ if(ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return ()=>document.removeEventListener('mousedown', onDoc);
  },[]);
  return (
    <Card>
      <Header>
        <h3>Department Wise Analysis For Hybrid</h3>
      </Header>

      <DDWrap ref={ref}>
        <DDButton onClick={()=>setOpen(v=>!v)}>
          <BuildingIcon /> {group}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'auto'}}><path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </DDButton>
        {open && (
          <DDList>
            {['Smart Infra Group','AI & Technology','Corporate Services','R&D'].map(opt => (
              <DDItem key={opt} onClick={()=>{ setGroup(opt); setOpen(false); }}>{opt}</DDItem>
            ))}
          </DDList>
        )}
      </DDWrap>

      <Tiles>
        <TileRow>
          <TileV>
            <Label><ChartIcon/> Compliance</Label>
            <ValueRow>
              <Value><span>78%</span></Value>
              <Delta><Up/>+2.3%</Delta>
            </ValueRow>
          </TileV>
          <TileV>
            <Label><WarnIcon/> Exceptions</Label>
            <ValueRow>
              <Value><span>15</span></Value>
              <Delta><Up/>+3</Delta>
            </ValueRow>
          </TileV>
        </TileRow>
        <TileV>
          <Label><BlueDot/> Gross Compliance</Label>
          <ValueRow>
            <Value><span>72%</span></Value>
            <Delta negative><Down/>-1.5%</Delta>
          </ValueRow>
        </TileV>
        <TileV>
          <Label><PeopleIcon/> 100% Gross Compliance % of People</Label>
          <ValueRow>
            <Value><span>89%</span></Value>
            <Delta><Up/>+3.7%</Delta>
          </ValueRow>
        </TileV>
      </Tiles>

      <Footer>
        <div>
          <Dot c="#06D6A0"/> &gt;80%
          <span style={{marginLeft:12}}><Dot c="#FFD166"/> 65-80%</span>
          <span style={{marginLeft:12}}><Dot c="#FF6B6B"/> &lt;65%</span>
        </div>
        <span>Last updated: Today, 10:30 AM</span>
      </Footer>
    </Card>
  );
}
