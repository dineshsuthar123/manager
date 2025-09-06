import React, { useState } from 'react';
import styled from 'styled-components';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Card = styled.section`
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 14px;
  width: 100%;
`;

const Header = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px;
  h3{margin:0; font-size:16px; font-weight:700; color:#202224;}
`;

const SelectBox = styled.div`
  background:#fff; border:1px solid #E5E7EB; border-radius:8px; padding:6px 10px; font-size:12px; color:#202224; display:inline-flex; align-items:center; gap:6px;
`;

const Panel = styled.div`
  background:#F8F9FA; border:1px solid #EEF0F2; border-radius:10px; padding:10px; display:grid; gap:8px; margin-bottom: 10px;
`;

const Legend = styled.div`
  display:flex; align-items:center; gap:12px; justify-content:center; flex-wrap:wrap; color:#6B7280; font-size:12px;
  .dot{width:10px; height:10px; border-radius:50%; display:inline-block; margin-right:6px;}
`;

const SubHeader = styled.div`
  display:flex; align-items:center; justify-content:space-between; gap:8px; font-weight:700; color:#202224; font-size:14px; margin-top:6px;
`;

const DeptRow = styled.div`
  display:grid; grid-template-columns: auto 1fr auto; align-items:center; gap:8px; padding:8px 0;
`;

const Bar = styled.div`
  height:10px; background:#E5E7EB; border-radius:8px; overflow:hidden; position:relative;
  > span{ display:block; height:100%; border-radius:8px; }
`;

const Pill = styled.span`
  font-size:11px; color:#fff; border-radius:6px; padding:2px 6px; font-weight:600;
`;

const Accord = styled.button`
  width:100%; display:flex; align-items:center; justify-content:space-between; gap:8px; padding:12px 10px; border:1px solid #E5E7EB; background:#fff; border-radius:8px; cursor:pointer; font-weight:700; color:#202224; margin-top:8px;
`;

const Caret = ({open}) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform:open?'rotate(180deg)':'none', transition:'transform .2s'}}>
    <path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BulbIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18h6M9 22h6" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round"/><path d="M12 2a7 7 0 00-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 00-4-12z" stroke="#F59E0B" strokeWidth="1.6"/></svg>
);

const LeafIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12c6-10 16-8 16-8s2 10-8 16C5 23 2 18 4 12z" stroke="#22C55E" strokeWidth="1.6"/></svg>
);

// 2025 Exit Reason card styles
const ExitWrap = styled.div`
  background:#FFFFFF; border:1px solid #E5E7EB; border-radius:12px; overflow:hidden; width:100%; max-width:100%; box-sizing:border-box;
`;
const ExitHead = styled.div`
  background:#1A365D; color:#fff; padding:12px 14px; display:flex; align-items:center; justify-content:space-between; gap:8px;
  h4{margin:0; font-size:16px; font-weight:700;}
`;
const BarsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="12" width="3" height="6" rx="1" fill="#fff"/>
    <rect x="7" y="8" width="3" height="10" rx="1" fill="#fff" opacity="0.9"/>
    <rect x="12" y="5" width="3" height="13" rx="1" fill="#fff" opacity="0.8"/>
  </svg>
);
const ExitTable = styled.div`
  padding:10px 12px 12px; display:grid; gap:10px; width:100%; box-sizing:border-box;
`;
const ExitHeaderRow = styled.div`
  display:grid; grid-template-columns: 28px minmax(0,1fr) max-content; gap:8px; color:#6B7280; font-size:12px; padding:4px 0; border-bottom:1px solid #E5E7EB; box-sizing:border-box;
`;
const ExitRow = styled.div`
  display:grid; grid-template-columns: 28px minmax(0,1fr) max-content; grid-template-rows:auto auto; column-gap:8px; row-gap:6px; align-items:center; padding:10px 8px; background:#F9FAFB; border-radius:8px; box-sizing:border-box;
`;
const ExitBarTrack = styled.div`
  height:8px; background:#E5E7EB; border-radius:6px; overflow:hidden; width:100%;
`;
const ExitBarFill = styled.div`
  height:100%; width:${(p)=>p.w||'0'}; background:${(p)=>p.c||'#EF4444'}; border-radius:6px;
`;
const AlertBox = styled.div`
  background:#FEE2E2; border:1px solid #FCA5A5; color:#991B1B; border-radius:10px; padding:12px; display:flex; gap:10px; align-items:flex-start; margin: 10px 12px 8px;
`;
const SmallInfo = styled.div`
  color:#6B7280; font-size:12px; padding:0 12px 12px;
`;

const data = [
  { m: 'May', cs: 12, nh: 7, pe: 8, swc: 6 },
  { m: 'Jun', cs: 14, nh: 8, pe: 9, swc: 7 },
  { m: 'Jul', cs: 11, nh: 9, pe: 6, swc: 7 },
  { m: 'Aug', cs: 15, nh: 10, pe: 9, swc: 8 },
  { m: 'Sep', cs: 13, nh: 7, pe: 7, swc: 7 },
  { m: 'Oct', cs: 16, nh: 9, pe: 10, swc: 9 },
];

export default function AttritionOverview(){
  const [openExit,setOpenExit]=useState(false);
  const [openTb,setOpenTb]=useState(false);

  return (
    <Card>
      <Header>
        <h3>Attrition Overview</h3>
        <SelectBox>Last 6 months <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></SelectBox>
      </Header>

      <Panel>
        <div style={{fontWeight:700, color:'#202224', fontSize:14}}>Month-on-Month Trend</div>
        <div style={{width:'100%', height:160}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{left:8,right:8,top:8,bottom:0}}>
              <XAxis dataKey="m" stroke="#9CA3AF" fontSize={11} tickLine={false} axisLine={{stroke:'#E5E7EB'}}/>
              <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} axisLine={{stroke:'#E5E7EB'}} domain={[0, 18]}/>
              <Tooltip contentStyle={{fontSize:12}}/>
              <Line type="monotone" dataKey="cs" stroke="#69AAFE" strokeWidth={2} dot={{r:2, fill:'#fff', stroke:'#69AAFE'}}/>
              <Line type="monotone" dataKey="nh" stroke="#94D8B8" strokeWidth={2} dot={{r:2, fill:'#fff', stroke:'#94D8B8'}}/>
              <Line type="monotone" dataKey="pe" stroke="#FFBB89" strokeWidth={2} dot={{r:2, fill:'#fff', stroke:'#FFBB89'}}/>
              <Line type="monotone" dataKey="swc" stroke="#C2A5E0" strokeWidth={2} dot={{r:2, fill:'#fff', stroke:'#C2A5E0'}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <Legend>
          <span><span className="dot" style={{background:'#69AAFE'}}/>CS</span>
          <span><span className="dot" style={{background:'#94D8B8'}}/>New Hire</span>
          <span><span className="dot" style={{background:'#FFBB89'}}/>PE</span>
          <span><span className="dot" style={{background:'#C2A5E0'}}/>SWC</span>
        </Legend>
      </Panel>

      <SubHeader>
        <span>Department-wise Attrition</span>
        <SelectBox>AI & Technology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></SelectBox>
      </SubHeader>

      {/* Voluntary */}
      <DeptRow>
        <div style={{fontSize:12, color:'#202224'}}>Voluntary</div>
        <Bar><span style={{width:'60%', background:'#69AAFE'}}/></Bar>
        <div style={{fontSize:12, color:'#202224'}}>15.1%</div>
        <div style={{gridColumn:'1/4'}}>
          <Pill style={{background:'#69AAFE'}}>68 / 45</Pill>
        </div>
      </DeptRow>

      {/* CS */}
      <DeptRow>
        <div style={{fontSize:12, color:'#202224'}}>CS</div>
        <Bar><span style={{width:'52%', background:'#6AD3A2'}}/></Bar>
        <div style={{fontSize:12, color:'#202224'}}>13.1%</div>
        <div style={{gridColumn:'1/4'}}>
          <Pill style={{background:'#6AD3A2'}}>42 / 30</Pill>
        </div>
      </DeptRow>

      {/* New Hire */}
      <DeptRow>
        <div style={{fontSize:12, color:'#202224'}}>New Hire</div>
        <Bar><span style={{width:'53%', background:'#FFA96B'}}/></Bar>
        <div style={{fontSize:12, color:'#202224'}}>13.3%</div>
        <div style={{gridColumn:'1/4'}}>
          <Pill style={{background:'#FFA96B'}}>24 / 18</Pill>
        </div>
      </DeptRow>

      {/* PE */}
      <DeptRow>
        <div style={{fontSize:12, color:'#202224'}}>PE</div>
        <Bar><span style={{width:'56%', background:'#B78EE1'}}/></Bar>
        <div style={{fontSize:12, color:'#202224'}}>14.0%</div>
        <div style={{gridColumn:'1/4'}}>
          <Pill style={{background:'#B78EE1'}}>35 / 25</Pill>
        </div>
      </DeptRow>

      <div style={{textAlign:'right', color:'#6B7280', fontSize:12}}>Updated: June 25, 2025</div>

      <Accord onClick={()=>setOpenExit(v=>!v)} aria-expanded={openExit}><span style={{display:'flex', alignItems:'center', gap:8}}><BulbIcon/> 2025 Exit Reason</span><Caret open={openExit}/></Accord>
      {openExit && (
        <ExitWrap>
          <ExitHead>
            <h4>2025 Exit Reason Breakup</h4>
            <BarsIcon />
          </ExitHead>
          <ExitTable>
            <ExitHeaderRow>
              <div>No.</div>
              <div>Exit Reason</div>
              <div style={{justifySelf:'end'}}>Attrition %</div>
            </ExitHeaderRow>
            <ExitRow>
              <div style={{color:'#6B7280', gridRow:'1'}}>{1}</div>
              <div style={{color:'#202224', minWidth:0, gridRow:'1'}}>Career Growth</div>
              <div style={{justifySelf:'end', fontWeight:700, color:'#202224', gridRow:'1'}}>24%</div>
              <div style={{gridColumn:'2 / 4', gridRow:'2'}}>
                <ExitBarTrack><ExitBarFill w="24%" c="#EF4444"/></ExitBarTrack>
              </div>
            </ExitRow>
            <ExitRow>
              <div style={{color:'#6B7280', gridRow:'1'}}>{2}</div>
              <div style={{color:'#202224', minWidth:0, gridRow:'1'}}>Work-Life Balance</div>
              <div style={{justifySelf:'end', fontWeight:700, color:'#202224', gridRow:'1'}}>21%</div>
              <div style={{gridColumn:'2 / 4', gridRow:'2'}}>
                <ExitBarTrack><ExitBarFill w="21%" c="#EF4444"/></ExitBarTrack>
              </div>
            </ExitRow>
            <ExitRow>
              <div style={{color:'#6B7280', gridRow:'1'}}>{3}</div>
              <div style={{color:'#202224', minWidth:0, gridRow:'1'}}>Compensation</div>
              <div style={{justifySelf:'end', fontWeight:700, color:'#202224', gridRow:'1'}}>18%</div>
              <div style={{gridColumn:'2 / 4', gridRow:'2'}}>
                <ExitBarTrack><ExitBarFill w="18%" c="#FB923C"/></ExitBarTrack>
              </div>
            </ExitRow>
            <ExitRow>
              <div style={{color:'#6B7280', gridRow:'1'}}>{4}</div>
              <div style={{color:'#202224', minWidth:0, gridRow:'1'}}>Management Issues</div>
              <div style={{justifySelf:'end', fontWeight:700, color:'#202224', gridRow:'1'}}>15%</div>
              <div style={{gridColumn:'2 / 4', gridRow:'2'}}>
                <ExitBarTrack><ExitBarFill w="15%" c="#3B82F6"/></ExitBarTrack>
              </div>
            </ExitRow>
          </ExitTable>
          <AlertBox>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#991B1B" strokeWidth="1.6"/><path d="M12 8v6" stroke="#991B1B" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="16.5" r="1" fill="#991B1B"/></svg>
            <div style={{fontSize:13, lineHeight:1.4}}>
              <strong>Alert:</strong> 'Management Issues' shows 15% increase compared to previous quarter. Consider leadership training interventions.
            </div>
          </AlertBox>
          <SmallInfo>Updated: May 15, 2025</SmallInfo>
        </ExitWrap>
      )}

      <Accord onClick={()=>setOpenTb(v=>!v)} aria-expanded={openTb}><span style={{display:'flex', alignItems:'center', gap:8}}><LeafIcon/> TB Wise Attrition</span><Caret open={openTb}/></Accord>
      {openTb && <div style={{padding:'10px 4px', color:'#6B7280', fontSize:12}}>Details coming soon</div>}
    </Card>
  );
}
