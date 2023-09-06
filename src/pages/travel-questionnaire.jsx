import InputField from "../components/InputField";
import Checkbox from "../components/CheckBox";

function TravelQuestionnaire() {
  return (
    <div class="font-body mt-28 p-4">
      <h1 class="text-3xl mb-4 font-bold">Travel Questionnaire</h1>
      <p>
        Please fill out this 3 minute travel questionnaire to get personalized
        travel recommendations and destinations for your upcoming journey!
      </p>
      <form
        class="flex flex-col mt-6"
        action="http://localhost:3000/travel/recommendations"
      >
        <InputField label="First Name: " id="firstName" />
        <InputField label="Last Name: " id="lastName" />
        <InputField label="Email: " id="email" />
        <InputField label="Destinations you have in mind: " id="destinations" />

        <label class="mt-2 text-md">General interests/hobbies: </label>
        <div class="interests flex flex-col">
          <Checkbox id="beach" label="Beach / Water sports" />
          <Checkbox id="adventure" label="Adventure" />
          <Checkbox id="biking" label="Biking" />
          <Checkbox id="music" label="Music & Theater" />
          <Checkbox id="historic_sites" label="Historical sites" />
          <Checkbox id="fashion" label="Fashion / Shopping" />
          <Checkbox id="dining" label="Dining" />
          <Checkbox id="interests-other" type="other" label="Other" />
        </div>

        <label class="pt-4 text-md">Accommodations "must haves":</label>
        <div class="accommodations flex flex-col">
          <Checkbox id="views" label="Views" />
          <Checkbox id="luxury" label="Luxury" />
          <Checkbox id="boutique" label="Boutique" />
          <Checkbox id="pool" label="Pool" />
          <Checkbox id="gym" label="Gym & Fitness" />
          <Checkbox id="accommodations-other" type="other" label="Other" />
        </div>

        <label class="pt-4 text-md">Budget for this trip: </label>
        <div class="budget flex flex-col">
          <Checkbox id="budget-1" label="$0 - $6,000" />
          <Checkbox id="budget-2" label="$6,000 - $10,000" />
          <Checkbox id="budget-3" label="$10,000 - $15,000" />
          <Checkbox id="budget-4" label="$15,000+" />
          <button
            class="mt-4 text-white w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TravelQuestionnaire;
