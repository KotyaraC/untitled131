import logo from './logo.svg';
import './App.css';
import ThemeSwitcher from "./ThemeSwitcher";
import TextInput from "./TextInput";
import TodoList from "./TodoList";
import HiddenText from "./HiddenText";
import ValueSlider from "./ValueSlider";
import ImageCarousel from "./ImageCarousel";
import SumCalculator from "./SumCalculator";
import RegistrationForm from "./RegistrationForm";
import FilterList from "./FilterList";
import Tabs from "./Tabs";
import VideoGallery from "./VideoGallery";
import ExpenseCalculator from "./ExpenseCalculator";
import Voting from "./Voting";
import FeedbackForm from "./FeedbackForm";
import LanguageSwitcher from "./LanguageSwitcher";
import DatePicker from "./DatePicker";
import ContactList from "./ContactList";
import CountCharacters from "./CountCharacters";
import MemeGallery from "./MemeGallery";
import AnimatedButton from "./AnimatedButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <hr/>
      <ThemeSwitcher></ThemeSwitcher>
        <hr/>
        <TextInput></TextInput>
        <hr/>
        <TodoList />
        <hr/>
        <HiddenText />
        <hr/>
        <ValueSlider />
      <hr/>
      <ImageCarousel/>
        <hr/>
        <SumCalculator/>
        <ht/>
        <RegistrationForm/>
        <ht/>
        <FilterList/>
      <hr/>
      <Tabs/>
        <ht/>
        <VideoGallery/>
        <hr/>
        <ExpenseCalculator/>
        <hr/>
        <Voting/>
        <hr/>
        <FeedbackForm/>
      <hr/>
      <LanguageSwitcher/>
        <hr/>
        <DatePicker/>
        <hr/>
        <ContactList/>
        <hr/>
        <CountCharacters/>
        <hr/>
        <MemeGallery/>
      <hr/>
      <AnimatedButton/>
    </div>
  );
}

export default App;
