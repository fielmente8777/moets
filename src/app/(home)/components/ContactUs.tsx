import { SectionWithContainer } from "@/components";
import Form from "@/components/Form";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";

const ContactUs = () => {
  return (
    <SectionWithContainer>
      <div className="md:grid grid-cols-2 flex flex-col-reverse gap-6">
        <div className="w-full rounded-2xl border border-primary overflow-hidden max-sm:aspect-square">
          <LazyLoadedMap src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d101640.48380528325!2d76.94806178368965!3d28.392471313486435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d2312efacbb25%3A0xa7ddb76fc716e4e3!2sElan%20Epic%2C%20Southern%20Peripheral%20Rd%2C%20opposite%20TULIP%20VIOLET%2C%20Sector%2070%2C%20Gurugram%2C%20Haryana%20122001!3m2!1d28.3924961!2d77.0304632!5e1!3m2!1sen!2sin!4v1741678486797!5m2!1sen!2sin" />
        </div>
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{ boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.20)" }}
        >
          <Form />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactUs;
