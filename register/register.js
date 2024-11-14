const participantTemplate = (count) => {
    return `<section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
            <label for="activity">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity" />
        </div>
        <div class="item">
            <label for="fee">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee" />
        </div>
        <div class="item">
            <label for="date">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date" />
        </div>
        <div class="item">
            <p>Grade</p>
            <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
        </section>`;
}

let participants = 1;
const addButton = document.getElementById("add");
const form = document.querySelector("form");
const summary = document.getElementById("summary");

addButton.addEventListener("click", function () {
    participants++;
    addButton.insertAdjacentHTML("beforebegin", participantTemplate(participants));
});

class Info {
    constructor(adultName, participants, feeTotal) {
        this.adultName = adultName;
        this.participants = participants;
        this.feeTotal = feeTotal;
    }
}

const successTemplate = (info) => {
    return `<p>Thank you ${info.adultName} for registering. You have registered ${info.participants} participants and owe ${info.feeTotal} in Fees.</p>`;
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let total = 0;
    feeElements.forEach(element => {
        total += Number(element.value);
    });
    // once you have your total make sure to return it!
    return total;
}

function submitForm(event) {
    event.preventDefault();
    
    let adultName = document.getElementById("adult_name").value;
    let total = totalFees();
    info = new Info(adultName, participants, total);
    summary.insertAdjacentHTML("afterbegin", successTemplate(info));

    form.style.display = "none";
}

form.addEventListener("submit", submitForm);