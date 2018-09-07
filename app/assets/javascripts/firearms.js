$(() => {
  bindClickHandlers()
})

// Hijack the click function for the 'firearms' button in the navigation.
const bindClickHandlers = () => {
  // Using data attribute for targeting instead of .class or #id
  $('[data-list-firearms-link]').on('click', (e) => {
    e.preventDefault()
    history.pushState(null, null, "firearms")
    // Create promise using fetch
   fetch('/firearms.json')
   // On success use .then to start working with the data returned from the promise.
   .then(res => res.json())
   // Start working with the json data response
   .then(firearms => {
     $('#app-container').html('')
     firearms.forEach(firearm => {
       let newFirearm = new Firearm(firearm)
        let firearmHtml = newFirearm.formatIndex()
          console.log(firearmHtml)
          $('#app-container').append(firearmHtml)
        });
      })
    })
  }

function Firearm(firearm) {
  this.id = firearm.id
  this.name = firearm.name
  this.description = firearm.description
  this.firearm_type = firearm.firearm_type
}

Firearm.prototype.formatIndex = function() {
  console.log(this)
  let firearmHtml = `
  <div class="p-5">
  <h1>${this.name}</h1>
  <h4>Firearm Description</h4>
  <p>${this.description}</p>
  <h4>Firearm Type</h4>
  <p>${this.firearm_type}</p>
  </div>
  `
 return firearmHtml
}


    
        