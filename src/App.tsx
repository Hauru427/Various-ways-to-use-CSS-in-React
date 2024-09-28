import './App.css';
import { CssModules } from './components/CssModules';
import { InlineStyles } from './components/InlineStyle';
import { StyledComponents } from './components/StyledComponents';
import { StyledJsx } from './components/StyledJsx';

export default function App() {
  return (
    <div className="App">
      <InlineStyles />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
