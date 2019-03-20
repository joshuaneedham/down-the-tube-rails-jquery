// Hijack the click function for the 'firearms' button in the navigation.
const firearmsClickHandlers = () => {
  // Using data attribute for targeting instead of .class or #id
  $("[data-list-firearms-link]").on("click", e => {
    e.preventDefault();
    history.pushState(null, null, "firearms");
    // Create promise using fetch
    fetch("/firearms.json")
      // On success use .then to start working with the data returned from the promise.
      .then(res => res.json())
      // Start working with the json data response
      .then(firearms => {
        $("#app-container").html("");
        firearms.forEach(firearm => {
          let newFirearm = new Firearm(firearm);
          let firearmHtml = newFirearm.formatIndex();
          console.log(firearmHtml);
          $("#app-container").append(firearmHtml);
        });
        $("#app-container").append(
          '<div class="d-flex justify-content-around"><a class="btn btn-outline-success" href="/firearms/new">New Firearm</a></div>'
        );
      });
  });
  $(document).on("click", ".show_link", function(e) {
    e.preventDefault();
    let id = $(this).attr("data-id");
    fetch(`/firearms/${id}.json`)
      // On success use .then to start working with the data returned from the promise.
      .then(res => res.json())
      // Start working with the json data response
      .then(firearm => {
        $("#app-container").html("");
        let newFirearm = new Firearm(firearm);
        let firearmShow = newFirearm.formatShow();
        console.log(firearmShow);
        $("#app-container").append(firearmShow);
      });
  });

  $(document).on("click", ".next-firearm", function() {
    let id = $(this).attr("data-id");
    fetch(`firearms/${id}/next`)
      // On success use .then to start working with the data returned from the promise.
      .then(res => res.json())
      // Start working with the json data response
      .then(firearm => {
        $("#app-container").html("");
        let newFirearm = new Firearm(firearm);
        let firearmShow = newFirearm.formatShow();
        console.log(firearmShow);
        $("#app-container").append(firearmShow);
      });
  });
};

// class Firearm
// Prototype code for Firearm
class Firearm {
  constructor(firearm) {
    this.id = firearm.id;
    this.name = firearm.name;
    this.description = firearm.description;
    this.firearm_type = firearm.firearm_type;
    this.firearm_outings = [];
    // Iterate over outings and push into an array
    firearm.outings.forEach(outing => {
      this.firearm_outings.push(outing);
    });
    this.firearm_barrel = [];
    // Iterate over barrels and push into an array
    firearm.barrels.forEach(barrel => {
      this.firearm_barrel.push(barrel);
    });
  }
}

// Firearm Index page list
Firearm.prototype.formatIndex = function() {
  console.log(this);
  let firearmHtml = `
  <h1><a href="/firearms/${this.id}.json" data-id="${
    this.id
  }" class="show_link">
  ${this.name}</a></h1>`;
  return firearmHtml;
}; // End Firearm prototype

// Firearm Show page
Firearm.prototype.formatShow = function() {
  console.log(this);
  let firearmShow = `
  <h1>${this.name}
<!--Show Each barrel for this single firearm -->
<h4>Barrel(s)</h4>
    <p>${this.firearm_barrel
      .map(
        barrel =>
          `<a href="/barrels/${barrel.id}"><ul><li>${
            barrel.caliber
          }</a></li><ul><li>Total Shots Fired - ${
            barrel.shots_fired
          }</li></ul></ul>`
      )
      .join("")}</p>
<!--Show Each outing for this firearm including what barrel was used -->
  <h4>Outings</h4>
    <p>${this.firearm_outings
      .map(
        outing =>
          `<ul><a href="/outings/${outing.id}">
          <li>${outing.outing_type}</li ></a ></ul>`
      )
      .join("")}</p>
</div>
<button class="btn btn-success next-firearm" data-id="${
    this.id
  }" >Next Firearm</button>`;
  return firearmShow;
};
