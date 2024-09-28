import './App.css';
import { CssModules } from './components/CssModules';
import { InlineStyles } from './components/InlineStyle';
import { StyledJsx } from './components/StyledJsx';

export default function App() {
  return (
    <div className="App">
      <InlineStyles />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
