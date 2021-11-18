import React from "react";

const Footer = () => {
  return (
    <footer class="bg-black text-white flex justify-center flex-col w-full p-0 mx-auto mt-auto">
      <div class="mx-auto flex mt-4 text-gray-100">Eduardo Cordeiro</div>
      <div class="mx-auto flex mt-4 text-gray-100">agez0s@gmail.com</div>
      <div class="text-2xl mx-auto">
        <a href="https://github.com/agez0s" target="_blank" rel="noreferrer">
          <i class="fab fa-github-square m-2"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/eduardo-cordeiro-/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
