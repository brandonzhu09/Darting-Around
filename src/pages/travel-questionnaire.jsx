import InputField from "../components/InputField";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import ListView from "../components/ListView";
import CheckBoxCard from "../components/CheckBoxCard";

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
          <div class="w-5/12 m-auto">
            <h3 class="text-3xl font-bold mt-4">
              Pick your interests and hobbies
            </h3>
            <p class="mt-2 mb-4">
              Check all the boxes of activities you are interested in doing on
              your vacation:
            </p>
          </div>
          <div class="flex flex-wrap">
            <CheckBoxCard label="Beach / Water Sports" />
            <CheckBoxCard label="Adventure" />
            <CheckBoxCard label="Biking" />
            <CheckBoxCard label="Music & Theater" />
            <CheckBoxCard label="Historical Sites" />
            <CheckBoxCard label="Fashion / Shopping" />
            <CheckBoxCard label="Dining" />
            <CheckBoxCard label="Climbing" />
          </div>
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
