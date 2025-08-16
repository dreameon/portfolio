import React from "react";
import Synopsis from "../../components/Synopsis.jsx";
import snuggle from "./Snuggle.module.css";

function Snuggle() {
  return (
    <div className={snuggle.snuggle}>
      <div className={`base-banner ${snuggle.banner}`}>
        <img
          className="banner-img"
          src="/assets/snuggle/banner.png"
          alt="Banner for Snuggle project"
        />
      </div>

      <div className="project">
        <div className="section" id="project-title">
          <div className={`base-title ${snuggle.title}`}>
            <h1>Snuggle</h1>
          </div>
        </div>
        <Synopsis
          overview={
            "Graduate program team capstone project aiming to help animal shelters connect with potential adopters"
          }
          role={"Lead Designer"}
          roleBreakdown={
            "(Ideation, User Research, Design, User Testing, Prototyping)"
          }
          projectTime={"4 months (Jan 2025 - Apr 2025)"}
          prototypeLink={
            "https://www.figma.com/proto/aB0nlDgqdoPWzqp6FOMUks/Snuggle?page-id=624%3A40488&node-id=910-15363&p=f&viewport=-947%2C913%2C0.17&t=5uZwhL3pHdvN8ILj-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=910%3A15363&show-proto-sidebar=1"
          }
          projectSpecsClass={snuggle["project-specs"]}
        />
        <div className="section" id="the problem">
          <h2>the problem</h2>
          <div className="section-body">
            <p>
              As a group of animal-loving students, we wanted to improve pet
              adoption rates to allow rescue animals to find their forever
              homes. Given that many people are open to adopting, why do such
              few actually convert into adoption? To better understand the
              reasons behind the gap, we interviewed both shelters and pet
              owners. Through our conversations, we were able to pinpoint the
              following user pain points in the current adoption experience:
            </p>

            <div className="subsection">
              <h4>shelter pain points</h4>
              <div className={`base-card ${snuggle.shelter} ${snuggle.card}`}>
                <div className={snuggle["pain-point-wrapper"]}>
                  <img src="/assets/snuggle/clock-icon.svg" alt="Clock icon" />
                  <div className={snuggle["pain-point"]}>
                    <h6>spread too thin</h6>
                    <p>
                      With a lack of resources and an abundance of tasks,
                      shelters are short in the amount of time they have to
                      interact with applicants and assist them with their needs
                    </p>
                  </div>
                </div>

                <div className={snuggle["pain-point-wrapper"]}>
                  <img
                    src="/assets/snuggle/warning-icon.svg"
                    alt="Warning icon"
                  />
                  <div className={snuggle["pain-point"]}>
                    <h6>prehistoric processes</h6>
                    <p>
                      Manually managing postings for rescues and
                      processing/screening applications and scheduling
                      calls/meet-and-greets with adopters using outdated
                      technology is time-consuming and inefficient
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h4>adopter pain points</h4>
              <div className={`base-card ${snuggle.adopter} ${snuggle.card}`}>
                <div className={snuggle["pain-point-wrapper"]}>
                  <img src="/assets/snuggle/form-icon.svg" alt="Form icon" />
                  <div className={snuggle["pain-point"]}>
                    <h6>Tedious Applications</h6>
                    <p>
                      Filling out lengthy forms (which are sometimes in-person
                      only) is not fun
                    </p>
                  </div>
                </div>

                <div className={snuggle["pain-point-wrapper"]}>
                  <img src="/assets/snuggle/ghost-icon.svg" alt="Ghost icon" />
                  <div className={snuggle["pain-point"]}>
                    <h6>Being Ghosted</h6>
                    <p>
                      Adopters are rarely updated, uncertain whether or not they
                      have been rejected (and, if so, for what reason)
                    </p>
                  </div>
                </div>

                <div className={snuggle["pain-point-wrapper"]}>
                  <img src="/assets/snuggle/eye-icon.svg" alt="Eye icon" />
                  <div className={snuggle["pain-point"]}>
                    <h6>Non-transparent & Confusing</h6>
                    <p>
                      Adopters struggle to get answers to questions, making
                      fully-informed decisions impossible. Without adequate
                      preparation, new owners encounter unforeseen expenses and
                      underestimate commitment and responsibilities of a new pet
                    </p>
                  </div>
                </div>

                <div className={snuggle["pain-point-wrapper"]}>
                  <img src="/assets/snuggle/flag-icon.svg" alt="Flag icon" />
                  <div className={snuggle["pain-point"]}>
                    <h6>Forced to Jump the Gun</h6>
                    <p>
                      Photos and short bios (paired with a lack of time to
                      meet/bond with the pet) is not enough to make a decision
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-wrapper">
              <div
                className={`base-card bottom-cropped ${snuggle.card} ${snuggle.before}`}
              ></div>
              <figcaption>
                The listing is cute, but offers very little information about
                Serena
              </figcaption>
            </div>

            <div className="gallery-wrapper">
              <div
                className={`base-card bottom-cropped ${snuggle.card} ${snuggle.before}`}
              ></div>
              <figcaption>
                Example application form that illustrates the tedious process
                (imagine having to fill out one of these for each shelter you’re
                applying to)
              </figcaption>
            </div>
          </div>
        </div>

        <div className="section" id="the vision">
          <h2>the vision</h2>
          <div className="section-body">
            <div className="paragraph">
              <p>Two key improvements we wanted to make:</p>
              <div>
                <p>
                  <b>
                    1. Improving efficiency to allow shelters to save time for
                    their other tasks; and
                  </b>
                </p>
                <p>
                  <b>
                    2. Creating a seamless user flow that allows adopters to
                    effortlessly glide through the application process
                  </b>
                </p>
              </div>
            </div>

            <div className="paragraph">
              <p>
                We focused on the adopter side of things and based our solution
                on three guiding principles:
              </p>
              <div className="card-wrapper">
                <div className={`base-card ${snuggle.card}`}>
                  <div
                    className={`paragraph ${snuggle.adopter} ${snuggle.center}`}
                  >
                    <h6>Human Touch</h6>
                    <p>
                      Involving potential adopters throughout the process and
                      making them feel part of the discussion
                    </p>
                  </div>
                </div>
                <div className={`base-card ${snuggle.card}`}>
                  <div
                    className={`paragraph ${snuggle.adopter} ${snuggle.center}`}
                  >
                    <h6>Transparency</h6>
                    <p>
                      Powering users to effortlessly access whatever information
                      they need whenever they want. Communicating needs,
                      expectations, and reasons for matching decision to both
                      parties
                    </p>
                  </div>
                </div>
                <div className={`base-card ${snuggle.card}`}>
                  <div
                    className={`paragraph ${snuggle.adopter} ${snuggle.center}`}
                  >
                    <h6>Companionship</h6>
                    <p>
                      Helping make meaningful connections between pets and
                      adopters, not just processing transactions. Allowing our
                      furry friends’ personalities to shine
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p>
              We decided to go for an approach inspired by dating apps,
              featuring AI-powered, personified chatbots of each rescue (
              <b>PetBots</b>). The idea was to offer a simplified, fun and
              interactive alternative to traditional, resource-consuming
              applications, which we later named <b>Snuggle</b>.
            </p>
          </div>
        </div>

        <div className="section" id="the design">
          <h2>the design</h2>
          <div className="section-body">
            <p>
              As the lead designer of the team, I crafted the design system,
              design tokens, and screens from scratch. Colours and typography
              were chosen to emanate a playful and warm feeling. The use of
              colours was minimal and deliberate so the user’s attention would
              be on the profiles.{" "}
            </p>
            <div className="gallery-wrapper">
              <div className={`base-card ${snuggle.card}`}></div>
              <figcaption>
                The entire design system was built from scratch to ensure
                consistency between elements. I made sure to use good naming
                practices & design tokens for maintainability
              </figcaption>
            </div>

            <div className="gallery-wrapper">
              <div className={`base-card ${snuggle.card}`}></div>
              <figcaption>
                New onboarding flow to replace original application forms. Short
                and sweet
              </figcaption>
            </div>

            <div className="gallery-wrapper">
              <div
                className={`base-card top-bottom-cropped ${snuggle.card} ${snuggle.before}`}
              ></div>
              <figcaption>
                Example application form that illustrates the tedious process
                (imagine having to fill out one of these for each shelter you’re
                applying to)
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snuggle;
