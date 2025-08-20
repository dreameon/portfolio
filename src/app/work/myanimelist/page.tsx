import { Section, Subsection, ParagraphBlock } from "@/components/Sections";
import Project from "@/components/Project";
import {
  Gallery,
  GalleryCard,
  GalleryContainer,
  ImageFullWidth,
  VideoCard,
  ImageCard,
} from "@/components/Media";
import Image from "next/image";

export default function MyAnimeList() {
  return (
    <div className="myanimelist">
      <Project
        title="MyAnimeList"
        bannerSrc="/assets/myanimelist/banner.png"
        sampleSrc="/assets/myanimelist/sample.svg"
        overview={[
          "Redesign of MyAnimeList (MAL), a popular anime database and community app",
          "Transforming the MAL experience from confusing and overwhelming into intuitive and inclusive",
        ]}
        role="UX Designer"
        roleBreakdown="(User Testing, Design, Prototyping)"
        projectTime="4 months (Sep 2024 - Dec 2024)"
        prototypeLink="https://www.figma.com/proto/v3nYau9Gxls4XfrXhOnLNQ/MyAnimeList-Redesign?page-id=843%3A3721&node-id=843-3864&viewport=222%2C428%2C0.22&t=QKHZentPsBZyzLVb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=843%3A3864&show-proto-sidebar=1"
      >
        <Section sectionTitle="the problem">
          <ParagraphBlock>
            <p>
              MyAnimeList (MAL) is a popular cataloging, database, and community
              app for anime and manga. The app was named after their main
              feature: lists that users can make to organize and log
              anime/manga. Originally a website, they released a mobile app
              version that is available on both App Store and Google Play;
              however, it has a subpar rating of 3.7.
            </p>
            <p>
              To figure out the reason behind its relative unpopularity, I
              conducted an app audit with 5 participants. To summarize my
              findings, user complaints could be placed in one of four
              categories:
            </p>
            <ul>
              <li className="list-disc">Unfriendly to new users</li>
              <li className="list-disc">
                Overwhelming and unintuitive interface
              </li>
              <li className="list-disc">Lack of feedback</li>
              <li className="list-disc">Not fun enough!!</li>
            </ul>
          </ParagraphBlock>

          <Gallery caption="Example of how busy the old interface was">
            <ImageFullWidth
              src="/assets/myanimelist/sample-old.svg"
              alt="Sample screens from original MAL app"
            />
          </Gallery>
        </Section>

        <Section sectionTitle="the vision">
          <p>
            The goal of the redesign was to clean up the interface and transform
            the app into an easy-to-understand anime one-stop shop for all
            people. The idea was that by making the app simpler and more
            intuitive, users would be able to easily find and update the
            information as they need, which would give them more time to,
            well... watch anime.
          </p>
        </Section>

        <Section sectionTitle="the design">
          <p>
            While updating the interface, much consideration was placed on
            creating <b>cohesion</b> and <b>consistency</b> across the app.
          </p>
          <Subsection subsectionTitle="lists">
            <ParagraphBlock>
              <p>
                The list feature is the very core of the MAL app - users
                regularly add to lists, check existing lists, and make edits to
                lists. As such, this became my main focus for this redesign. The
                My List tab, which shows all the user’s lists, was improved to
                be easier to navigate - it was originally a mess with
                hidden/scrollable tabs and misleading buttons, (I could go on
                for ages about how unusable it is, but I digress).
              </p>
              <p>
                There was also an issue with the representation of the lists
                themselves. Though the original list format took “list” very
                literally, it didn’t allow for an efficient display of
                information.
              </p>
            </ParagraphBlock>
          </Subsection>

          <Gallery caption="Very crude low-fidelity brainstorming of different possible list formats, along with their potential to be used across the app. The ideal candidate would balance simplicity with utility">
            <ImageFullWidth
              src="/assets/myanimelist/wireframes.svg"
              alt="Wireframes for list MyLists and Discover screens"
            />
          </Gallery>
          <Gallery caption="The new My Lists experience. Clicking into a list on the My Lists tab brings you to a more detailed view">
            <ImageFullWidth
              src="/assets/myanimelist/list-overview.svg"
              alt="New designs for MyList tab and sample list"
            />
          </Gallery>
          <GalleryContainer>
            <Gallery
              caption="Original My List overview, with each list represented as a sub-tab. The anime-manga toggle is barely legible"
              isEqual={true}
            >
              <GalleryCard isOriginal={true}>
                <ImageCard
                  src="/assets/myanimelist/my-list-old.svg"
                  alt="Old MyLists tab view"
                />
              </GalleryCard>
            </Gallery>
            <Gallery
              caption="Simplified My List overview which uses a “list of lists” approach. Anime tab is clearly visible and separate from manga tab"
              isEqual={true}
            >
              <GalleryCard isOriginal={false}>
                <ImageCard
                  src="/assets/myanimelist/my-list-new.svg"
                  alt="New MyLists tab view"
                />
              </GalleryCard>
            </Gallery>
          </GalleryContainer>
          <Gallery caption="The original list format of the watchlist (left) differs quite drastically from the grid format of the seasonal tab (right)">
            <GalleryCard isOriginal={true}>
              <ImageCard
                src="/assets/myanimelist/to-watch-old.svg"
                alt="Current (old) To-Watch list"
              />
              <ImageCard
                src="/assets/myanimelist/seasonal-old.svg"
                alt="Current (old) seasonal anime view"
              />
            </GalleryCard>
          </Gallery>
          <Gallery caption="Updated watchlist (left) uses same layout and format as seasonal tab (right) for consistency. Information within the tiles is also more organized ">
            <GalleryCard isOriginal={false}>
              <ImageCard
                src="/assets/myanimelist/to-watch-new.svg"
                alt="Redesigned To-Watch list"
              />
              <ImageCard
                src="/assets/myanimelist/seasonal-new.svg"
                alt="Redesigned seasonal anime view"
              />
            </GalleryCard>
          </Gallery>
          <Subsection subsectionTitle="home screen">
            <p>
              Right from the start, it was clear that a simple reorganization of
              the home screen wouldn’t be enough - it needed to be purged. As
              the first thing you see when you land in the app, the home screen
              should provide the most utility. However, it’s currently what
              seems like a love child between what intuitively would be the
              discover tab and discussion tab (except they have both those tabs
              as well). I decluttered the view from discussions and replaced
              them with high-priority feature shortcuts and information that
              pertains to the user the most.{" "}
            </p>
          </Subsection>
          <Gallery caption="Mid-fidelity wireframe of new calendar functionality, allowing users to see the schedule of currently-airing shows">
            <GalleryCard isOriginal={false} paddingBottom={false}>
              <Image
                width="380"
                height="365"
                src="/assets/myanimelist/seasonal-wireframe.svg"
                alt="Mid-fidelity wireframe showing new seasonal calendar feature"
              />
            </GalleryCard>
          </Gallery>

          <GalleryContainer>
            <Gallery caption="The original, (very) busy home screen with discussions and anime recommendations">
              <GalleryCard isOriginal={true}>
                <ImageCard
                  width={244}
                  height={500}
                  src="/assets/myanimelist/home-old.svg"
                  alt="Old home screen"
                />
              </GalleryCard>
            </Gallery>
            <Gallery caption="Updated home screen features new episode updates at the very top. You can also easily update your anime progress or check what’s airing from the calendar view">
              <GalleryCard isOriginal={false}>
                <ImageCard
                  width={231}
                  height={500}
                  src="/assets/myanimelist/home-new.svg"
                  alt="New home screen"
                />
                <ImageCard
                  width={231}
                  height={500}
                  src="/assets/myanimelist/calendar.svg"
                  alt="Anime schedule"
                />
              </GalleryCard>
            </Gallery>
          </GalleryContainer>

          <Subsection subsectionTitle="Show Pages">
            <p>
              Due to MAL being a database app, redating the show pages largely
              translated to me reorganizing information (I couldn’t really
              delete anything). Nevertheless, reinforcing information hierarchy
              improved the page’s legibility.
            </p>
          </Subsection>
          <Gallery caption="The lack of headers confused quite a few users when I conducted the audit. Some people didn’t know that the people below the characters were their voice actors">
            <GalleryCard isOriginal={true}>
              <ImageCard
                src="/assets/myanimelist/show-page-old.svg"
                alt="Screen showing old show page view"
              />
              <ImageCard
                src="/assets/myanimelist/va-old.svg"
                alt="Screen showing how voice actors were organized"
              />
            </GalleryCard>
          </Gallery>
          <Gallery caption="The power of labels: you can quickly scan for information now">
            <GalleryCard isOriginal={false}>
              <ImageCard
                src="/assets/myanimelist/show-page-new.svg"
                alt="Screen showing new show page view"
              />
              <ImageCard
                src="/assets/myanimelist/va-new.svg"
                alt="Screen showing how voice actors are newly organized"
              />
            </GalleryCard>
          </Gallery>
          <Gallery caption="The alerts aren‘t perfect due to project scope, but provide at least some sort of feedback to confirm user actions (something that the original app didn’t have)">
            <GalleryCard isOriginal={false}>
              <VideoCard
                src="/assets/myanimelist/notifs.mp4"
                alt="Video showing newly implemented notifications"
              />
            </GalleryCard>
          </Gallery>
        </Section>
        <Section sectionTitle="accessibility">
          <p>
            To make sure the redesign considers as many people as possible,
            accessibility was hugely considered throughout the entire project.
            Colours were tested with contrast ratios and colour blindness
            simulators to ensure enough contrast, and elements were sized
            according to accessibility standards to make sure they were
            comfortably sized.
          </p>
          <Gallery caption="">
            <ImageFullWidth
              src="/assets/myanimelist/accessibility.svg"
              alt="Collage showing accessibility tools that were used"
            />
          </Gallery>
        </Section>
      </Project>
    </div>
  );
}
