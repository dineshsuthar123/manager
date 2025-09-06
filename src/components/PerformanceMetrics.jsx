import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.section`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 0 #e5e7eb inset;
  padding: 16px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  h3 { margin: 0; font-size: 16px; font-weight: 700; color: #202224; }
  small { color: #6B7280; display: inline-flex; gap: 6px; align-items: center; }
`;

const SectionHead = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #202224;
  font-weight: 700;
  font-size: 14px;
`;

const HeadLeft = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.span`
  width: 8px; height: 8px; border-radius: 50%; background: #4DA3FF; display: inline-block; margin-right: 8px;
`;

const List = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 8px;
  .item { font-size: 12px; color: #202224; }
  .value { font-weight: 700; color: #374151; margin-top: 2px; }
  .delta-pos { color: #22C55E; font-weight: 700; margin-left: 6px; }
  .delta-neg { color: #EF4444; font-weight: 700; margin-left: 6px; }
`;

const Caret = ({open}) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: open?'rotate(180deg)':'none', transition:'transform .2s'}}>
    <path d="M6 9l6 6 6-6" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PeopleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zM8 11c1.657 0 3-1.79 3-4S9.657 3 8 3 5 4.79 5 7s1.343 4 3 4zM8 13c-3.314 0-6 2.239-6 5v2h8" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M16 13c-3.314 0-6 2.239-6 5v2h12v-2c0-2.761-2.686-5-6-5z" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const BulbIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18h6M9 22h6" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M12 2a7 7 0 00-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 00-4-12z" stroke="#F59E0B" strokeWidth="1.6"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3v18h18" stroke="#16A34A" strokeWidth="1.6"/>
    <path d="M7 15l4-5 4 3 5-7" stroke="#16A34A" strokeWidth="1.6" fill="none"/>
  </svg>
);

// Styles for Innovation & Development section (kept container-friendly, no fixed widths)
const IDWrap = styled.div`
  background: #F9FAFB;
  border-radius: 12px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; /* never exceed parent width */
`;

const IDGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  min-width: 0; /* allow columns to shrink inside 320px card */
  @media (max-width: 360px) { grid-template-columns: 1fr; }
`;

const Tile = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 1px 0 #E5E7EB inset;
  display: grid;
  gap: 8px;
  min-width: 0;
`;

const TileHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: #6B7280;
  font-size: 14px;
  min-width: 0;
  > div { min-width: 0; }
`;

const ChipRow = styled.div`
  display: flex; gap: 6px; flex-wrap: wrap;
`;

const Chip = styled.span`
  display: inline-grid; place-items: center;
  min-width: 20px; height: 20px; padding: 0 6px;
  border-radius: 6px; font-size: 10px;
  background: ${(p)=>p.muted ? '#F3F4F6' : '#DBEAFE'};
  color: ${(p)=>p.muted ? '#9CA3AF' : '#2563EB'};
`;

const Row = styled.div`
  display: grid; grid-template-columns: auto 1fr auto; gap: 8px; align-items: center;
`;

const BarTrack = styled.div`
  height: 6px; background: #F3F4F6; border-radius: 4px; overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%; border-radius: 4px; width: ${(p)=>p.w||'0'};
  background: ${(p)=>p.color || '#7EB6FF'};
`;

export default function PerformanceMetrics() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <Card>
      <Header>
        <h3>Performance Metrics</h3>
        <small>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12a9 9 0 10-3.297 6.94" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
            <path d="M21 12v-6m0 6h-6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Updated: 10:30 AM
        </small>
      </Header>
      <div style={{borderTop: '1px solid #E5E7EB'}} />

      <SectionHead onClick={()=>setOpen1(v=>!v)} aria-expanded={open1}>
        <HeadLeft>
          <PeopleIcon />
          <span>Workforce Overview</span>
        </HeadLeft>
        <Caret open={open1} />
      </SectionHead>
      {open1 && (
        <List>
          <div>
            <div className="item"><Dot /> Current Head Count</div>
            <div className="value">1245 <span className="delta-pos">+3%</span></div>
          </div>
          <div>
            <div className="item"><Dot /> Voluntary Exits</div>
            <div className="value">23 <span className="delta-pos">-5%</span></div>
          </div>
          <div>
            <div className="item"><Dot /> Joined in 2025</div>
            <div className="value">87</div>
          </div>
          <div>
            <div className="item"><Dot /> Total Resignations</div>
            <div className="value">31 <span className="delta-neg">+5</span></div>
          </div>
          <div>
            <div className="item"><Dot /> Software Pro Hiring</div>
            <div className="value">12</div>
          </div>
          <div>
            <div className="item"><Dot /> Non-Compliance</div>
            <div className="value">5 <span className="delta-neg">+1</span></div>
          </div>
        </List>
      )}

      <div style={{borderTop: '1px solid #E5E7EB', marginTop: 6}} />
      <SectionHead onClick={()=>setOpen2(v=>!v)} aria-expanded={open2}>
        <HeadLeft>
          <BulbIcon />
          <span>Innovation & Development</span>
        </HeadLeft>
        <Caret open={open2} />
      </SectionHead>
      {open2 && (
        <div style={{paddingBottom: 8}}>
          <IDWrap>
            <IDGrid>
              {/* AI Patents */}
              <Tile>
                <TileHead>
                  <div style={{display:'flex', alignItems:'center', gap:8}}>
                    <span style={{display:'grid', placeItems:'center', width:20, height:20, borderRadius:6, background:'#FEF3C7'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18h6M9 22h6" stroke="#EAB308" strokeWidth="2" strokeLinecap="round"/><path d="M12 2a7 7 0 00-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 00-4-12z" stroke="#EAB308" strokeWidth="2"/></svg>
                    </span>
                    <span>AI Patents</span>
                  </div>
                </TileHead>
                <div style={{display:'flex', alignItems:'baseline', gap:8}}>
                  <strong style={{fontSize:16}}>32</strong>
                  <span style={{fontSize:12, color:'#6B7280'}}>Dec’24–Nov25</span>
                </div>
                <div style={{display:'grid', gridAutoFlow:'column', gap:6, alignItems:'end', height:42, minWidth:0, overflow:'hidden'}}>
                  {[6,10,13,5,18,10,15,18,8,10,11,19].map((h,i)=> (
                    <span key={i} style={{width:8, height:h, background:'#FACC15', borderRadius:2}} />
                  ))}
                </div>
              </Tile>

              {/* A2 Patents */}
              <Tile>
                <TileHead>
                  <div style={{display:'flex', alignItems:'center', gap:8}}>
                    <span style={{display:'grid', placeItems:'center', width:20, height:20, borderRadius:6, background:'#DBEAFE'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" stroke="#60A5FA" strokeWidth="2"/><path d="M12 7v5l3 2" stroke="#60A5FA" strokeWidth="2"/></svg>
                    </span>
                    <span>A2 Patents</span>
                  </div>
                  <div style={{display:'inline-flex', alignItems:'center', gap:4, color:'#22C55E', fontWeight:700, fontSize:12}}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7l4-4 3 3 3-3" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/></svg>
                    +4%
                  </div>
                </TileHead>
                <strong style={{fontSize:16}}>18</strong>
                <div style={{fontSize:10, color:'#6B7280'}}>2 of 4 Complete</div>
                <ChipRow>
                  <Chip>Q1</Chip>
                  <Chip>Q2</Chip>
                  <Chip muted>Q3</Chip>
                  <Chip muted>Q4</Chip>
                </ChipRow>
              </Tile>
            </IDGrid>

            {/* Sub Performance Metrics inside I&D */}
            <div style={{marginTop:10, background:'#FFFFFF', borderRadius:12, padding:10, boxShadow:'0 1px 0 #E5E7EB inset'}}>
              <strong style={{fontSize:14, color:'#202224'}}>Performance Metrics</strong>
              <IDGrid style={{marginTop:8}}>
                <div style={{background:'#F9FAFB', borderRadius:10, padding:10}}>
                  <div style={{display:'flex', alignItems:'center', gap:8, color:'#6B7280', fontSize:14}}>
                    <span style={{width:16, height:16, borderRadius:4, border:'1.33px solid #7EB6FF', display:'inline-grid', placeItems:'center'}}>
                      <span style={{display:'block', width:4, height:6.67, background:'#7EB6FF'}} />
                    </span>
                    Learning Hours
                  </div>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:8}}>
                    <strong style={{fontSize:16, color:'#202224'}}>1800</strong>
                    <span style={{fontSize:12, color:'#22C55E', fontWeight:700}}>+12%</span>
                  </div>
                </div>
                <div style={{background:'#F9FAFB', borderRadius:10, padding:10}}>
                  <div style={{display:'flex', alignItems:'center', gap:8, color:'#6B7280', fontSize:14}}>
                    <span style={{width:16, height:16, borderRadius:4, border:'1.33px solid #22C55E', display:'inline-grid', placeItems:'center'}}>
                      <span style={{display:'block', width:8, height:7.41, background:'#22C55E'}} />
                    </span>
                    SWC Professional
                  </div>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:8}}>
                    <strong style={{fontSize:16, color:'#202224'}}>87%</strong>
                    <span style={{fontSize:12, color:'#22C55E', fontWeight:700}}>+5%</span>
                  </div>
                </div>
              </IDGrid>

              <div style={{background:'#F9FAFB', borderRadius:10, padding:10, marginTop:10}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <div style={{display:'flex', alignItems:'center', gap:8, color:'#6B7280', fontSize:14}}>
                    <span style={{width:16, height:16}}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14V2H14" stroke="#7EB6FF" strokeWidth="1.6"/></svg>
                    </span>
                    Hybrid Productivity
                  </div>
                  <span style={{fontSize:12, color:'#6B7280'}}>March ’25</span>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:12, marginTop:10}}>
                  <div style={{position:'relative', width:60, height:60, flex:'0 0 auto'}}>
                    <svg viewBox="0 0 60 60" width="60" height="60">
                      <circle cx="30" cy="30" r="27" stroke="#E5E7EB" strokeWidth="6" fill="none"/>
                      <circle cx="30" cy="30" r="27" stroke="#7EB6FF" strokeWidth="6" fill="none" strokeDasharray="339.292" strokeDashoffset="75" strokeLinecap="round" transform="rotate(-90 30 30)"/>
                    </svg>
                    <div style={{position:'absolute', inset:0, display:'grid', placeItems:'center', fontWeight:700}}>78%</div>
                  </div>
                  <div style={{flex:1, display:'grid', gap:10}}>
                    <Row>
                      <span style={{fontSize:12, color:'#6B7280'}}>On-site</span>
                      <BarTrack><BarFill w="42%" color="#94D8B8" /></BarTrack>
                      <strong style={{fontSize:12}}>42%</strong>
                    </Row>
                    <Row>
                      <span style={{fontSize:12, color:'#6B7280'}}>Remote</span>
                      <BarTrack><BarFill w="36%" color="#7EB6FF" /></BarTrack>
                      <strong style={{fontSize:12}}>36%</strong>
                    </Row>
                  </div>
                </div>
              </div>

              <div style={{background:'#F9FAFB', borderRadius:10, padding:10, marginTop:10}}>
                <div style={{display:'grid', gap:10}}>
                  <Row>
                    <span style={{fontSize:14, color:'#6B7280'}}>AI Prac+</span>
                    <BarTrack><BarFill w="64%" color="#C2A5E0" /></BarTrack>
                    <strong style={{fontSize:12}}>64%</strong>
                  </Row>
                  <Row>
                    <span style={{fontSize:14, color:'#6B7280'}}>AI Pro</span>
                    <BarTrack><BarFill w="38%" color="#7EB6FF" /></BarTrack>
                    <strong style={{fontSize:12}}>38%</strong>
                  </Row>
                </div>
              </div>
            </div>
          </IDWrap>
        </div>
      )}

      <div style={{borderTop: '1px solid #E5E7EB', marginTop: 6}} />
      <SectionHead onClick={()=>setOpen3(v=>!v)} aria-expanded={open3}>
        <HeadLeft>
          <ChartIcon />
          <span>Performance Metrics</span>
        </HeadLeft>
        <Caret open={open3} />
      </SectionHead>
      {open3 && (
        <div style={{paddingBottom: 8, color:'#6B7280', fontSize:12}}>KPI charts coming soon</div>
      )}
    </Card>
  );
}
