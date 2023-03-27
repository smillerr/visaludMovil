import Login from "./Login";

const Body = () => `${Login()}`;

/*
`<div class="accordion accordion-flush d-flex" id="formsAccordion">
      <!-- INSCRIPCIONES ACORDEON -->
      <div class="accordion-item border">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <!--  The header id can be deprecated, however the data-bs-target is mandatory and it's the one that collapses the component which has the id before the #. ej: #{idToCollapse}-->
            INSCRIPCIONES
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse "
          aria-labelledby="headingOne"
          data-bs-parent="#formsAccordion"
        >
          <!-- the id is the one that will be collapsed by the header, also the data-bs-parent is crucial, this one is for the parent where our accordion will be -->
          <div class="accordion-body accordion">
            <!-- This is the body of our accordion where we can anidate more accordions having in mind the comments before-->

            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1.1">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1.1"
                  aria-expanded="false"
                  aria-controls="collapse1.1"
                >
                  De establecimientos
                </button>
              </h2>
              <div
                id="collapse1.1"
                class="accordion-collapse collapse "
                aria-labelledby="headingOne"
                data-bs-parent="#collapseOne"
              >
                <div class="accordion-body accordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1.1.1"
                        aria-expanded="false"
                        aria-controls="collapse1.1.1"
                      >
                        F54
                      </button>
                    </h2>
                    <div
                      id="collapse1.1.1"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse1.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Pr. Cárnicos Comestibles</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1.1.2"
                        aria-expanded="false"
                        aria-controls="collapse1.1.2"
                      >
                        F55
                      </button>
                    </h2>
                    <div
                      id="collapse1.1.2"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse1.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Alimentos y Bebidas</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1.1.3"
                        aria-expanded="false"
                        aria-controls="collapse1.1.3"
                      >
                        F68
                      </button>
                    </h2>
                    <div
                      id="collapse1.1.3"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse1.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Sujetos Varios</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1.2">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1.2"
                  aria-expanded="false"
                  aria-controls="collapse1.2"
                >
                  De vehículos
                </button>
              </h2>
              <div
                id="collapse1.2"
                class="accordion-collapse collapse "
                aria-labelledby="headingOne"
                data-bs-parent="#collapseOne"
              >
                <div class="accordion-body">
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1.2.1"
                        aria-expanded="false"
                        aria-controls="collapse1.2.1"
                      >
                        F44
                      </button>
                    </h2>
                    <div
                      id="collapse1.2.1"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse1.2"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Vehículos</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- INSPECCIONES Y ACTA DE VISITA ACORDEON-->
      <div class="accordion-item border-top">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <!--  The header id can be deprecated, however the data-bs-target is mandatory and it's the one that collapses the component which has the id before the #. ej: #{idToCollapse}-->
            INSPECCIONES Y ACTAS DE VISITA
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse "
          aria-labelledby="headingOne"
          data-bs-parent="#formsAccordion"
        >
          <!-- the id is the one that will be collapsed by the header, also the data-bs-parent is crucial, this one is for the parent where our accordion will be -->
          <div class="accordion-body accordion">
            <!-- This is the body of our accordion where we can anidate more accordions having in mind the comments before-->

            <div class="accordion-item">
              <h2 class="accordion-header" id="heading2.1">
                <button
                  class="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2.1"
                  aria-expanded="false"
                  aria-controls="collapse2.1"
                >
                  A establecimientos
                </button>
              </h2>
              <div
                id="collapse2.1"
                class="accordion-collapse collapse "
                aria-labelledby="headingOne"
                data-bs-parent="#collapseTwo"
              >
                <div class="accordion-body accordion">
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2.1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.1.1"
                        aria-expanded="false"
                        aria-controls="collapse2.1.1"
                      >
                        F61
                      </button>
                    </h2>
                    <div
                      id="collapse2.1.1"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Cárnicos Comestibles</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2.1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.1.2"
                        aria-expanded="false"
                        aria-controls="collapse2.1.2"
                      >
                        F62
                      </button>
                    </h2>
                    <div
                      id="collapse2.1.2"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Bebidas Alcohólicas</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2.1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.1.3"
                        aria-expanded="false"
                        aria-controls="collapse2.1.3"
                      >
                        F63
                      </button>
                    </h2>
                    <div
                      id="collapse2.1.3"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Plazas de Mercado</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2.1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.1.4"
                        aria-expanded="false"
                        aria-controls="collapse2.1.4"
                      >
                        F64
                      </button>
                    </h2>
                    <div
                      id="collapse2.1.4"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Grandes Superficies</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2.1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.1.5"
                        aria-expanded="false"
                        aria-controls="collapse2.1.5"
                      >
                        F45
                      </button>
                    </h2>
                    <div
                      id="collapse2.1.5"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Preparan Alimentos</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2.1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.1.6"
                        aria-expanded="false"
                        aria-controls="collapse2.1.6"
                      >
                        F65
                      </button>
                    </h2>
                    <div
                      id="collapse2.1.6"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Venta en Vía Pública</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2.1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.1.7"
                        aria-expanded="false"
                        aria-controls="collapse2.1.7"
                      >
                        F11
                      </button>
                    </h2>
                    <div
                      id="collapse2.1.7"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Almacenan Alimentos</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2.1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.1.8"
                        aria-expanded="false"
                        aria-controls="collapse2.1.8"
                      >
                        F67
                      </button>
                    </h2>
                    <div
                      id="collapse2.1.8"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Expendios de Alimentos</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2.1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.1.9"
                        aria-expanded="false"
                        aria-controls="collapse2.1.9"
                      >
                        F13
                      </button>
                    </h2>
                    <div
                      id="collapse2.1.9"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.1"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Sujetos Varios</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- A VEHICULOS ACORDEON-->
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1.2">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2.2"
                  aria-expanded="false"
                  aria-controls="collapse2.2"
                >
                  A vehículos
                </button>
              </h2>
              <div
                id="collapse2.2"
                class="accordion-collapse collapse "
                aria-labelledby="headingOne"
                data-bs-parent="#collapseTwo"
              >
                <div class="accordion-body">
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.2.1"
                        aria-expanded="false"
                        aria-controls="collapse2.2.1"
                      >
                        F71
                      </button>
                    </h2>
                    <div
                      id="collapse2.2.1"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.2"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Transportadores de Carne</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2.2.2"
                        aria-expanded="false"
                        aria-controls="collapse2.2.2"
                      >
                        F72
                      </button>
                    </h2>
                    <div
                      id="collapse2.2.2"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse2.2"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Transportan Alimentos y Bebidas</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item border">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            OTROS
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse "
          aria-labelledby="headingThree"
          data-bs-parent="#formsAccordion"
        >
          <div class="accordion-body accordion">
              <div class="accordion-body accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1.1">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3.1"
                        aria-expanded="false"
                        aria-controls="collapse3.1"
                    >
                      F57
                    </button>
                    </h2>
                    <div
                      id="collapse3.1"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapseOne"
                    >
                    <div
                        class="accordion-body d-flex justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <p class="mb-0">Diagnóstico Cárnico</p>
                      </div>
                      <button type="button" class="btn btn-primary">
                        Ir
                      </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3.2"
                        aria-expanded="false"
                        aria-controls="collapse3.2"
                      >
                        F59
                      </button>
                    </h2>
                    <div
                      id="collapse3.2"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapseOne"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Solicitud Autorización Sanitaria</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3.3"
                        aria-expanded="false"
                        aria-controls="collapse3.3"
                      >
                        F48
                      </button>
                    </h2>
                    <div
                      id="collapse3.3"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapseOne"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Visita de Inspección y Vigilancia</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3.4"
                        aria-expanded="false"
                        aria-controls="collapse3.4"
                      >
                        F58
                      </button>
                    </h2>
                    <div
                      id="collapse3.4"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapseOne"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0">Acta de Congelamiento</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- New item -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1.1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3.5"
                        aria-expanded="false"
                        aria-controls="collapse3.5"
                      >
                        F96
                      </button>
                    </h2>
                    <div
                      id="collapse3.5"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#collapse"
                    >
                      <div
                        class="accordion-body d-flex justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <p class="mb-0"> Verificación de Rotulado</p>
                        </div>
                        <button type="button" class="btn btn-primary">
                          Ir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  */
export default Body;