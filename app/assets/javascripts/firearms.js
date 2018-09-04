$(() => {
  bindClickHandlers()
})

// Hijack the click function for the 'firearms' button in the navigation.
const bindClickHandlers = () => {
  // Using data attribute for targeting instead of .class or #id
  $('[data-list-firearms-link]').on('click', (e) => {
    e.preventDefault()
    // Create promise using fetch
   fetch('/firearms.json')
   // On success use .then to start working with the data returned from the promise.
   .then(res => res.json())
   // Start working with the json data response
   .then(data => {
     data.map
   })
  })
}