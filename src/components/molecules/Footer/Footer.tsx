const Footer = () => (
  <footer
    className="py-3"
    style={{ display: 'block', background: '#040403', color: 'white' }}
  >
    <div className="container">
      <div className="row text-center contact">
        <div className="col-md-4">
          <h2>Phone</h2>
          <p>+49 151 4189 5770</p>
        </div>
        <div className="col-md-4">
          <h2>Address</h2>
          <p>Berlin - Germany</p>
        </div>
        <div className="col-md-4">
          <h2>E-mail</h2>
          <a href="mailto:william.lagos@icloud.com">william.lagos@icloud.com</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
