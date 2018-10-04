// Hijack the click function for the 'barrels' button in the navigation.
const barrelsClickHandlers = () => {
  // Using data attribute for targeting instead of .class or #id
  $('[data-list-barrels-link]').on('click', (e) => {
    e.preventDefault()
    history.pushState(null, null, "barrels")
    // Create promise using fetch
    fetch('/barrels.json')
      .then(res => res.json())
      // Start working with the json data response
      .then(barrels => {
        console.log(barrels)
        $('#app-container').html('')
        barrels.forEach(barrel => {
          let newbarrel = new Barrel(barrel)
          let barrelHtml = newbarrel.formatIndex()
          console.log(barrelHtml)
          $('#app-container').append(barrelHtml).wrapInner('<div class="d-md-flex flex-md-wrap"><div class="card-group"></div></div>')
        });
        $('#app-container').append('<div class="d-flex justify-content-around"><a class="btn btn-outline-success" href="/barrels/new">New Barrel</a></div>')
      })
  }) // End Barrels Link
  // Begin Barrels add link
}

// Prototype code for Barrels
function Barrel(barrel) {
  this.id = barrel.id
  this.caliber = barrel.caliber
  this.barrel_type = barrel.barrel_type
  this.length = barrel.length
  this.twist = barrel.twist
  this.contour = barrel.contour
  this.rifling = barrel.rifling
  this.firearm = barrel.firearm
}

Barrel.prototype.formatIndex = function () {
  console.log(this)
  let barrelHtml = `
        <div class="p-3">
        <div class="card mb-3" style="min-width: 18rem;">
        <div class="card-body">
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
        <h4>Firearm</h4>
          <p><a href="/firearms/${this.firearm.id}">${this.firearm.name}</a></p>
          <br>
         <div class="d-flex justify-content-around">
         <a href="/barrels/${this.id}" class="btn btn-primary">Show</a>
         <a href="/barrels/${this.id}/edit" class="btn btn-warning">Edit</a>
         <button class="btn btn-danger">Add Delete</button>
         </div>
        </div>
        </div>
        </div>
         `
  return barrelHtml
} // End Barrel prototype