import Header from "./components/header/header";
import SectionTitle from "./components/section-title/SectionTitle";
import { sectionTitles } from "./helpers/constants";
import BlocoCases from "./components/bloco-cases/BlocoCases"

import "./App.css";

const App: React.FC = () => (
  <>
    <Header />

    <main>
      <SectionTitle {...sectionTitles.entendendo} />
      
      <BlocoCases />

      <SectionTitle {...sectionTitles.construindo} />
      {/* …aqui virão os accordions… */}
    </main>
  </>
);

export default App;