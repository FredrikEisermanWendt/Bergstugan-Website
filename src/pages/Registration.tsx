import Main from "../components/bodyComponents/Main";
import "../pages/registration.css";

const Registration = () => {
  return (
    <Main>
      <section className="m-3">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3 ">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 ">
                <div className="card p-3 regist-form-color" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5 regist-form-color">
                    <h2 className="text-uppercase text-center mb-5">Registrera ditt konto</h2>

                    <form>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder="Förnamn" />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder="Efternamn" />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder="Email" />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="Lösenord" />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="form3Example4cdg" className="form-control form-control-lg" placeholder="Upprepa lösenord" />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-block btn-lg  btn-primary">
                          Registrera
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Registration;
