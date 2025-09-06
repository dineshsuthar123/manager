import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  background: linear-gradient(91.87deg, #60C7FF -10.26%, #FFFFFF 23.94%, #F7FCFF 85.65%, #71BBE4 116.85%);
  padding: 1px; /* border image look */
`;

const Bg = styled.div`
  border-radius: 10px;
  min-height: 54px;
  background: url('https://images.unsplash.com/photo-1520975682031-a6b88f71a6f3?q=80&w=1200&auto=format&fit=crop') center/cover no-repeat;
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`;

const Ask = styled.div`
  background: rgba(183, 238, 255, 0.6);
  box-shadow: 0px 4px 7px rgba(31, 54, 199, 0.06);
  border-radius: 8px;
  padding: 8px 14px;
  font-weight: 700;
  color: #084762;
`;

export default function GreetingBanner() {
  return (
    <Wrap>
      <Bg>
  <div style={{fontWeight: 700, color: '#084762'}}>Hi Isha, Good Morning! Have a Productive day.</div>
        <Ask>Ask me anything</Ask>
      </Bg>
    </Wrap>
  );
}
