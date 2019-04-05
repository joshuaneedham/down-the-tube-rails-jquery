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
        //Add Firearm div to hold Firearm object
        const $firearmsDiv = $('<ul id="firearms"></ul>');
        $("#app-container").append($firearmsDiv);
        firearms.forEach(firearm => {
          let newFirearm = new Firearm(firearm);
          let firearmHtml = newFirearm.formatIndex();
          //console.log(firearmHtml);
          $("#firearms").append(firearmHtml);
        });
        //Add Sort button to sort firearms list
        // const $sortList = $('<div id="sort-firearms-list"></div>');
        //$("#app-container").append($sortList);
        $("#firearms").prepend(`
          <div><button class="btn btn-success" id="sortFunction">Sort List</button><br /></div>
        `);
        // Need to learn more JS to clean up this modal and make it a single reusable piece of code
        //Add New Firearm modal button
        const $buttonsDiv = $('<div id="add-firearm-button"></div>');
        $("#firearms").append($buttonsDiv);
        $("#add-firearm-button").append(`
          <div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#firearmModalForm">New Firearm</button></div>

          <!-- Modal -->
            <div class="modal fade" id="firearmModalForm" tabindex="-1" role="dialog" aria-labelledby="Add new Firearm" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel">Add New Firearm</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="new_firearm" id="new_firearm" action="/firearms.json" accept-charset="UTF-8" method="post">
                      <input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="S4u+eK+WIjuxmb5UbjF678qZiw7DxB80gPP0G1f0SO+pFoL4Pi4vktxdZNH5r5vNxNG73EZ1ZLR0MWSZadIEDQ==">
                    <h5><label for="firearm_name">Name</label></h5>
                        <input type="text" name="firearm[name]" id="firearm_name"> <br>
                    <h5><label for="firearm_firearm_type">Type</label></h5>
                      <select name="firearm[firearm_type]" id="firearm_firearm_type"><option value="Bolt-Action">Bolt-Action</option>
                        <option value="Semi-Auto">Semi-Auto</option>
                        <option value="Muzzle Loader">Muzzle Loader</option>
                        <option value="Shotgun">Shotgun</option></select>
                    <h5><label for="firearm_description">Description</label></h5>
                      <textarea name="firearm[description]" id="firearm_description"></textarea> <br>
                    <input type="submit" name="commit" value="Create Firearm" class="btn btn-primary" data-create-firearm-link="true" data-disable-with="Create Firearm">
                </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `);
      });
  });

  //Sort Firearms Index List
  $(document).on("click", "#sortFunction", function(e) {
    e.preventDefault();
    fetch(`/firearms.json`)
      .then(res => res.json())
      .then(firearms => {
        $("#app-container").html("");
        //Add Firearm div to hold Firearm object
        const $firearmsDiv = $('<ul id="firearms"></ul>');
        $("#app-container").append($firearmsDiv);
        const firearmSort = firearms.sort((a, b) => (a.name > b.name ? 1 : -1));
        firearmSort.forEach(firearm => {
          let newFirearm = new Firearm(firearm);
          let firearmHtml = newFirearm.formatIndex();
          $("#firearms").append(firearmHtml);
        });
        //Add New Firearm modal button
        const $buttonsDiv = $('<div id="add-firearm-button"></div>');
        $("#firearms").append($buttonsDiv);
        $("#firearms").prepend(`
          <div><button class="btn btn-success" id="sortFunction">Sort List</button><br /></div>
        `);
        $("#add-firearm-button").append(`
          <div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#firearmModalForm">New Firearm</button></div>

          <!-- Modal -->
            <div class="modal fade" id="firearmModalForm" tabindex="-1" role="dialog" aria-labelledby="Add new Firearm" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel">Add New Firearm</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="new_firearm" id="new_firearm" action="/firearms.json" accept-charset="UTF-8" method="post">
                      <input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="S4u+eK+WIjuxmb5UbjF678qZiw7DxB80gPP0G1f0SO+pFoL4Pi4vktxdZNH5r5vNxNG73EZ1ZLR0MWSZadIEDQ==">
                    <h5><label for="firearm_name">Name</label></h5>
                        <input type="text" name="firearm[name]" id="firearm_name"> <br>
                    <h5><label for="firearm_firearm_type">Type</label></h5>
                      <select name="firearm[firearm_type]" id="firearm_firearm_type"><option value="Bolt-Action">Bolt-Action</option>
                        <option value="Semi-Auto">Semi-Auto</option>
                        <option value="Muzzle Loader">Muzzle Loader</option>
                        <option value="Shotgun">Shotgun</option></select>
                    <h5><label for="firearm_description">Description</label></h5>
                      <textarea name="firearm[description]" id="firearm_description"></textarea> <br>
                    <input type="submit" name="commit" value="Create Firearm" class="btn btn-primary" data-create-firearm-link="true" data-disable-with="Create Firearm">
                </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `);
      });
  }); //End Sort Firearms Index List

  //Firearm Show Page
  $(document).on("click", ".show_link", function(e) {
    e.preventDefault();
    let id = $(this).attr("data-id");
    fetch(`/firearms/${id}.json`)
      // On success use .then to start working with the data returned from the promise.
      .then(res => res.json())
      // Start working with the json data response
      .then(firearm => {
        $("#firearms").html("");
        let newFirearm = new Firearm(firearm);
        let firearmShow = newFirearm.formatShow();
        //console.log(firearmShow);
        $("#firearms").append(firearmShow);
      });
  }); //End Firearm Show Page

  //Next Firearm on Show Page
  $(document).on("click", ".next-firearm", function(e) {
    e.preventDefault();
    let id = $(this).attr("data-id");
    fetch(`firearms/${id}/next`)
      // On success use .then to start working with the data returned from the promise.
      .then(res => res.json())
      // Start working with the json data response
      .then(firearm => {
        $("#firearms").html("");
        let newFirearm = new Firearm(firearm);
        let firearmShow = newFirearm.formatShow();
        //console.log(firearmShow);
        $("#firearms").append(firearmShow);
      });
  }); //End Next Firearm on Show Page
};

// Firearm Class
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
} // End Firearm Class

// OnSubmit Return with Added Firearm
$(document).on("submit", "#new_firearm", function(e) {
  e.preventDefault();
  // console.log(this);
  $("#firearmModalForm").modal("toggle");
  $(".modal-backdrop").remove();
  $.ajax({
    type: "POST",
    url: "/firearms",
    data: $(this).serialize(),
    dataType: "json",
    success: function(data) {
      e.preventDefault();
      //$("#app-container").html("");
      // history.pushState(null, null, "firearms");
      // Create promise using fetch
      fetch("/firearms.json")
        // On success use .then to start working with the data returned from the promise.
        .then(res => res.json())
        // Start working with the json data response
        .then(firearms => {
          $("#app-container").html("");
          const $firearmsDiv = $('<ul id="firearms"></ul>');
          $("#app-container").append($firearmsDiv);
          firearms.forEach(firearm => {
            let newFirearm = new Firearm(firearm);
            let firearmHtml = newFirearm.formatIndex();
            //console.log(firearmHtml);
            $("#firearms").append(firearmHtml);
          });
          $("#firearms").prepend(`
          <div><button class="btn btn-success" id="sortFunction">Sort List</button><br /></div>
        `);
          const $buttonsDiv = $('<div id="add-firearm-button"></div>');
          $("#firearms").append($buttonsDiv);
          $("#add-firearm-button").append(
            `<br />
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#firearmModalForm">New Firearm</button>
          <br />

          <!-- Modal -->
            <div class="modal fade" id="firearmModalForm" tabindex="-1" role="dialog" aria-labelledby="Add new Firearm" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel">Add New Firearm</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="new_firearm" id="new_firearm" action="/firearms.json" accept-charset="UTF-8" method="post">
                      <input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="S4u+eK+WIjuxmb5UbjF678qZiw7DxB80gPP0G1f0SO+pFoL4Pi4vktxdZNH5r5vNxNG73EZ1ZLR0MWSZadIEDQ==">
                    <h5><label for="firearm_name">Name</label></h5>
                        <input type="text" name="firearm[name]" id="firearm_name"> <br>
                    <h5><label for="firearm_firearm_type">Type</label></h5>
                      <select name="firearm[firearm_type]" id="firearm_firearm_type"><option value="Bolt-Action">Bolt-Action</option>
                        <option value="Semi-Auto">Semi-Auto</option>
                        <option value="Muzzle Loader">Muzzle Loader</option>
                        <option value="Shotgun">Shotgun</option></select>
                    <h5><label for="firearm_description">Description</label></h5>
                      <textarea name="firearm[description]" id="firearm_description"></textarea> <br>
                    <input type="submit" name="commit" value="Create Firearm" class="btn btn-primary" data-create-firearm-link="true" data-disable-with="Create Firearm">
                </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `
          );
        });
    }
  });
}); //End OnSubmit Return with Added Firearm

// Firearm Index page list
Firearm.prototype.formatIndex = function() {
  //console.log(this);
  let firearmHtml = `
  <li>
    <div id="firearm">
    <h1><a href="/firearms/${this.id}.json" data-id="${
    this.id
  }" class="show_link">
    ${this.name}</a></h1>
    </div>
  </li>`;
  return firearmHtml;
}; // End Firearm Index Page

// Firearm Show page
Firearm.prototype.formatShow = function() {
  //console.log(this);
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
  }" >Next Firearm</button><br />`;
  return firearmShow;
}; //End Firearm Show Page
