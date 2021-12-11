import { useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";
import classes from "./Privacy.module.scss";
const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${classes["privacy"]} container`}>
      <div className={classes["privacy-container-1"]}>
        <SectionHeading size="4.5rem">
          Updot recognises the importance of maintaining your privacy.
        </SectionHeading>
        <div className={classes["para-container"]}>
          <p>
            This Privacy Policy sets out how Updot uses and protects any
            information that you give Updot when you use this https://updot.in
            or the Updot mobile application or any other digital medium and
            other offline sources of our Company.
          </p>
          <p>
            Updot is committed to ensure that your privacy is protected. Should
            we ask you to provide certain information by which you can be
            identified when using this website, then you can be assured that it
            will only be used in accordance with this Privacy Policy as it
            describes how we treat user information we collect from you, the
            policies and procedures on the collection, use, disclosure and
            protection of your information when you use our Updot Platform.
          </p>
          <p>
            This Privacy Policy applies to current and former visitors to our
            Updot Platform and to our online customers.
          </p>
          <p>
            By visiting and/or using our website, you agree to this Privacy
            Policy. Updot may change this policy from time to time by updating
            this page.
          </p>
          <p>
            You should check this page from time to time to ensure that you are
            happy with any changes.
          </p>
          <p>
            https://updot.in is a property of Updot, Partnership, established
            under laws of India, having its registered office at Partnership,
            Karnataka - 560090.
          </p>
        </div>
      </div>
      <div className={classes["privacy-container"]}>
        <SectionHeading size="4.5rem">
          Information we collect from you
        </SectionHeading>
        <div className={classes["para-container"]}>
          <p>
            Contact information: We might collect your Name, Email, Phone.
            Payment and
          </p>
          <p>
            Billing information: We might collect your billing name, billing
            address and payment method when you buy a product/service.
          </p>
          <p>
            We NEVER collect your credit card number or credit card expiry date
            or other details pertaining to your credit card on our website.
            Credit card information will be obtained and processed by our online
            payment partner.
          </p>
          <p>
            Transaction Information: We collect transaction details related to
            your use of our Services, and information about your activity on the
            Services, including the full Uniform Resource Locators (URL), the
            type of Services you requested or provided, comments, domain names,
            search results selected, number of clicks, information and pages
            viewed and searched for, the order of those pages, length of your
            visit to our Services, the date and time you used the Services,
            amount charged, details regarding application of promotional code,
            methods used to browse away from the page and any phone number used
            to call our customer service number.
          </p>
        </div>
      </div>
      <div className={classes["privacy-container"]}>
        <SectionHeading size="4.5rem">
          Use of Your Personal Information
        </SectionHeading>
        <div className={classes["para-container"]}>
          <p>
            We might use the information you provide to contact you for
            confirmation of a purchase on Updot Platform or for other
            promotional purposes.
          </p>
          <p>
            Billing information: We might collect your billing name, billing
            address and payment method when you buy a product/service.
          </p>
          <p>
            We NEVER collect your credit card number or credit card expiry date
            or other details pertaining to your credit card on our website.
            Credit card information will be obtained and processed by our online
            payment partner.
          </p>
          <p>Transaction Information:</p>
          <p>
            We collect transaction details related to your use of our Services,
            and information about your activity on the Services, including the
            full Uniform Resource Locators (URL), the type of Services you
            requested or provided, comments, domain names, search results
            selected, number of clicks, information and pages viewed and
            searched for, the order of those pages, length of your visit to our
            Services, the date and time you used the Services, amount charged,
            details regarding application of promotional code, methods used to
            browse away from the page and any phone number used to call our
            customer service number.
          </p>
          <p>We use information to abide by the contracts:</p>
          <p>
            We might use the information you provide to carry out our
            obligations arising from any contracts entered into between you and
            us and to provide you with the relevant information and services.
          </p>
          <p>
            We use information to respond to your requests or questions: We
            might use your information to confirm your registration for
            rendering services we offer.
          </p>
          <p>We use information for security purposes:</p>
          <p>
            We may use information to protect our company, our customers, or our
            Updot Platform.
          </p>
          <p>We use information for marketing purposes:</p>
          <p>
            We might send you information about special promotions or offers.
          </p>
          <p>
            We might also tell you about new features or products or enrol you
            in our newsletter. These might be our own offers or products, or
            third-party offers or products we think you might find interesting.
          </p>
          <p>
            We may use the information to measure or understand the
            effectiveness of advertising we serve to you and others, and to
            deliver relevant advertising to you.
          </p>
          <p>We use information to send you transactional communications:</p>
          <p>
            We might send you emails or SMS about your account or purchase of
            our product.
          </p>
        </div>
      </div>
      <div className={classes["privacy-container"]}>
        <SectionHeading size="4.5rem">Your Consent:</SectionHeading>
        <div className={classes["para-container"]}>
          <p>
            By using the Updot Platform and the Services provided therein, you
            agree and consent to the collection, transfer, use, storage,
            disclosure and sharing of your information as described and
            collected by us in accordance with this Policy. If you do not agree
            with the Policy, please do not use or access the Updot Platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
