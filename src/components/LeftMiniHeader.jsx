import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: -2px 0 4px 2px; /* subtle spacing without affecting column width */
`;

const Link = styled.button`
  border: none; background: transparent; padding: 0; margin: 0;
  font-size: 14px; font-weight: 600; color: #1d4ed8; text-decoration: underline;
  cursor: pointer;
`;

const Pill = styled.button`
  display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px;
  background: #fff; border: 1px solid #E5E7EB; border-radius: 8px; font-size: 12px; cursor: pointer;
`;

const Caret = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function LeftMiniHeader() {
  return (
    <Wrap>
      <Link>Team Performance</Link>
      <Pill>Alpha Team <Caret /></Pill>
    </Wrap>
  );
}
