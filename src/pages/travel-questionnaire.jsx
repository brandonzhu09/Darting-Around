import InputField from "../components/InputField";
import Checkbox from "../components/CheckBox";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import ListView from "../components/ListView";

function TravelQuestionnaire() {
  return (
    <div class="font-body mt-28 p-4">
      <FormWizard onComplete="">
        <FormWizard.TabContent title="Personal details" icon="ti-user">
          <div class="w-5/12 m-auto">
            <h3 class="text-3xl font-bold mt-4">Let's get started!</h3>
            <p class="mt-2 mb-4">
              Please fill out your personal information below:
            </p>
            <InputField label="First Name: " id="firstName" />
            <InputField label="Last Name: " id="lastName" />
            <InputField label="Email: " id="email" />
          </div>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Destinations" icon="ti-map-alt">
          <div class="w-5/12 m-auto">
            <h3 class="text-3xl font-bold mt-4">
              Choose some travel destinations
            </h3>
            <p class="mt-2 mb-4">
              Please enter any destinations you want to travel for your
              recommendations:
            </p>
            <ListView />
          </div>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="General Interests" icon="ti-heart">
          <h3>Second Tab</h3>
          <p>Some content for the second tab</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Accommodations" icon="ti-home">
          <h3>Second Tab</h3>
          <p>Some content for the second tab</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>
      </FormWizard>

      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </div>
  );
}

export default TravelQuestionnaire;
