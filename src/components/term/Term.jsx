import { useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";
import classes from "./Term.module.scss";
const Term = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${classes["term"]} container`}>
      <SectionHeading size="4.5rem">
        Read about our terms and conditions
      </SectionHeading>
      <div className={classes["para-container"]}>
        <p>
          Project initiation will be strictly based on confirmation of initial
          payment. Date of initiation of the project will be intimated to the
          client once the proposal gets accepted and payment is made.
        </p>
        <p>
          There are no refunds for any fees paid and the client stays
          responsible to pay the total amount of fees due for any project.
        </p>
        <p>
          Updot reserves the right to suspend or terminate the project if the
          customer fails to uphold the payment terms even after satisfactory
          submission of committed deliverables as per plan.
        </p>
        <p>
          Our team reserves rights to sole ownership to all work done by Updot,
          including documents, designs, ideas or any work product, produced by
          Updot Solutions, and may choose to proceed with what is deemed fit if
          the Client fails to settle all outstanding issues and dues.
        </p>
        <p>
          Updot also withholds the right to suspend or terminate the project if
          the customer at any point of time misbehaves with our staff or
          personnel in any given matter.
        </p>
        <p>
          In the event of violation of agreement, Updot reserves the rights to
          take legal actions according to applicable laws.
        </p>
        <p>
          We will not be held responsible for any liability or losses the client
          may incur after the termination of the project.
        </p>
        <p>
          The project cost mentioned in the client quote does not include any
          travel and related expenses, to the customer’s offices overseas, or
          outside the city where Updot is located. Any such costs will be
          invoiced to the customer separately.
        </p>
        <p>
          Requirements as mentioned by the client will be concerned as the final
          scope before commencement of the project.
        </p>
        <p>
          Any change in requirements during the development phase will be
          considered as a separate change request, and the estimated cost for
          the change will be shared with the client for approval.
        </p>
        <p>All charges mentioned for our services are exclusive of tax.</p>
        <p>
          Days mentioned in the quote are in official business days, exclusive
          of public holidays as per Holiday calendar.
        </p>
        <p>
          Updot Solutions will not be held responsible for any delays that arise
          due to lack of communication and support from the client side.
        </p>
        <p>
          The client should provide the required content/image (if required)
          once the project has begun.
        </p>
        <p>
          If the source code or design is modified by the Client without mutual
          written consent, Updot Solutions will not be held responsible for any
          errors or complaints.
        </p>
        <p>
          Any kind of bug fixing after project delivery will be done after
          communicating with the concerned team. However, past one month of
          final delivery date, Monthly maintenance charge will be levied for
          continuation of support.
        </p>
        <p>
          Updot will not be held liable for any issues related to the hosting
          provider. We may provide hosting advice but in events that the advice
          is not taken upon, the sole responsibility of any loss or maintenance
          related issues will be that of the clients.
        </p>
      </div>
    </div>
  );
};

export default Term;
