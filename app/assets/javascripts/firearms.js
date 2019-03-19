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
  }); // End Firearms Link
  // Begin Firearms add link
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
    firearm.outings.forEach(outing => {
      this.firearm_outings.push(outing);
    });
    this.firearm_barrel = [];
    firearm.barrels.forEach(barrel => {
      this.firearm_barrel.push(barrel);
    });
  }
}

Firearm.prototype.formatIndex = function() {
  console.log(this);
  let firearmHtml = `
              <div>
              <h1><a href="/firearms/${this.id}">${this.name}</a></h1> 
              `;
  return firearmHtml;
}; // End Firearm prototype

// <h4>Barrel(s)</h4>
//     <p>${this.firearm_barrel
//       .map(
//         barrel =>
//           `<a href="/barrels/${barrel.id}"><ul><li>${
//             barrel.caliber
//           }</a></li><ul><li>Total Shots Fired - ${
//             barrel.shots_fired
//           }</li></ul></ul>`
//       )
//       .join("")}</p>
//   <h4>Outings</h4>
//     <p>${this.firearm_outings
//       .map(
//         outing =>
//           `<a href="/outings/${outing.id}">
//           <li>${outing.outing_type}</li ></a >`
//       )
//       .join("")}</p>
// <p><a href="/firearms/${
//   this.id
// }" class="btn btn-primary">Show</a></p>
// </div>
