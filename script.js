const scriptURL = 'https://script.google.com/macros/s/AKfycbyNtHvPDUgK507PTdliha9n7_9nDjwPqZZ0bUfVZk6Sd3-nva8iozyyY9wR2kHpX62j/exec'
const form = document.forms['Rank-Form']
form.addEventListener('Submit', e =>
    {e.preventDefault()
        fetch(scriptURL, { method: 'POST', body : new FormData(form)})
        .then(response => alert('Form Submitted Successfully'))
        .then(() =>{window.location.reload();})
        .catch(error => console.error('Error!', error-message))

})
