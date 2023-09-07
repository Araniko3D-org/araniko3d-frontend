import React from "react";
import "./Avatar.css";

const Avatar = ({ src, initials, mode, size }) => {
  const avatarClasses = `custom-avatar ${mode} ${size}`;

  return (
    <div className={avatarClasses}>
      {size === "small" ? (
        <div className="initials">{initials}</div>
      ) : size === "medium" ? (
        src ? (
          <img src={src} alt={initials} />
        ) : (
          <div className="initials">{initials}</div>
        )
      ) :size === "large" ? (
        src ? (
          <img src={src} alt={initials} />
        ) : (
          <div className="initials">{initials}</div>
        )
    ): (
        src && <img src={src} alt={initials} />
      )}
    </div>
  );
};

export default Avatar;
