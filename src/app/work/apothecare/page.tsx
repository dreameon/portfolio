import { ParagraphBlock, Section } from "@/components/Sections";
import Project from "@/components/Project";
import {
  Gallery,
  GalleryContainer,
  GalleryCard,
  ImageFullWidth,
  VideoCard,
  ImageCard,
} from "@/components/Media";
import banner from "~/public/assets/apothecare/banner.png";
import criteria from "~/public/assets/apothecare/criteria.png";
import display from "~/public/assets/apothecare/display.png";
import infoArch from "~/public/assets/apothecare/info-arch.png";
import productPage from "~/public/assets/apothecare/product-page.png";
import sample from "~/public/assets/apothecare/sample.png";
import skinProfileComponents from "~/public/assets/apothecare/skin-profile-components.png";
import skinProfile from "~/public/assets/apothecare/skin-profile.png";
import sknicareJournal from "~/public/assets/apothecare/skincare-journal.png";

export default function Apothecare() {
  return (
    <div className="apothecare">
      <Project
        title="Apothecare"
        bannerSrc={banner}
        sampleSrc={sample}
        overview={[
          "Fictional skincare e-commerce app with the goal of simplifying skincare ",
          "apothecare has the first and foremost goal of to providing users with enough information to make well-informed decisions while finding a skincare routine that works for them",
        ]}
        role="UX Designer"
        roleBreakdown="(Ideation, Design, Prototyping)"
        projectTime="4 months (Jan 2025 - Apr 2025)"
        prototypeLink="https://www.figma.com/proto/kAP5AXDPd4PXHYLbfV0rJI/PRO-Apothecare-Design-System?page-id=256%3A3274&node-id=256-3444&viewport=713%2C112%2C0.27&t=okdGymDao25jAX8I-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=256%3A3444&show-proto-sidebar=1"
      >
        <Section sectionTitle="the problem">
          <p>
            Current-day skincare product names are one of two things: either a
            vague promise which sounds too good to be true like
            “pore-minimizing”; or filled with intimidating scientific terms like
            “alpha-hydroxy acid”, which really just sounds like chemistry class
            or, worse, like we’re melting our face off with acid. The current
            ingredient-based product-naming system isn’t necessarily flawed if
            the user understands the nomenclature, but is not at all
            beginner-friendly. Most products also have a long and complex and
            ingredient list, making it even harder for beginners to find what’s
            right for them.
          </p>
        </Section>

        <Section sectionTitle="the vision">
          <p>
            To solve the problem, I brought it back to the basics and focused on
            helping users feel comfortable with the most important aspect of
            skincare - the formula and its ingredients. The idea was to empower
            users to make well-informed decisions for themselves by easily
            assessing whether the product, based on its ingredients, would help
            address their skin concerns. I also wanted to develop a system
            which, based on the user’s skincare history, would recommend
            products.
          </p>
        </Section>

        <Section sectionTitle="the design">
          <ParagraphBlock>
            <p>While designing the app, I focused on three main goals:</p>
            <ol className="list-decimal pl-2">
              <li>
                Giving users full control over product browsing experience{" "}
              </li>
              <li>
                Supplying enough information and reducing complexity to give
                users confidence to make a purchase{" "}
              </li>
              <li>
                Providing users with an easy way to document information about
                their skin
              </li>
            </ol>
          </ParagraphBlock>

          <Gallery caption="Information architecture was a key consideration during low-fidelity wireframing">
            <ImageFullWidth
              src={infoArch}
              alt="Low-fidelity wireframes for Apothecare"
            />
          </Gallery>

          <Gallery caption="Users can search by different criteria">
            <ImageFullWidth
              src={criteria}
              alt="Three sample search process screens"
            />
          </Gallery>

          <Gallery caption="Clean display of information that can be easily parsed">
            <ImageFullWidth
              src={display}
              alt="Sample elements in design system"
            />
          </Gallery>

          <Gallery caption="Product page breaks down compatibility and other useful information">
            <ImageFullWidth
              src={productPage}
              alt="Sample product page screen with its components"
            />
          </Gallery>

          <Gallery caption="Each section in the product page is collapsible to power users to easily sift through the information they need">
            <GalleryCard isOriginal={false}>
              <VideoCard
                src="/assets/apothecare/collapsible.mp4"
                alt="Sample product page screen with its components"
              />
            </GalleryCard>
          </Gallery>

          <GalleryContainer>
            <Gallery caption="">
              <GalleryCard isOriginal={false}>
                <ImageCard src={skinProfile} alt="Skin profile screen" />
              </GalleryCard>
            </Gallery>

            <Gallery caption="">
              <GalleryCard
                isOriginal={false}
                bgColour="bg-(--Colour-Card-Apothecare)"
              >
                <ImageCard
                  src={skinProfileComponents}
                  alt="Components of skin profile"
                />
              </GalleryCard>
            </Gallery>
          </GalleryContainer>

          <Gallery caption="">
            <ImageFullWidth src={sknicareJournal} alt="Skin journal screens" />
          </Gallery>
        </Section>
      </Project>
    </div>
  );
}
