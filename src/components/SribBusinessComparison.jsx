import React, { useState } from 'react';
import styled from 'styled-components';

const Panel = styled.aside`
  background: #EEF0F8;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;
const Inner = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-top: 12px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  &:not(:last-child){ border-bottom: 1px solid #E5E7EB; }
`; 

const SectionHead = styled.button`
  width: 100%;
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  padding: 12px 14px; border-radius: 10px; border: 1px solid #E5E7EB; background: #fff;
  margin-top: 12px; cursor: pointer;
`;

const HeadLeft = styled.span`
  display: inline-flex; align-items: center; gap: 10px; font-weight: 700; color: #202224;
`;

const Caret = ({open}) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: open?'rotate(180deg)':'none', transition:'transform .2s'}}>
    <path d="M6 9l6 6 6-6" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 7h12l1 13H5L6 7z" stroke="#2563EB" strokeWidth="1.8"/>
    <path d="M9 7a3 3 0 116 0" stroke="#2563EB" strokeWidth="1.8"/>
  </svg>
);

const GearsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#16A34A" strokeWidth="1.8"/>
    <path d="M12 2v3M21 12h-3M12 21v-3M6 12H3M18.4 5.6l-2.1 2.1M5.6 5.6l2.1 2.1M18.4 18.4l-2.1-2.1M5.6 18.4l2.1-2.1" stroke="#16A34A" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const TeamIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zM8 11c1.657 0 3-1.79 3-4S9.657 3 8 3 5 4.79 5 7s1.343 4 3 4zM8 13c-3.314 0-6 2.239-6 5v2h8" stroke="#0EA5E9" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M16 13c-3.314 0-6 2.239-6 5v2h12v-2c0-2.761-2.686-5-6-5z" stroke="#0EA5E9" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="1.6"/>
    <path d="M12 10v6" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="1" fill="#9CA3AF"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8l-4 4 4 4" stroke="#475569" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8l4 4-4 4" stroke="#475569" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ReviewIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="#475569" strokeWidth="1.6"/>
    <path d="M7 9h10M7 12h6" stroke="#475569" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const CommentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5h16v10H8l-4 4V5z" stroke="#475569" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);

const ChartIcon2 = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20V4" stroke="#475569" strokeWidth="1.6"/>
    <rect x="7" y="11" width="3" height="7" fill="#475569" rx="1"/>
    <rect x="12" y="8" width="3" height="10" fill="#475569" rx="1"/>
    <rect x="17" y="5" width="3" height="13" fill="#475569" rx="1"/>
  </svg>
);

const WarnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3l10 18H2L12 3z" stroke="#475569" strokeWidth="1.6"/>
    <path d="M12 9v5" stroke="#475569" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="12" cy="17" r="1" fill="#475569"/>
  </svg>
);

const DocIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3h8l4 4v14H6V3z" stroke="#475569" strokeWidth="1.6"/>
    <path d="M14 3v5h5" stroke="#475569" strokeWidth="1.6"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#4B5563" strokeWidth="1.6"/>
    <path d="M12 7v5l3 2" stroke="#4B5563" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const Metric = ({label, value, color, fill=70}) => (
  <Row>
    <div style={{fontSize:12, color:'#202224', display:'flex', alignItems:'center', gap:8}}>{label}</div>
    <div style={{display:'flex', alignItems:'center', gap:8, justifySelf:'end', whiteSpace:'nowrap'}}>
      {value && <small style={{color:'#EF4444', fontWeight:700}}>68%</small>}
      {value && <small style={{color:'#9CA3AF'}}>vs</small>}
      {value && <small style={{color:'#6B7280', fontWeight:600}}>72%</small>}
    </div>
    <div style={{gridColumn:'1/3', height:6, background:'#E5E7EB', borderRadius:6, overflow:'hidden'}}>
      <div style={{width:`${fill}%`, height:'100%', background: color, borderRadius:6}}/>
    </div>
  </Row>
);

// Internal Process metric row with dynamic colors and values
const IPMetric = ({icon, label, yours, srib, fillColor, betterWhenLower=false}) => {
  const good = betterWhenLower ? yours <= srib : yours >= srib;
  const valueColor = good ? '#16A34A' : '#DC2626';
  const barColor = fillColor || (good ? '#7EB6FF' : '#FF8080');
  const yourPct = Math.max(0, Math.min(100, yours));
  return (
    <Row>
      <div style={{fontSize:12, color:'#202224', display:'flex', alignItems:'center', gap:8}}>
        {icon} {label}
      </div>
      <div style={{display:'flex', alignItems:'center', gap:6, justifySelf:'end', whiteSpace:'nowrap'}}>
        <small style={{color:valueColor, fontWeight:700}}>{yourPct}%</small>
        <small style={{color:'#6B7280'}}>vs</small>
        <small style={{color:'#6B7280', fontWeight:600}}>{srib}%</small>
      </div>
      <div style={{gridColumn:'1/3', height:6, background:'#E5E7EB', borderRadius:6, overflow:'hidden'}}>
        <div style={{width:`${yourPct}%`, height:'100%', background: barColor, borderRadius:6}}/>
      </div>
    </Row>
  );
};

export default function SribBusinessComparison() {
  const [openB, setOpenB] = useState(true);
  const [openI, setOpenI] = useState(false);
  const [openP, setOpenP] = useState(false);

  return (
    <Panel>
      <div style={{fontWeight:700, color:'#202224'}}>SRIB Business Level Comparison</div>

      {/* Business */}
      <SectionHead onClick={()=>setOpenB(v=>!v)} aria-expanded={openB}>
        <HeadLeft><BagIcon /> Business <InfoIcon /></HeadLeft>
        <Caret open={openB} />
      </SectionHead>
      {openB && (
        <Inner>
          <Metric label={<><CodeIcon /> Code Commits (2ccs)</>} value
                  color="#FF8080" fill={68} />
          <Metric label={<><ReviewIcon /> Code Review</>} color="#FF8080" fill={62} />
          <Metric label={<><CommentIcon /> Code Review Comments</>} color="#7EB6FF" fill={88} />
          <Metric label={<><ChartIcon2 /> SAM Score</>} color="#7EB6FF" fill={90} />
          <Metric label={<><WarnIcon /> Negative TCs %</>} color="#7EB6FF" fill={92} />
          <Metric label={<><DocIcon /> Patents and Papers</>} color="#7EB6FF" fill={86} />
        </Inner>
      )}

      {/* Internal Process */}
      <SectionHead onClick={()=>setOpenI(v=>!v)} aria-expanded={openI}>
        <HeadLeft><GearsIcon /> Internal Process <InfoIcon /></HeadLeft>
        <Caret open={openI} />
      </SectionHead>
      {openI && (
        <Inner>
          <div style={{display:'flex', justifyContent:'flex-end', fontSize:12, color:'#4B5563', marginTop:-4}}>Yours vs SRIB</div>
          <IPMetric icon={<ClockIcon />} label="Goal Setting Completion" yours={68} srib={72} fillColor="#FF8080" />
          <IPMetric icon={<CodeIcon />} label="Mid Year" yours={78} srib={72} />
          <IPMetric icon={<CommentIcon />} label="Ergo 1-0-1" yours={88} srib={72} />
          <IPMetric icon={<ChartIcon2 />} label="Ergo Group" yours={78} srib={72} />
          <IPMetric icon={<WarnIcon />} label="PE" yours={45} srib={72} fillColor="#FF8080" />
        </Inner>
      )}

      {/* People Management */}
      <SectionHead onClick={()=>setOpenP(v=>!v)} aria-expanded={openP}>
        <HeadLeft><TeamIcon /> People Management <InfoIcon /></HeadLeft>
        <Caret open={openP} />
      </SectionHead>
      {openP && (
        <Inner>
          <div style={{display:'flex', justifyContent:'flex-end', fontSize:12, color:'#4B5563', marginTop:-4}}>Yours vs SRIB</div>
          <IPMetric icon={<CodeIcon />} label="Voluntary Exits" yours={68} srib={72} />
          <IPMetric icon={<CodeIcon />} label="CS Attrition" yours={78} srib={72} />
          <IPMetric icon={<CommentIcon />} label="PE Attrition" yours={88} srib={72} />
          <IPMetric icon={<ChartIcon2 />} label="SWC Attrition" yours={78} srib={72} />
          <IPMetric icon={<WarnIcon />} label="New Hire Attrition" yours={45} srib={72} />
          <IPMetric icon={<WarnIcon />} label="IDP" yours={45} srib={72} betterWhenLower />
          <IPMetric icon={<WarnIcon />} label="SCA" yours={45} srib={72} betterWhenLower />
          <IPMetric icon={<WarnIcon />} label="Annual Awards" yours={45} srib={72} betterWhenLower />
          <IPMetric icon={<WarnIcon />} label="PRO+%" yours={45} srib={72} betterWhenLower />
          <IPMetric icon={<WarnIcon />} label="SWC Attempts" yours={45} srib={72} betterWhenLower />
          <IPMetric icon={<WarnIcon />} label="HiPo%" yours={45} srib={72} betterWhenLower />
        </Inner>
      )}
    </Panel>
  );
}
