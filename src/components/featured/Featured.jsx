import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import FeaturedNav from "./featuredNav/FeaturedNav";
import FeaturedInfo from "./featuredInfo/FeaturedInfo";

import remaxLogo from "../../assets/img/featured/remax.svg";
import remaxWeb from "../../assets/img/featured/remax-web.svg";
import virtuselLogo from "../../assets/img/featured/virtusel.svg";
import virtuselWeb from "../../assets/img/featured/virtusel-web.svg";
import wolfwizardLogo from "../../assets/img/featured/wolfwizard.svg";
import wolfwizardWeb from "../../assets/img/featured/wolfwizard-web.svg";
import fortuneLogo from "../../assets/img/featured/fortune.png";
import fortuneWeb from "../../assets/img/featured/fortune-web.svg";

import featuredData from "./featuredData.json";
import classes from "./Featured.module.css";

const Featured = () => {
  const [showFeatured, setShowFeatured] = useState("website");

  const showFeaturedItem = (secName) => {
    setShowFeatured(secName);
  };
  return (
    <div data-section="Featured" className={classes.featured}>
      <div className={classes["featured-header"]}>
        <SectionHeading>Featured</SectionHeading>
        <FeaturedNav onNavClick={showFeaturedItem} />
      </div>
      <div className={classes["featured-main"]}>
        {showFeatured === "website" && (
          <FeaturedInfo
            logo={remaxLogo}
            ui={remaxWeb}
            description={featuredData[`website`].description}
            btnText={featuredData[`website`].btnText}
            btnColor={featuredData[`website`].btnColor}
          />
        )}
        {showFeatured === "apps" && (
          <FeaturedInfo
            logo={virtuselLogo}
            ui={virtuselWeb}
            description={featuredData[`apps`].description}
            btnText={featuredData[`apps`].btnText}
            btnColor={featuredData[`apps`].btnColor}
          />
        )}
        {showFeatured === "branding" && (
          <FeaturedInfo
            logo={wolfwizardLogo}
            ui={wolfwizardWeb}
            description={featuredData[`branding`].description}
            btnText={featuredData[`branding`].btnText}
            btnColor={featuredData[`branding`].btnColor}
          />
        )}
        {showFeatured === "marketing" && (
          <FeaturedInfo
            logo={fortuneLogo}
            ui={fortuneWeb}
            description={featuredData[`marketing`].description}
            btnText={featuredData[`marketing`].btnText}
            btnColor={featuredData[`marketing`].btnColor}
          />
        )}
      </div>
    </div>
  );
};

export default Featured;
