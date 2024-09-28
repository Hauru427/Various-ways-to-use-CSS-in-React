import './App.css';
import { CssModules } from './components/CssModules';
import { InlineStyles } from './components/InlineStyle';

export default function App() {
  return (
    <div className="App">
      <InlineStyles />
      <CssModules />
    </div>
  );
}
