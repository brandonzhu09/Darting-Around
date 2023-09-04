import InputField from "../components/InputField";

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
          <div>
            <input class="mx-2" type="checkbox" id="beach" />
            <label class="" for="beach">
              Beach / Water sports
            </label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" id="adventure" />
            <label class="">Adventure</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Biking</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Music & Theater</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Historical sites</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Fashion / Shopping</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Dining</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="other" />
            <label class="">Other</label>
          </div>
        </div>

        <label class="pt-4 text-md">Accommodations "must haves":</label>
        <div class="accommodations flex flex-col">
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Views</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="adventure" />
            <label class="">Luxury</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Boutique</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Pool</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Gym & Fitness</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">Other</label>
          </div>
        </div>

        <label class="pt-4 text-md">Budget for this trip: </label>
        <div class="budget flex flex-col">
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">$0 - $6,000</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="adventure" />
            <label class="">$6,000 - $10,000</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">$10,000 - $15,000</label>
          </div>
          <div>
            <input class="mx-2" type="checkbox" name="beach" />
            <label class="">$15,000+</label>
          </div>

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
