import "./Navigation.css";
export default function Navigation() {
  return (
    <section className="how-it-works">
      <div className="section-header">
        <h2>How GBIGEBEYA Works</h2>
        <p>Simple, secure, student-focused</p>
      </div>

      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Create an Account</h3>
          <p>Sign up with your university email</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3>Browse or List Items</h3>
          <p>Find what you need or sell what you don't</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3>Connect & Exchange</h3>
          <p>Meet on campus or arrange delivery</p>
        </div>
      </div>
    </section>
  );
}
