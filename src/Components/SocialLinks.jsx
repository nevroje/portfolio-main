import React from "react";

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="profile-link"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {/* spaceblock */} 
        {' '}
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default SocialLinks;
