import { Dom } from "./Dom.js";

export const doFunctions = () => {
  const DomElements = new Dom();
  // console.log(DomElements);
  // console.log(DomElements);
  const {
    wrapper,
    modal,
    closeButton,
    before,
    after,
    navMenu,
    menuWrapper,
    mainNavMenu,
    secondaryMenu,
    mainContent,
    imgBox,
    statNavButton,
  } = DomElements;

  navMenu.addEventListener("mouseleave", () => {
    secondaryMenu.style.display = "none";
  });

  navMenu.addEventListener("mouseenter", () => {
    secondaryMenu.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.visibility = "hidden";
  });

  statNavButton.addEventListener("click", () => {
    modal.style.visibility = "visible";
  });

  const updateOverflow = () => {
    setTimeout(() => {
      mainContent.style.overflowY =
        mainContent.scrollHeight > mainContent.clientHeight ? "auto" : "hidden";
    });
  };

  statNavButton.addEventListener("click", updateOverflow);
  window.addEventListener("resize", updateOverflow);

  const navMenuMap = {};
  navMenu.querySelectorAll('[id^="menu"]').forEach((item) => {
    Object.assign(navMenuMap, {
      [item.id]: [item.id.replace("trigger_", "")],
    });
  });

  // const button1 = document.getElementById('button1');
  // const button2 = document.getElementById('button2');

  // const modalContents = {
  //   button1: `<h2>Content for Button 1</h2>
  //             <p>This is specific content when Button 1 is clicked</p>
  //             <button class="closeButton-modal">Close</button>`,

  //   button2: `<h2>Content for Button 2</h2>
  //             <p>Different content appears here for Button 2</p>
  //             <button class="closeButton-modal">Close</button>`
  // };

  function showModal(content) {
    // modal.innerHTML = content;
    modal.style.visibility = "visible";
  }

  // button1.addEventListener(('click'), ()=>showModal(modalContents.button1));
  // button2.addEventListener(('click'), ()=>showModal(modalContents.button2));
};
