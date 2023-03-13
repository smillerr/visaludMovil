

const Header =  ()=>{
    return `<nav class="d-flex flex-row">
    <div>
      <a class="navbar-brand" href="#">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSb_Kge3cxykqrWdfXBNEFppenDzHQhznlWTb5MOvBg&s"
          alt="escudo"
          width="160"
        />
      </a>
    </div>
    <div class="container-fluid d-flex justify-content-center flex-column">
      <div class="d-flex justify-content-center" width="25%">
        <h2>MUNICIPIO DE JAMUNDÍ (V)</h2>
      </div>
      <div class="d-flex justify-content-center">
        <h3>Vigilancia en Salud Pública</h3>
      </div>
      <div class="d-flex justify-content-center">
        <h4>Control de Riesgo en Alimentos y Bebidas</h4>
      </div>
      <div class="d-flex justify-content-center">
        <h4>IVC a Establecimientos y Vehículos</h4>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <button type="button" class="btn btn-primary me-3">Opciones</button>
    </div>
  </nav>`
}
export default Header;