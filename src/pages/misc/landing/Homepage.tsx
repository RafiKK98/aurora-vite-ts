import {
  blogData,
  faqData,
  featuresData,
  galleryData,
  showcaseData,
  statsData,
  testimonialData,
} from 'data/landing/homepage';
import OurMission from 'components/sections/misc/landing/about-us/OurMission';
import Team from 'components/sections/misc/landing/about-us/Team';
import FAQContact from 'components/sections/misc/landing/faq/FAQContact';
import Blog from 'components/sections/misc/landing/homepage/Blog';
import Clients from 'components/sections/misc/landing/homepage/Clients';
import FAQSection from 'components/sections/misc/landing/homepage/FAQSection';
import Features from 'components/sections/misc/landing/homepage/Features';
import Gallery from 'components/sections/misc/landing/homepage/Gallery';
import Hero from 'components/sections/misc/landing/homepage/Hero';
import Newsletter from 'components/sections/misc/landing/homepage/Newsletter';
import Pricing from 'components/sections/misc/landing/homepage/Pricing';
import Stats from 'components/sections/misc/landing/homepage/Stats';
import Testimonial from 'components/sections/misc/landing/homepage/Testimonial';
import WhoWeAre from 'components/sections/misc/landing/homepage/WhoWeAre';
import Examples from 'components/sections/misc/landing/homepage/examples';
import Showcase from 'components/sections/misc/landing/homepage/showcase';

const LandingHomepage = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Clients />
      <Showcase data={showcaseData} />
      <Features data={featuresData} />
      <Examples />
      <Gallery data={galleryData} />
      <OurMission sx={{ background: 'none' }} />
      <Stats data={statsData} />
      <Pricing />
      <Testimonial data={testimonialData} />
      <Blog data={blogData} />
      <Team />
      <Newsletter />
      <FAQSection data={faqData} />
      <FAQContact
        sx={{
          '&:after': {
            content: 'none',
          },
        }}
      />
    </>
  );
};

export default LandingHomepage;
