import './App.css';
import { EntryForm } from './components/EntryForm';
import { GuestbookEntries } from './components/GuestbookEntries';

function App() {
  return (
    <div className='App'>
      <GuestbookEntries />
      <EntryForm />
    </div>
  );
}

export default App;
