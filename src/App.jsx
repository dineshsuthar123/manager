import './App.css';
import Navbar from './components/Navbar';
import PerformanceMetrics from './components/PerformanceMetrics';
import LeftMiniHeader from './components/LeftMiniHeader';
import AttritionOverview from './components/AttritionOverview';
import GreetingBanner from './components/GreetingBanner';
import TeamScore from './components/TeamScore';
import CodeQualityMetrics from './components/CodeQualityMetrics';
import SribBusinessComparison from './components/SribBusinessComparison';
import DepartmentWiseAnalysisHybrid from './components/DepartmentWiseAnalysisHybrid';
import NestProject from './components/NestProject';
import styled from 'styled-components';

const Main = styled.main`
  background: #F5F6F8;
  padding: 20px 16px;
`;

const PageGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr 320px;
  gap: 12px; /* tighter to match design */
  align-items: start;

  @media (max-width: 1280px) {
    grid-template-columns: 300px 1fr 300px;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 1fr; /* stack on small screens */
  }
`;

const CenterCol = styled.div`
  display: grid;
  gap: 12px;
`;

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <PageGrid>
          <div style={{display:'grid', gap:12, minWidth:0}}>
            <LeftMiniHeader />
            <PerformanceMetrics />
            <AttritionOverview />
          </div>
          <CenterCol>
            <GreetingBanner />
            <TeamScore />
            <CodeQualityMetrics />
            <NestProject />
            {/* more center cards will go here */}
          </CenterCol>
          <div style={{display:'grid', gap:12}}>
            <SribBusinessComparison />
            <DepartmentWiseAnalysisHybrid />
          </div>
        </PageGrid>
      </Main>
    </div>
  );
}

export default App;
