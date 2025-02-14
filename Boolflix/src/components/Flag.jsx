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
      ) : language === "fr" ? (
        <img
          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
          alt="French"
          width="20"
        />
      ) : language === "es" ? (
        <img
          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
          alt="Spanish"
          width="20"
        />
      ) : null}{" "}
    </span>
  );
}
