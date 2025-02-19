describe('Ejercicio2: Registro de usuario ', () => {
  it('Debería registrar un nuevo usuario y responder con "" y manejar el caso de un usuario ya existente respondiendo"errorMessage": "This user already exist."', () => {
    // Realizamos la solicitud POST para registrar un nuevo usuario
    cy.request({
      method: 'POST', // Tipo de solicitud
      url: 'https://api.demoblaze.com/signup', // URL de la API para el registro
      body: {
        //se debe cambiar el nombre en caso de querer registrar uno nuevo
        username: 'jordy121', // Nombre de usuario
        password: '123467' // Contraseña del usuario
      },
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido en la solicitud
      },
      failOnStatusCode: false, // No fallar si la respuesta es 400 o algún otro código
    }).then((response) => {
      // Imprimir respuesta en la consola 
      cy.log(JSON.stringify(response.body));

      // Si el usuario ya existe, esperamos un código de error 400 y el mensaje sera This user already exist
      if (response.status === 400) {
        expect(response.body).to.have.property('errorMessage');
       
      } else {
        // Si el registro es exitoso OK y el mensaje será ''
        expect(response.status).to.eq(200);
      
        
      }
    });
  });
});

describe('Ejercicio2: Login inicio de session normal e inicio de session con usuario no registrado', () => {
  it('Al iniciar session me respondera con el token de entrada, en caso de no existir el usuario me enviara User does not exist.', () => {
    // Realizamos la solicitud POST para registrar un nuevo usuario
    cy.request({
      method: 'POST', // Tipo de solicitud
      url: 'https://api.demoblaze.com/login', // URL de la API para el registro
      body: {
        //se debe cambiar el nombre en caso de querer probar el usuario no existente
        username: 'jrdy121', // Nombre de usuario
        password: '12346799' // Contraseña del usuario
      },
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido en la solicitud
      },
      failOnStatusCode: false, // No fallar si la respuesta es 400 o algún otro código
    }).then((response) => {
      // Imprimir respuesta en la consola 
      cy.log(JSON.stringify(response.body));

      // Si el usuario no existe, esperamos un código de error 400 y el mensaje sera User does not exist.
      if (response.status === 400) {
        expect(response.body).to.have.property('errorMessage');
       
      } else {
        // Si el inicio de sesión es exitoso OK y me devuelve el token 'Auth_token:Sm9yZHk5MTc0MDUzMw=='
        expect(response.status).to.eq(200);
      
        
      }
    });
  });
});
