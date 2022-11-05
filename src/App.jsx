import "./App.scss";
import { useEffect, useState } from "react"; 
import ProfileList from './components/ProfileList/ProfileList';
import RadioButtons from "./components/RadioButtons/RadioButtons";

const App = () => {
  const url = "https://randomuser.me/api?results=6&gender=";
  const [profiles, setProfiles] = useState([]);
  const [selected, setGender] = useState("All");
  const options = ["All", "Male", "Female"]

  // useEffect(() => {
  //   getUsers();
  // }, [])

  useEffect(()=>{
    getUsersGender();
  },[selected]);

  // fetch(url)
  //   .then(res => res.json())
  //   .then(data => data);

  const getUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    // clean the data!
    const newProfiles = data.results.map((profile) => cleanProfile(profile));
    setProfiles(newProfiles);
  }


  const cleanProfile = (profile) => {
    return {
      name: `${profile.name.first} ${profile.name.last}`,
      email: profile.email,
      phoneNumber: profile.phone,
      image: profile.picture.large
    }
  }
  const onChange =(event)=>{
    console.log(event.target.value);
    setGender(event.target.value);
  }

  const getUsersGender = async () => {
    let res=await fetch(`${url}${selected}`);
    const data = await res.json();
    // clean the data!
    const newProfiles = data.results.map((profile) => cleanProfile(profile));
    setProfiles(newProfiles);
  }



  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <RadioButtons onChange={onChange} selected={selected} options={options} label="Gender" />
      {(profiles.length) > 0 && <ProfileList profiles={profiles} /> }
      
    </div>
  );
};

export default App;