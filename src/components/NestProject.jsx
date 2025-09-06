import React from 'react';
import styled from 'styled-components';

const Card = styled.section`
  background:#fff; border:1px solid #E5E7EB; border-radius:12px; padding:14px; width:100%;
`;

const Header = styled.div`
  display:flex; align-items:center; justify-content:space-between; gap:8px; padding-bottom:10px; border-bottom:1px solid #EEF0F2;
`;

const Left = styled.div`
  display:flex; align-items:center; gap:8px; font-weight:700; color:#1F2937; font-size:16px;
`;

const BlueDot = () => <span style={{width:8,height:8,borderRadius:8,background:'#4D96FF',display:'inline-block'}}/>;

const StatusPill = styled.span`
  background:#10B981; color:#fff; padding:6px 10px; border-radius:999px; font-weight:700; font-size:12px;
`;

const Row = styled.div`
  display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:14px;
`;

const Dates = styled.div`
  display:grid; gap:10px; color:#374151; font-size:14px;
`;

const Label = styled.div`
  font-weight:700; color:#1F2937; margin-top:6px;
`;

const HR = styled.hr`
  border:0; border-top:1px solid #EEF0F2; margin:12px 0;
`;

const TimelineWrap = styled.div`
  margin-top:10px; display:grid; gap:10px;
`;

const Track = styled.div`
  height:18px; background:#E5E7EB; border-radius:10px; position:relative; overflow:hidden;
`;

const Seg = styled.span`
  position:absolute; top:0; bottom:0; border-radius:10px; opacity:.9;
`;

const Today = styled.span`
  position:absolute; top:-16px; height:34px; width:2px; background:#EF4444; left:70%;
  &:after{content:'"Today"'; color:#EF4444; position:absolute; top:-16px; left:-14px; font-size:14px;}
`;

const Footer = styled.div`
  margin-top:14px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;
`;

const Wait = styled.div`
  display:flex; flex-direction:column; gap:8px; color:#374151; font-size:14px; min-width:220px;
`;

const TileWrap = styled.div`
  display:flex; gap:12px;
`;

const Tile = styled.div`
  background:#F9FAFB; border-radius:10px; padding:12px 18px; min-width:110px; text-align:center; color:#202224;
`;

const AddBtn = styled.button`
  width:36px; height:36px; border-radius:50%; border:none; background:#F3F4F6; display:grid; place-items:center; color:#6B7280; cursor:pointer;
`;

const Gauge = () => (
  <svg width="56" height="56" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0-32" fill="#fff" stroke="#E5E7EB" strokeWidth="4"/>
    <path d="M18 2 a16 16 0 1 1 0 32" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="65 100" strokeLinecap="round"/>
    <text x="18" y="21" textAnchor="middle" fontSize="9" fill="#374151" fontWeight="700">65%</text>
  </svg>
);

export default function NestProject(){
  return (
    <Card>
      <Header>
        <Left>
          <BlueDot/> Nest Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <StatusPill>On Track</StatusPill>
        </Left>
        <div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1.5" fill="#9CA3AF"/><circle cx="6" cy="12" r="1.5" fill="#9CA3AF"/><circle cx="18" cy="12" r="1.5" fill="#9CA3AF"/></svg>
        </div>
      </Header>

      <Row>
        <div style={{flex:1}}>
          <Label>Beta Testing Phase</Label>
          <Dates>
            <div>🗓️ Start: Nov 10, 2023</div>
            <div>🗓️ End: Dec 5, 2023</div>
          </Dates>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <div style={{display:'flex', alignItems:'center', gap:8, color:'#374151', whiteSpace:'nowrap'}}>
            <span style={{width:10,height:10,borderRadius:10,background:'#EF4444',display:'inline-block'}}/> Priority: High
          </div>
          <Gauge />
        </div>
      </Row>
      <HR />

      <div>
        <div style={{color:'#374151', fontSize:14, marginBottom:8}}>Timeline</div>
        <div style={{display:'flex', justifyContent:'space-between', color:'#374151', marginBottom:6}}>
          <span>Research</span><span>Design</span><span>Development</span><span>Beta Testing</span><span>Launch</span>
        </div>
        <TimelineWrap>
          <Track>
            <Seg style={{left:'0%', width:'30%', background:'#60A5FA'}}/>
            <Seg style={{left:'30%', width:'15%', background:'#C084FC'}}/>
            <Seg style={{left:'45%', width:'25%', background:'#818CF8'}}/>
            <Seg style={{left:'70%', width:'8%', background:'#D1A054'}}/>
            <Seg style={{left:'78%', width:'12%', background:'#FBBF24'}}/>
            <Seg style={{left:'90%', width:'10%', background:'#4ADE80'}}/>
            <Today />
          </Track>
        </TimelineWrap>
      </div>
      <HR />

      <Footer>
        <Wait>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <span style={{width:16,height:16,borderRadius:3,background:'#F59E0B',display:'inline-block'}}/>
            <span>Waiting on:</span>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:6}}>
            <span>User Testing Results</span>
            <span style={{width:14,height:14,borderRadius:3,background:'#F59E0B',display:'inline-block'}}/>
          </div>
        </Wait>
        <AddBtn aria-label="Add">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/></svg>
        </AddBtn>
        <TileWrap>
          <Tile>
            <div style={{color:'#EF4444', fontWeight:700}}>3</div>
            <div>Blockers</div>
          </Tile>
          <Tile>
            <div style={{color:'#3B82F6', fontWeight:700}}>8</div>
            <div>Tasks</div>
          </Tile>
          <Tile>
            <div style={{color:'#22C55E', fontWeight:700}}>2</div>
            <div>Days</div>
          </Tile>
        </TileWrap>
      </Footer>
    </Card>
  );
}
