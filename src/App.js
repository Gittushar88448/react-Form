import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "",
    streetAddress: "", city: "", state: "", zip: "",isVisible:""
    , mode: ""
  });

  function changeHandler(event) {
    setFormData((pre) => {
      return {
        ...pre,
        [event.target.name]: event.target.value
      }
    }

    )
  }

  return (
    <div className="App">
      <form>
        
          <div>
            <label htmlFor="fname">First Name: </label>

            <input className=" border-black"
              type="text"
              onChange={changeHandler}
              placeholder="first Name"
              name="fname"
              id="fname"
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name: </label>

            <input className=" border-black"
              type="text"
              onChange={changeHandler}
              placeholder="Last Name"
              name="lastName"
              id="lastName"
            />
          </div>

          <div>
            <label htmlFor="email">Email Address: </label>

            <input className=" border-black"
              type="email"
              onChange={changeHandler}
              placeholder="xyz@gmail.com"
              name="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="country">Country : </label>
            <select
              name="country"
              id="country"
              onChange={changeHandler}
            >
              <option value="">Select</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="Japan">Japan</option>
              <option value="US">US</option>
              <option value="Russia">Russia</option>
            </select>

          </div>


          <div>
            <label htmlFor="streetAddress">Street Address: </label>

            <input className=" border-black"
              type="text"
              onChange={changeHandler}
              placeholder="1234 Main street "
              name="streetAddress"
              id="streetAddress"
            />
          </div>

          <div>
            <label htmlFor="city">City: </label>

            <input className=" border-black"
              type="text"
              onChange={changeHandler}
              placeholder="Meerut"
              name="city"
              id="city"
            />
          </div>


          <div>
            <label htmlFor="state">State: </label>
            <select
              name="state"
              id="state"
              onChange={changeHandler}
            >
                <option value="">Select</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
            </select>
          </div>


          <div>
            <label htmlFor="zip">ZIP / postal code: </label>

            <input className=" border-black"
              type="text"
              onChange={changeHandler}
              placeholder="245206"
              name="zip"
              id="zip"
            />
          </div>
          
          {/* radio and checkbox section */}

          <p>By Email</p>
          <div>
            <input 
            type="checkbox"
            name="isVisible"
            id="byemail"
            />
            <label htmlFor="byemail">
              Comments <p>Get notified when 
                someones posts a comment on a posting.</p>
            </label>

            <input 
            type="checkbox"
            name="isVisible"
            id="byemail"
            />
            <label htmlFor="byemail">
              Candidates <p>Get notified when a candidate
                 applies for a job.</p>
            </label>

            <input 
            type="checkbox"
            name="isVisible"
            id="byemail"
            />
            <label htmlFor="byemail">
              Offers <p>Get notified when a candidate accepts
                 or rejects an offer.</p>
            </label>

          </div>

        <h3>Push Notifications</h3>
        <p>These are delivered via SMS to your mobile phone.</p>

        <fieldset>
          <input
          type="radio"
          name="mode"
          id="everything"
          />
          <label htmlFor="everything">Everything</label>

          <input
          type="radio"
          name="mode"
          id="everything"
          />
          <label htmlFor="everything">Same as email</label>

          <input
          type="radio"
          name="mode"
          id="everything"
          />
          <label htmlFor="everything">No push notifications</label>

        </fieldset>

      </form>
    </div>
  );
}

export default App;
