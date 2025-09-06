import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const Section = styled.section`
  background: #F5F6FA;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 14px;
  display: grid;
  gap: 14px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 { margin: 0; font-size: 16px; font-weight: 700; color: #202224; }
`;

const SelectBox = styled.div`
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 12px; color: #202224;
  display: inline-flex; align-items: center; gap: 6px;
`;

const SubHead = styled.div`
  font-size: 15px; font-weight: 600; color: #202224;
`;

const Tiles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 12px;
  @media (max-width: 1200px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const Tile = styled.div`
  background: #fff;
  border: 1px solid #EEF0F2;
  border-radius: 10px;
  padding: 12px;
  display: grid;
  gap: 8px;
  position: relative;
  &:before{
    content: '';
    position: absolute; left: 0; top: 0; right: 0; height: 4px;
    background: ${props => props.$accent || 'transparent'};
    border-top-left-radius: 10px; border-top-right-radius: 10px;
  }
`;

const Row = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
`;

const Info = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="1.6"/>
    <path d="M12 10v6" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="1" fill="#9CA3AF"/>
  </svg>
);

const Trend = ({color='#16A34A'}) => {
  const data = [
    {x:0,y:3},{x:1,y:4},{x:2,y:3.6},{x:3,y:4.2},{x:4,y:4.0},{x:5,y:4.8}
  ];
  return (
    <div style={{width:'100%', height:36}}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{left:0,right:0,top:2,bottom:2}}>
          <Line type="monotone" dataKey="y" stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const Value = styled.div`
  font-weight: 800; color: #374151; font-size: 16px;
`;
const Delta = styled.div`
  font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 6px;
  &.up { color: #16A34A; }
  &.down { color: #D97706; }
`;
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

const DottedGauge = ({value=92, color='#10B981'}) => (
  <div style={{position:'relative', width:64, height:64, display:'grid', placeItems:'center'}}>
    <svg width="64" height="64" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="20" stroke="#E5E7EB" strokeWidth="6" fill="none" strokeDasharray="2 6"/>
      <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="6" fill="none" strokeDasharray="140" strokeDashoffset={140 - 140*(value/100)} strokeLinecap="round"/>
    </svg>
    <div style={{position:'absolute', fontWeight:800, color:'#1F2937'}}>{value}</div>
  </div>
);

export default function CodeQualityMetrics(){
  return (
    <Section>
      <Header>
        <h3>Code Quality Metrics</h3>
        <SelectBox>
          Project Alpha
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </SelectBox>
      </Header>

      <SubHead>Review Activity</SubHead>
      <Tiles>
        <Tile $accent="#96E2FF">
          <Row>
            <div style={{color:'#555'}}>Code Review</div>
            <Info />
          </Row>
          <Value>85%</Value>
          <Delta className="up"><ArrowUp /> +3.5% <span style={{color:'#6B7280', fontWeight:400}}>vs last week</span></Delta>
          <Trend color="#4CAF50" />
        </Tile>

        <Tile $accent="#96E2FF">
          <Row>
            <div style={{color:'#555'}}>Code Commits</div>
            <Info />
          </Row>
          <Value>89%</Value>
          <Delta className="up"><ArrowUp /> +8% <span style={{color:'#6B7280', fontWeight:400}}>vs last quarter</span></Delta>
          <Trend color="#2196F3" />
        </Tile>

        <Tile $accent="#96E2FF">
          <Row>
            <div style={{color:'#555'}}>Code Review Comments</div>
            <Info />
          </Row>
          <Value>88%</Value>
          <Delta className="up"><ArrowUp /> +3% <span style={{color:'#6B7280', fontWeight:400}}>vs last week</span></Delta>
          <Trend color="#2196F3" />
        </Tile>
      </Tiles>

      <SubHead>Quality Score</SubHead>
      <Tiles>
        <Tile>
          <Row>
            <div style={{color:'#555'}}>SAM Score %</div>
            <Info />
          </Row>
          <Row>
            <Value>85%</Value>
            <span style={{width:10, height:10, borderRadius:'50%', background:'#16A34A', display:'inline-block'}}/>
          </Row>
          <div style={{fontSize:12, color:'#6B7280'}}>Previous: 82% <span style={{color:'#16A34A', fontWeight:600}}>+4%</span></div>
        </Tile>

        <Tile>
          <Row>
            <div style={{color:'#555'}}>CQM</div>
            <Info />
          </Row>
          <Row>
            <Value>3.8</Value>
            <span style={{width:10, height:10, borderRadius:'50%', background:'#F59E0B', display:'inline-block'}}/>
          </Row>
          <Delta className="up"><ArrowUp /> 4% <span style={{color:'#6B7280', fontWeight:400}}>vs last quarter</span></Delta>
        </Tile>

        <Tile>
          <Row>
            <div style={{color:'#555'}}>TEM</div>
            <Info />
          </Row>
          <div style={{display:'flex', alignItems:'center', gap:10}}>
            <DottedGauge value={92} />
          </div>
        </Tile>

        <Tile>
          <Row>
            <div style={{color:'#555'}}>Testing Quality</div>
            <Info />
          </Row>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:8}}>
            <div style={{color:'#6B7280', fontSize:12}}>Negative TCs %</div>
            <div style={{fontWeight:800, color:'#374151'}}>12%</div>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <div style={{flex:1, height:8, background:'#EEF0F2', borderRadius:6, overflow:'hidden'}}>
              <div style={{width:'12%', height:'100%', background:'#F59E0B'}}/>
            </div>
          </div>
          <Delta className="down"><ArrowDown /> -2% <span style={{color:'#6B7280', fontWeight:400}}>vs last month</span></Delta>
        </Tile>

        <Tile>
          <Row>
            <div style={{color:'#555'}}>SW Pro CR IDs Involvement %</div>
          </Row>
          <Row>
            <Value>92.3%</Value>
            <Delta className="up"><ArrowUp /> 3.5% <span style={{color:'#6B7280', fontWeight:400}}>vs last quarter</span></Delta>
          </Row>
        </Tile>

        <Tile>
          <Row>
            <div style={{color:'#555'}}>Gatekeepers Involvement %</div>
          </Row>
          <Row>
            <Value>78.9%</Value>
            <Delta className="up"><ArrowUp /> 2.8% <span style={{color:'#6B7280', fontWeight:400}}>vs last quarter</span></Delta>
          </Row>
        </Tile>
      </Tiles>
    </Section>
  );
}
