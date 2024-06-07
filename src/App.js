import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import StudentViewall from './components/StudentViewall';

function App() {
  return (
    <div>
<AddStudent/> 
<SearchStudent/> 
<DeleteStudent/> 
<StudentViewall/>   
    </div>
  );
}

export default App;
