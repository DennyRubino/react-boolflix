import React from "react";

export default function Flag({ language }) {
  return (
    <span>
      {language === "en" ? (
        <img
          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
          alt="English"
          width="20"
        />
      ) : language === "it" ? (
        <img
          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg"
          alt="Italian"
          width="20"
        />
      ) : language === "ja" ? (
        <img
          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"
          alt="Japanese"
          width="20"
        />
      ) : null}
    </span>
  );
}
