// Hijack the click function for the 'barrels' button in the navigation.
const barrelsClickHandlers = () => {
  // Using data attribute for targeting instead of .class or #id
  $("[data-list-barrels-link]").on("click", e => {
    e.preventDefault();
    history.pushState(null, null, "barrels");
    // Create promise using fetch
    fetch("/barrels.json")
      .then(res => res.json())
      // Start working with the json data response
      .then(barrels => {
        console.log(barrels);
        $("#app-container").html("");
        const $barrelsDiv = $('<div id="barrels"></div>');
        $("#app-container").append($barrelsDiv);
        barrels.forEach(barrel => {
          let newbarrel = new Barrel(barrel);
          let barrelHtml = newbarrel.formatIndex();
          console.log(barrelHtml);
          $("#barrels").append(barrelHtml);
        });
        $("#barrels").append(
          '<div class="d-flex justify-content-around"><a class="btn btn-outline-success" href="/barrels/new">New Barrel</a></div>'
        );
      });
  }); // End Barrels Link
  // Begin Barrels add link
};

// Prototype code for Barrels -  Use Class constructor for assessment
// function Barrel(barrel) {
//   this.id = barrel.id
//   this.caliber = barrel.caliber
//   this.barrel_type = barrel.barrel_type
//   this.length = barrel.length
//   this.twist = barrel.twist
//   this.contour = barrel.contour
//   this.rifling = barrel.rifling
//   this.firearm = barrel.firearm
// }

class Barrel {
  constructor(barrel) {
    this.id = barrel.id;
    this.caliber = barrel.caliber;
    this.barrel_type = barrel.barrel_type;
    this.length = barrel.length;
    this.twist = barrel.twist;
    this.contour = barrel.contour;
    this.rifling = barrel.rifling;
    this.firearm = barrel.firearm;
    this.shots_fired = barrel.shots_fired;
  }
}
Barrel.prototype.formatIndex = function() {
  console.log(this);
  let barrelHtml = `
<div id="barrel">
<h1>Firearm</h1>
<h6><a href="/firearms/${this.firearm.id}">${this.firearm.name}</a></h6>
<h4>Caliber</h4>
<p>${this.caliber}</p>
<h4>Type</h4>
<p>${this.barrel_type}</p>
<h4>Length</h4>
<p>${this.length}</p>
<h4>Twist</h4>
<p>${this.twist}</p>
<h4>Contour</h4>
<p>${this.contour}</p>
<h4>Rifling</h4>
<p>${this.rifling}</p>
<h4>Total Shots Fired</h4>
<p>${this.shots_fired}</p>
<div id="action-buttons">
<a href="/barrels/${this.id}" class="btn btn-primary">Show</a>&nbsp;
<a href="/barrels/${this.id}/edit" class="btn btn-warning">Edit</a>&nbsp;
<button class="btn btn-danger">Add Delete</button>
</div>
</div>
<br/>
`;
  return barrelHtml;
}; // End Barrel prototype
