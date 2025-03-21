import React, { useEffect, useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import CardWrapper from "./CardWrapper";

function Home({ homeRef, workRef, cardRef, aboutMeRef, contactRef, resume }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const resetHeaderStyles = () => {
    document
      .querySelectorAll(".headerOption span, .burgerMenu p")
      .forEach((item) => {
        item.style.fontWeight = "normal";
        item.style.color = "#1e1e1e";
      });
  };

  const applyActiveStyles = (
    element,
    color = "#fca311",
    fontWeight = "bold"
  ) => {
    if (element) {
      element.style.fontWeight = fontWeight;
      element.style.color = color;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections = [
      { ref: homeRef, id: "home", name: "Home" },
      { ref: workRef, id: "work", name: "Work" },
      { ref: aboutMeRef, id: "aboutMe", name: "About Me" },
      { ref: contactRef, id: "contact", name: "Contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setActiveSection(section.id);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("work");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      cardObserver.observe(cardRef.current);
    }

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
      if (cardRef.current) {
        cardObserver.unobserve(cardRef.current);
      }
    };
  }, [homeRef, workRef, cardRef, aboutMeRef, contactRef]);

  useEffect(() => {
    resetHeaderStyles();

    const activeElement = document.querySelector(
      `.headerOption span[data-section="${activeSection}"]`
    );
    const menu = document.querySelector(".mobileHeaderOption");
    const currentPage = document.querySelector(".burgerMenu p");
    const burger = document.querySelectorAll(".burger span");

    const webNameText = document.querySelector(".webName span");
    const logo = document.getElementById("logo");

    currentPage.innerHTML = activeSection ? `${activeSection}` : "Home";

    if (activeSection === "aboutMe") {
      document
        .querySelectorAll(".headerOption span, .burgerMenu p")
        .forEach((item) => {
          item.style.color = "#ffffff";
        });
      applyActiveStyles(activeElement);

      if(isMobile){
        menu.style.background = "#26262680";
        menu.style.backdropFilter = "blur(8px)";
        menu.style.border = " 1px solid #767676";
      } else {
        menu.style.background = "none";
        menu.style.backdropFilter = "none";
        menu.style.border = "none";
      }

      if (webNameText && logo) {
        burger.forEach((item) => {
          item.style.background = "#ffffff";
        });
        webNameText.style.color = "#ffffff";
        logo.style.filter = "invert(1)";
      }
    } else {
      applyActiveStyles(activeElement);

      if(isMobile){
        menu.style.background = "#fbfbfbc4";
        menu.style.backdropFilter = "blur(8px)";
        menu.style.border = " 1px solid #d0d0d0";
      } else {
        menu.style.background = "none";
        menu.style.backdropFilter = "none";
        menu.style.border = "none";
      }

      if (webNameText && logo) {
        burger.forEach((item) => {
          item.style.background = "#1e1e1e";
        });
        webNameText.style.color = "#1e1e1e";
        logo.style.filter = "invert(0)";
      }
    }
  }, [activeSection, isMobile]);

  useEffect(() => {
    if (!isMobile) {
      let currentSection = 0;
      const allSections = document.querySelectorAll("section");
      const totalSections = allSections.length;
      let isScrolling = false;
      let cardScrollCount = 0;
      let lastScrollDirection = 0; // 1 for down, -1 for up

      function scrollToSectionWheel(index) {
        if (index >= 0 && index < totalSections) {
          isScrolling = true;
          allSections[index].scrollIntoView({ behavior: "smooth" });

          setTimeout(() => {
            isScrolling = false;
          }, 200);
        }
      }

      function scrollWithinCardSection(event) {
        if (event.deltaY > 0) {
          if (cardScrollCount < 3) {
            window.scrollBy({
              top: (76 * window.innerHeight) / 100,
              behavior: "smooth",
            });
            cardScrollCount++;
          } else {
            const nextSectionIndex =
              Array.from(allSections).indexOf(cardRef.current) + 1;
            if (nextSectionIndex < totalSections) {
              scrollToSectionWheel(nextSectionIndex);
              cardScrollCount = 0;
            }
          }
        } else {
          if (cardScrollCount > 0) {
            window.scrollBy({
              top: (-76 * window.innerHeight) / 100,
              behavior: "smooth",
            });
            cardScrollCount--;
          } else {
            const prevSectionIndex =
              Array.from(allSections).indexOf(cardRef.current) - 1;
            if (prevSectionIndex >= 0) {
              scrollToSectionWheel(prevSectionIndex);
              cardScrollCount = 3;
            }
          }
        }
      }

      const handleWheel = (event) => {
        if (isScrolling) return;

        const cardSection = cardRef.current;
        const cardSectionRect = cardSection.getBoundingClientRect();
        const inCardSection =
          cardSectionRect.top <= window.innerHeight &&
          cardSectionRect.bottom >= 0;

        if (inCardSection) {
          if (lastScrollDirection !== Math.sign(event.deltaY)) {
            cardScrollCount = event.deltaY > 0 ? 0 : 3;
          }
          lastScrollDirection = Math.sign(event.deltaY);
          scrollWithinCardSection(event);
        } else {
          if (event.deltaY > 0 && currentSection < totalSections - 1) {
            currentSection++;
            scrollToSectionWheel(currentSection);
          } else if (event.deltaY < 0 && currentSection > 0) {
            currentSection--;
            scrollToSectionWheel(currentSection);
          }
        }
      };

      window.addEventListener("wheel", handleWheel);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              currentSection = Array.from(allSections).indexOf(entry.target);
              if (
                entry.target === cardRef.current &&
                lastScrollDirection === 1
              ) {
                cardScrollCount = 0;
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      allSections.forEach((section) => observer.observe(section));

      return () => {
        window.removeEventListener("wheel", handleWheel);
        allSections.forEach((section) => observer.unobserve(section));
      };
    }
  }, [cardRef, isMobile]);

  return (
    <div className="App">
      <section ref={homeRef}>
        <PageOne />
      </section>
      <section ref={workRef}>
        <PageTwo isMobile={isMobile} />
      </section>
      {!isMobile && (
        <section ref={cardRef}>
          <CardWrapper />
        </section>
      )}
      <section ref={aboutMeRef}>
        <PageThree resume={resume} />
      </section>
      <section ref={contactRef}>
        <PageFour />
      </section>
    </div>
  );
}

export default Home;
