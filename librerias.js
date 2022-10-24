let cuenta = document.querySelector(".nav-link.dropdown-toggle")

cuenta.addEventListener('click',() =>{
    const { value: email } = Swal.fire({
        title: 'Ingrese su correo electrónico',
        input: 'email',
        inputLabel: 'Su mail',
        inputPlaceholder: 'Ingrese su correo electrónico'
      })
      
      if (email) {
        Swal.fire(`Entered email: ${email}`)
      }
    })