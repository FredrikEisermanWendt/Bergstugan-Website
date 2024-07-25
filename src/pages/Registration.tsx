import "../pages/registration.css";

const Registration = () => {
  return (
    <>
      <main>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registrera ny användare</h3>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="firstName" className="form-control form-control-lg" placeholder="Förnamn" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="lastName" className="form-control form-control-lg" placeholder="Efternamn" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 d-flex align-items-center">
                          <div data-mdb-input-init className="form-outline datepicker w-100">
                            <input type="password" className="form-control form-control-lg" id="password" placeholder=""/>
                           
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 d-flex align-items-center">
                          <div data-mdb-input-init className="form-outline datepicker w-100">
                            <input type="password" className="form-control form-control-lg" id="repassword" />
                            <label htmlFor="repassword" className="form-label">
                              Skriv lösenordet igen
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div data-mdb-input-init className="form-outline">
                            <input type="email" id="emailAddress" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="emailAddress">
                              Email
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-2">
                        <input data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit" value="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Registration;
