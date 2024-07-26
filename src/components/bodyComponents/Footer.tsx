import "./footer.css";

const Footer = () => {
  return (
    <footer className="py-4" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <form className="d-flex align-items-end">
              <div className="form-group me-3">
                <label htmlFor="from-date" className="form-label">
                  Boka från
                </label>
                <input type="date" id="from-date" className="form-control" />
              </div>

              <div className="form-group me-3">
                <label htmlFor="to-date" className="form-label">
                  Boka till
                </label>
                <input type="date" id="to-date" className="form-control" />
              </div>

              <button type="submit" className="btn btn-primary">
                Boka
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
