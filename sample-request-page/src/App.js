import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div className='logo'></div>
      </header>
      <nav className="nav-bar">
        <div className="nav-bar__inner">
          <div className="container">
            <ul className="nav-bar__linklist list--unstyled" data-type="menu" role="list">
              <li className="nav-bar__item"><a href="http://ipearl.com/" className="nav-bar__link link">Home</a></li>
              <li className="nav-bar__item"><a href="http://ipearl.com/collections/all" className="nav-bar__link link">Products</a></li>
              <li className="nav-bar__item"><a href="http://ipearl.com/pages/about-us" className="nav-bar__link link">About us</a></li>
              <li className="nav-bar__item"><a href="http://ipearl.com/pages/contact" className="nav-bar__link link">Contact</a></li>
              <li className="nav-bar__item"><a href="https://www.ipearl-inc.com/newweb/SampleRequest.php" className="nav-bar__link link" target="_blank" rel="noopener">Sample Request</a></li>
              <li className="nav-bar__item"><a href="http://ipearl-inc.com/" className="nav-bar__link link" target="_blank" rel="noopener">Visit Old Website</a></li></ul>
          </div>
        </div>
      </nav>
      <div className='main'>
        <h2>Request Free Sample</h2>
        <form>
          <label>Full name <span>*</span></label>
          <input type="text"></input>

          <label>School name <span>*</span></label>
          <input list='schoolNames' type="text"></input>
          <datalist id="schoolNames">
            <option value="EARLVILLE JUNIOR HIGH"></option>
            <option value="ELKHORN AREA MIDDLE SCHOOL"></option>
            <option value="LOS ANGELES UNIFIED SCHOOL DISTRICTint"></option>
            <option value="WAVERLY ACADEMY"></option>
            <option value="# 6 OF ULYANOFF"></option>
          </datalist>

          <label>School Address <span>*</span></label>
          <input type="text" placeholder='Street address Apt / suite / unit'></input>
          <div className='addressRow'>
            <input type="text" placeholder='City'></input>
            <input type="text" placeholder='State'></input>
            <input type="text" placeholder='Zip Code'></input>
          </div>

          <label>School Email Address <span>*</span></label>
          <input type="text"></input>

          <label>Phone Number <span>*</span></label>
          <input type="text"></input>

          <label>Chromebook / MacBook / PC / iPad Models <span>*</span></label>
          <input list='models' type="text"></input>
          <datalist id="models">
            <option value="Acer C710 series 11.6-inch"></option>
            <option value="Acer Chromebook 712 C871 series 11.6-inch"></option>
            <option value="Acer C731 series 11.6-inch N7"></option>
            <option value="Acer C771 series 11.6-inch"></option>
            <option value="Acer C720 / C720P / C740 series 11.6-inch"></option>
          </datalist>

          <label>Color <span>*</span></label>
          <select id="color">
            <option value="">--Please choose a color--</option>
            <option value="Aqua">Aqua</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Clear">Clear</option>
            <option value="Green">Green</option>
            <option value="Orange">Orange</option>
            <option value="Pink">Pink</option>
            <option value="Purple">Purple</option>
            <option value="Red">Red</option>
          </select>

          <label>School Logo</label>
          <div className='checkBoxRow'>
            <input type="checkbox" id="schoolLogo" name="schoolLogo" />
            <label for="schoolLogo">Need print school logo on case (optional).</label>
          </div>
          <p className='description'>Please <a href='https://www.ipearl-inc.com/newweb/upload/'>Click Here</a> to upload your logo file in PSD/PNG/EPS/TIFF format with transparent background. At least 1000 x 1000 Pixels recommended for better printing result.</p>

          <label>Where did you hear about us? <span>*</span></label>
          <input list='hearFrom' type="text"></input>
          <datalist id="hearFrom">
            <option value="Amazon"></option>
            <option value="Google"></option>
            <option value="Tech conference"></option>
          </datalist>

          <label>Number of laptops deployed in your school</label>
          <input type="number" min="0"></input>

          <label>Note / Special Request</label>
          <textarea placeholder="For international requests, please enter your PayPal Transaction ID here. If you need a formal quote or have special request(like position of logo, deadline for delivery, etc), please clarify here."></textarea>

          <input type="submit" value="Submit Request"></input>
        </form>

      </div>

      <footer>
        <p>Copyright 2008 - 2022, <a href="http://ipearl.com/">iPearl Inc, USA</a></p>
        <p>1.03, Last modified: March 07 2022 18:07:51.</p>
      </footer>
    </div>
  );
}

export default App;
