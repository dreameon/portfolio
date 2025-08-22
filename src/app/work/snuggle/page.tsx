import { Section, Subsection, ParagraphBlock } from "@/components/Sections";
import Project from "@/components/Project";
import {
  PainPoint,
  PainPoints,
  ProcessDescriptionWrapper,
  ProcessStep,
  Process,
  ProcessComparison,
  Textbox,
} from "@/components/SnuggleComponents";
import {
  Gallery,
  GalleryCard,
  ImageFullWidth,
  VideoCard,
  ImageCard,
} from "@/components/Media";
import banner from "~/public/assets/snuggle/banner.png";
import sample from "~/public/assets/snuggle/sample.png";
import alert from "~/public/assets/snuggle/alert.png";
import chat from "~/public/assets/snuggle/chat.png";
import designSystem from "~/public/assets/snuggle/design-system.png";
import form from "~/public/assets/snuggle/form.png";
import listing from "~/public/assets/snuggle/listing.png";
import onboarding from "~/public/assets/snuggle/onboarding.png";
import tutorialBrief from "~/public/assets/snuggle/tutorial-brief.png";
import clockIcon from "~/public/assets/snuggle/clock-icon.svg";
import eyeIcon from "~/public/assets/snuggle/eye-icon.svg";
import flagIcon from "~/public/assets/snuggle/flag-icon.svg";
import formIcon from "~/public/assets/snuggle/form-icon.svg";
import ghostIcon from "~/public/assets/snuggle/ghost-icon.svg";
import warningIcon from "~/public/assets/snuggle/warning-icon.svg";

export default function Snuggle() {
  return (
    <div className="snuggle">
      <Project
        title="Snuggle"
        bannerSrc={banner}
        sampleSrc={sample}
        overview={[
          "Graduate program team capstone project aiming to help animal shelters connect with potential adopters",
          "Snuggle is a smart pet-adoption matching platform that helps both ends of the leash find the perfect, long-lasting companion with ease",
        ]}
        role="Lead Designer"
        roleBreakdown="(Ideation, User Research, Design, User Testing, Prototyping)"
        projectTime="4 months (Jan 2025 - Apr 2025)"
        prototypeLink="https://www.figma.com/proto/aB0nlDgqdoPWzqp6FOMUks/Snuggle?page-id=624%3A40488&node-id=910-15363&p=f&viewport=-947%2C913%2C0.17&t=5uZwhL3pHdvN8ILj-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=910%3A15363&show-proto-sidebar=1"
      >
        <Section sectionTitle="the problem">
          <p>
            As a group of animal-loving students, we wanted to improve pet
            adoption rates to allow rescue animals to find their forever homes.
            Given that many people are open to adopting, why do such few
            actually convert into adoption? To better understand the reasons
            behind the gap, we interviewed both shelters and pet owners. Through
            our conversations, we were able to pinpoint the following user pain
            points in the current adoption experience:
          </p>

          <Subsection subsectionTitle="shelter pain points">
            <PainPoints type="shelter">
              <PainPoint
                icon={clockIcon}
                iconAlt="Clock icon"
                painPoint="Spread Too Thin"
                type="shelter"
              >
                With a lack of resources and an abundance of tasks, shelters are
                short in the amount of time they have to interact with
                applicants and assist them with their needs
              </PainPoint>
              <PainPoint
                icon={warningIcon}
                iconAlt="Warning icon"
                painPoint="Prehistoric Processes"
                type="shelter"
              >
                Manually managing postings for rescues and processing/screening
                applications and scheduling calls/meet-and-greets with adopters
                using outdated technology is time-consuming and inefficient
              </PainPoint>
            </PainPoints>
          </Subsection>

          <Subsection subsectionTitle="adopter pain points">
            <PainPoints type="adopter">
              <PainPoint
                icon={formIcon}
                iconAlt="Form icon"
                painPoint="Tedious Applications"
                type="adopter"
              >
                Filling out lengthy forms (which are sometimes in-person only)
                is not fun
              </PainPoint>
              <PainPoint
                icon={ghostIcon}
                iconAlt="Ghost icon"
                painPoint="Being Ghosted"
                type="adopter"
              >
                Adopters are rarely updated, uncertain whether or not they have
                been rejected (and, if so, for what reason)
              </PainPoint>
              <PainPoint
                icon={eyeIcon}
                iconAlt="Eye icon"
                painPoint="Non-transparent & Confusing"
                type="adopter"
              >
                Adopters struggle to get answers to questions, making
                fully-informed decisions impossible. Without adequate
                preparation, new owners encounter unforeseen expenses and
                underestimate commitment and responsibilities of a new pet
              </PainPoint>
              <PainPoint
                icon={flagIcon}
                iconAlt="Flag icon"
                painPoint="Forced to Jump the Gun"
                type="adopter"
              >
                Photos and short bios (paired with a lack of time to meet/bond
                with the pet) is not enough to make a decision
              </PainPoint>
            </PainPoints>
          </Subsection>
          <Gallery caption="The listing is cute, but offers very little information about Serena">
            <ImageFullWidth src={listing} alt="Example shelter pet listing" />
          </Gallery>
          <Gallery caption="Example application form that illustrates the tedious process (imagine having to fill out one of these for each shelter you’re applying to)">
            <ImageFullWidth src={form} alt="Example application form" />
          </Gallery>
        </Section>

        <Section sectionTitle="the vision">
          <ParagraphBlock>
            <p>Two key improvements we wanted to make:</p>
            <ol className="list-decimal pl-2">
              <li className="font-bold">
                Improving efficiency to allow shelters to save time for their
                other tasks; and
              </li>
              <li className="font-bold">
                Creating a seamless user flow that allows adopters to
                effortlessly glide through the application process
              </li>
            </ol>
          </ParagraphBlock>
          <div className="flex flex-col items-start self-stretch gap-(--Spacing-Default)">
            <p>
              We focused on the adopter side of things and based our solution on
              three guiding principles:
            </p>
            <div className="flex max-[750px]:flex-col items-start gap-(--Spacing-Default) self-stretch">
              <Textbox title="Human Touch">
                Involving potential adopters throughout the process and making
                them feel part of the discussion
              </Textbox>
              <Textbox title="Transparency">
                Powering users to effortlessly access whatever information they
                need whenever they want. Communicating needs, expectations, and
                reasons for matching decision to both parties
              </Textbox>
              <Textbox title="Companionship">
                Helping make meaningful connections between pets and adopters,
                not just processing transactions. Allowing our furry friends’
                personalities to shine
              </Textbox>
            </div>
          </div>

          <p>
            We decided to go for an approach inspired by dating apps, featuring
            AI-powered, personified chatbots of each rescue (<b>PetBots</b>).
            The idea was to offer a simplified, fun and interactive alternative
            to traditional, resource-consuming applications, which we later
            named <b>Snuggle</b>.
          </p>

          <ProcessComparison type="shelter">
            <Process type="original" processTitle="Current Shelter Process">
              <ProcessStep type="original" step="Post Listing">
                <ProcessDescriptionWrapper>
                  <li>Manually input details about pet</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="original" step="Review">
                <ProcessDescriptionWrapper>
                  <li>Manually screen applications</li>
                  <li>Schedule interviews with applicants of interest</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="original" step="Interview">
                <ProcessDescriptionWrapper>
                  <li>Ask applicant questions</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="original" step="Meet & Greet">
                <ProcessDescriptionWrapper>
                  <li>Arrange meetup</li>
                  <li>Ensure compatibility</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="original" step="Decision">
                <ProcessDescriptionWrapper>
                  <li>Process contract & transaction</li>
                  <li>Manually remove listing</li>
                  <li className="font-bold">
                    No follow-up for unsuccessful applicants
                  </li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
            </Process>

            <Process type="shelter" processTitle="Snuggle's Shelter Process">
              <ProcessStep type="shelter" step="Post Listing">
                <ProcessDescriptionWrapper>
                  <li className="font-bold">System generates pet profile</li>
                  <li>Set threshold for applicant consideration</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="shelter" step="Familiarize">
                <ProcessDescriptionWrapper>
                  <li className="font-bold">
                    PetBot asks necessary questions to applicants
                  </li>
                  <li>Arrange virtual/in-person meetups</li>
                  <li className="font-bold">
                    System rejects unsuccessful applicants w/ reason
                  </li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="shelter" step="Decision">
                <ProcessDescriptionWrapper>
                  <li>Arrange handover</li>
                  <li>Process contract & transaction</li>
                  <li>Mark pet as matched on platform</li>
                  <li className="font-bold">
                    System updates currently interested adopters
                  </li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
            </Process>
          </ProcessComparison>

          <ProcessComparison type="adopter">
            <Process type="original" processTitle="Current Adopter Process">
              <ProcessStep type="original" step="Browse">
                <ProcessDescriptionWrapper>
                  <li>Look at pet listings on website</li>
                  <li>No real-time support</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="original" step="Apply">
                <ProcessDescriptionWrapper>
                  <li>Fill out application</li>
                  <li>Submit to shelter</li>
                  <li>Repeat for different shelters</li>
                  <li className="font-bold">No follow-up if unsuccessful</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="original" step="Interview">
                <ProcessDescriptionWrapper>
                  <li>Answer shelter questions</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="original" step="Final Decision">
                <ul className="list-disc px-[2px]">
                  <li>Schedule handover</li>
                  <li>Meet pet for first time</li>
                  <li>Sign contract & pay in person</li>
                  <li className="font-bold">
                    No post-adoption support for first-time owners
                  </li>
                </ul>
              </ProcessStep>
            </Process>

            <Process type="adopter" processTitle="Snuggle's Adopter Process">
              <ProcessStep type="adopter" step="Onboard">
                <ProcessDescriptionWrapper>
                  <li>Create user profile</li>
                  <li className="font-bold">
                    Reuse profile for all applications
                  </li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="adopter" step="Explore">
                <ProcessDescriptionWrapper>
                  <li>Browse pet profiles</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="adopter" step="Familiarize">
                <ProcessDescriptionWrapper>
                  <li className="font-bold">
                    Chat with PetBots & ask necessary questions
                  </li>
                  <li>Meet pet virtually/in person</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="adopter" step="Final Decision">
                <ProcessDescriptionWrapper>
                  <li>Schedule handover</li>
                  <li>Sign contract & pay online/in person</li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
              <ProcessStep type="adopter" step="Support">
                <ProcessDescriptionWrapper>
                  <li className="font-bold">
                    AI generated advice (based on pet profile) for first-time
                    owners
                  </li>
                </ProcessDescriptionWrapper>
              </ProcessStep>
            </Process>
          </ProcessComparison>
        </Section>

        <Section sectionTitle="the design">
          <p>
            As the lead designer of the team, I crafted the design system,
            design tokens, and screens from scratch. Colours and typography were
            chosen to emanate a playful and warm feeling. The use of colours was
            minimal and deliberate so the user’s attention would be on the
            profiles.
          </p>
          <Gallery caption="The entire design system was built from scratch to ensure consistency between elements. I made sure to use good naming practices & design tokens for maintainability">
            <ImageFullWidth
              src={designSystem}
              alt="Design system for Snuggle"
            />
          </Gallery>
          <Gallery caption="New onboarding flow to replace original application forms. Short and sweet">
            <ImageFullWidth
              src={onboarding}
              alt="Screens showing the onboarding flow for Snuggle"
            />
          </Gallery>
          <Gallery caption="You receive encouragement as you proceed each stage. Yay dopamine!">
            <ImageFullWidth src={alert} alt="Sample alert screens" />
          </Gallery>
          <Gallery caption="From getting answers to your questions to scheduling meetings, everything is self served. The actual message content was done by another team member">
            <ImageFullWidth src={chat} alt="Sample Snuggle screens" />
          </Gallery>
        </Section>

        <Section sectionTitle="user testing">
          <Subsection subsectionTitle="following instructions is difficult">
            <p>
              Users did not recognize the tutorial being a tutorial and simply
              spammed skip. Upon this feedback, I created an interim screen
              after the onboarding and before the tutorial to clearly indicate
              that a tutorial will follow.
            </p>
          </Subsection>
          <Gallery caption="The tutorial introduction you would see after onboarding">
            <GalleryCard isOriginal={false}>
              <ImageCard
                src={tutorialBrief}
                alt="Screen welcoming users to the Snuggle tutorial and sample tutorial step"
              />
              <VideoCard
                src="/assets/snuggle/tutorial-old.mp4"
                alt="Screen welcoming users to the Snuggle tutorial and sample tutorial step"
              />
            </GalleryCard>
          </Gallery>
          <p>
            However, the interim screen did not completely eliminate user
            confusion during the second round of testing, due to the animation
            on the tutorial not completely representative of the actual
            interaction. To solve this, I replaced the sliding animation with
            animated cards to better represent the profile cards on their feed.
            Each step of the tutorial now also repeat itself in case users
            missed it the first time (which many did during this round of
            testing).
          </p>
          <Gallery caption="Improved tutorial has mechanics replicating those of the actual profile cards ">
            <GalleryCard isOriginal={false}>
              <VideoCard
                src="/assets/snuggle/tutorial-new.mp4"
                alt="New tutorial screen with animated cards"
              />
            </GalleryCard>
          </Gallery>
          <p>
            The new tutorial seemed to be well received during the third round
            of testing, with users now intuitively swiping left/right on the
            cards after completing the tutorial.
          </p>
          <Subsection subsectionTitle="we don’t speak dawg">
            <p>
              Testers were split on the use of doggolingo and lolspeak; some
              understood the messages clearly, but others were caught by
              surprise. For future iterations, I will include an option next to
              the messages to translate the language into normal English.
            </p>
          </Subsection>
          <Subsection subsectionTitle="overall impressions">
            <p>
              When asked about how they felt about the app, users generally
              responded positively and praised Snuggle on our creative approach
              to solve the shelter animal under-adoption issue. Some found
              talking to an animal a bit eccentric, but most didn’t mind the
              app’s resemblance to a dating app.{" "}
            </p>
          </Subsection>
        </Section>
      </Project>
    </div>
  );
}
