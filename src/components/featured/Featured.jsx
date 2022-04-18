import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import SmallNav from "../ui/smallNav/SmallNav";
import FeaturedInfo from "./featuredInfo/FeaturedInfo";

import remaxLogo from "../../assets/img/clients/Remax.svg";
import remaxWeb from "../../assets/img/featured/remax-web.svg";
import virtuselLogo from "../../assets/img/featured/virtusel.svg";
import virtuselWeb from "../../assets/img/featured/virtusel-web.svg";
import wolfwizardLogo from "../../assets/img/featured/wolfwizard.svg";
import wolfwizardWeb from "../../assets/img/featured/wolfwizard-web.svg";
import fortuneLogo from "../../assets/img/featured/fortune.png";
import fortuneWeb from "../../assets/img/featured/fortune-web.svg";

import featuredData from "./featuredData.json";
import classes from "./Featured.module.scss";

const Featured = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isWebsiteAnimated, setIsWebsiteAnimated] = useState(false);
  const [showFeatured, setShowFeatured] = useState("website");

  const showFeaturedItem = (secName) => {
    setShowFeatured(secName);
  };
  return (
    <div data-section="Featured" className={classes.featured} id="top-anchor">
      <div className={classes["featured-header"]}>
        <SectionHeading>Featured</SectionHeading>
        <SmallNav
          navData={["Website", "Apps", "Branding", "Marketing"]}
          onNavClick={showFeaturedItem}
        />
      </div>
      <div className={classes["featured-main"]}>
        {showFeatured === "website" && (
          <FeaturedInfo
            logo={remaxLogo}
            ui={remaxWeb}
            isAnimated={isWebsiteAnimated || isAnimated}
            setIsAnimated={setIsAnimated}
            setIsWebsiteAnimated={setIsWebsiteAnimated}
            description={featuredData[`website`].description}
            btnText={featuredData[`website`].btnText}
            btnColor={featuredData[`website`].btnColor}
            btnUrl={featuredData[`website`].btnUrl}
          />
        )}
        {showFeatured === "apps" && (
          <FeaturedInfo
            logo={virtuselLogo}
            ui={virtuselWeb}
            isAnimated={true}
            setIsAnimated={setIsAnimated}
            description={featuredData[`apps`].description}
            btnText={featuredData[`apps`].btnText}
            btnColor={featuredData[`apps`].btnColor}
            btnUrl={featuredData[`apps`].btnUrl}
          />
        )}
        {showFeatured === "branding" && (
          <FeaturedInfo
            logo={wolfwizardLogo}
            ui={wolfwizardWeb}
            isAnimated={true}
            setIsAnimated={setIsAnimated}
            description={featuredData[`branding`].description}
            btnText={featuredData[`branding`].btnText}
            btnColor={featuredData[`branding`].btnColor}
            btnUrl={featuredData[`branding`].btnUrl}
          />
        )}
        {showFeatured === "marketing" && (
          <FeaturedInfo
            logo={fortuneLogo}
            ui={fortuneWeb}
            isAnimated={true}
            setIsAnimated={setIsAnimated}
            description={featuredData[`marketing`].description}
            btnText={featuredData[`marketing`].btnText}
            btnColor={featuredData[`marketing`].btnColor}
            btnUrl={featuredData[`marketing`].btnUrl}
          />
        )}
      </div>
    </div>
  );
};

export default Featured;
