import React from "react";
import "./ProfileList.scss";
import ProfileCard from "../ProfileCard/ProfileCard";

const ProfileList = ({ profiles }) => {
  const profilesListJSX = profiles.map((profile) => (
    
          <ProfileCard
            name={profile.name}
            email={profile.email}
            image={profile.image}
            phoneNumber={profile.phoneNumber}
          />
  )) 
  return (
    <div className="card-list">
        {profilesListJSX}
    </div>
  )     
  }


export default ProfileList;
