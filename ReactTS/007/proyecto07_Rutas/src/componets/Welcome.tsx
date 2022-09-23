import imagen from "../assets/img/Image-Welcome (Mediana).jpg";

export const Welcome = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-8 mt-4 ">
        <div className="card">
          <div>
            <div className="d-flex justify-content-center">
              <img src={imagen} alt="no se cargo la imagen" className="" />
            </div>
            <div className="card-body text-center">
              <span className="titulo">Formulario de Bienvenida</span>
            </div>
          </div>
          <div>
            <div className="card-body">
              <div className="mb-3">
                <p>
                  Swap the background-color utility and add a `.text-*` color
                  utility to mix up the jumbotron look. Then, mix and match with
                  additional component themes and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
