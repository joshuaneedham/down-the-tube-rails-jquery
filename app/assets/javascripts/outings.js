const outingsClickHandlers = () => {
  $("[data-list-outings-link]").on("click", e => {
    e.preventDefault();
    history.pushState(null, null, "outings");
    // Create promise using fetch
    fetch("/outings.json")
      // On success use .then to start working with the data returned from the promise.
      .then(res => res.json()) // Start working with the json data response
      .then(outings => {
        $("#app-container").html("");
        outings.forEach(outing => {
          let newOuting = new Outing(outing);
          let outingHtml = newOuting.formatIndex();
          console.log(outingHtml);
          $("#app-container")
            .append(outingHtml)
            .wrapInner(
              '<div class="d-md-flex flex-md-wrap"><div class="card-group"></div></div>'
            );
        });
        $("#app-container").append(
          '<div class="d-flex justify-content-around"><a class="btn btn-outline-success" href="/outings/new">New Outing</a></div>'
        );
      });
  }); // End Outings Link
  // Begin Outings add link
};

function Outing(outing) {
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  };
  this.id = outing.id;
  this.date = new Date(outing.date).toLocaleDateString("en-US", options);
  this.outing_type = outing.outing_type;
  this.shots_fired = outing.shots_fired;
  this.firearm = outing.firearm;
}

Outing.prototype.formatIndex = function() {
  console.log(this);
  let outingHTML = `
<div class="p-3">
  <div class="card mb-3" style="min-width: 18rem;">
    <div class="card-body">
        <h3>${this.outing_type}</h3>
          <h4>Date of Outing</h4>
            <p>${this.date}</p>
          <h4>Total Shots Fired</h4>
            <p>${this.shots_fired}</p>
          <h4>Firearm Used</h4>
            <p><a href="/firearms/${this.firearm.id}">${
    this.firearm.name
  }</a></p>
        <br>
          <div class="d-flex justify-content-around">
            <a href="/outings/${this.id}" class="btn btn-primary">Show</a>
            <a href="/outings/${this.id}/edit" class="btn btn-warning">Edit</a>
          <button class="btn btn-danger">Add Delete</button>
          </div>
      </div>
    </div>
  </div>
  `;
  return outingHTML;
};
