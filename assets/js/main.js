// University data
const universities = {
  wroclaw: {
    public: [
      {
        name: "University of Wrocław",
        logo: "uwr-logo.png",
        tuition: "15,000 PLN/year"
      }
      // Add other universities...
    ]
  }
  // Add Warsaw/Opole...
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  showUniversities('wroclaw');
  
  // City selector event listeners
  document.querySelectorAll('.city-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      showUniversities(this.dataset.city);
    });
  });
});

function showUniversities(city) {
  // Your rendering logic here...
}
