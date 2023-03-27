

const Login =()=>`<div class="d-flex justify-content-center"> 
<form class="w-50 mt-5 border border-primary p-3">
    <div class="mb-3 form-info">
        <p> Para ingresar a la aplicación, debe ingresar sus credenciales </p>
    </div>
    <div class="mb-3 ">
        <label for="inputUsername" class="form-label fw-bold">Nombre de usuario: </label>
        <input type="email" class="form-control" id="inputUsername" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
        <label for="inputPassword1" class="form-label fw-bold"> Contraseña: </label>
        <input type="password" class="form-control" id="inputPassword1">
    </div>
    <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">Enviar</button>
    </div>
</form>
</div>`;

export default Login;