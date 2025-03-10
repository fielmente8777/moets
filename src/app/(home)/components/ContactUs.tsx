import { SectionWithContainer } from "@/components";
import Form from "@/components/Form";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";

const ContactUs = () => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="w-full rounded-2xl border border-primary overflow-hidden">
          <LazyLoadedMap src="" />
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
