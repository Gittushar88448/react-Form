import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "",
    streetAddress: "", city: "", state: "", zip: "",comments:true, candidate:false , offer:false
    , mode: ""
  });

  function changeHandler(event) {

    setFormData(pre => {
      const {type , name ,value , checked} = event.target;
      return {
        ...pre,
        [name]: type === "checkbox"? checked : value
      }
    }

    )
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("data is printing");
    console.log(formData);
  }

  return (
    <div className="App">
      <form className="w-8/12 flex flex-col mx-auto bg-slate-50 shadow-md items-start px-5 py-5">
        
          <div className="flex flex-col ">
            <label htmlFor="fname">First Name: </label>

            <input className=" border-black"
              type="text"
              onChange={changeHandler}
              placeholder="first Name"
              name="firstName"
              id="fname"
              value={formData.firstName}
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
              value={formData.lastName}
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
              value={formData.email}
            />
          </div>

          <div>
            <label htmlFor="country">Country : </label>
            <select
              name="country"
              id="country"
              value={formData.country}
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
              value={formData.streetAddress}
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
              value={formData.city}
            />
          </div>


          <div>
            <label htmlFor="state">State: </label>
            <select
              name="state"
              id="state"
              onChange={changeHandler}
              value={formData.state}
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
              value={formData.zip}
            />
          </div>
          
          {/* radio and checkbox section */}

          <p>By Email</p>
          <div>
            <input 
            type="checkbox"
            onChange={changeHandler}
            name="comments"
            id="isVisible1"
            checked = {formData.comments}
            />
            <label htmlFor="isVisible1">
              Comments <p>Get notified when 
                someones posts a comment on a posting.</p>
            </label>

            <input 
            type="checkbox"
            name="candidate"
            onChange={changeHandler}
            id="isVisible2"
            checked={formData.candidate}
            />
            <label htmlFor="isVisible2">
              Candidates <p>Get notified when a candidate
                 applies for a job.</p>
            </label>

            <input 
            type="checkbox"
            name="offer"
            onChange={changeHandler}
            id="isVisible3"
            checked={formData.offer}
            />
            <label htmlFor="isVisible3">
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
          value="Everything"
          onChange={changeHandler}
          id="Everything"
          checked = {formData.mode === 'Everything'}
          />
          <label htmlFor="Everything">Everything</label>

          <input
          type="radio"
          name="mode"
          value="sameEmail"
          onChange={changeHandler}
          id="sameEmail"
          checked={formData.mode === 'sameEmail'}

          />
          <label htmlFor="sameEmail">Same as email</label>

          <input
          type="radio"
          name="mode"
          value="noNotification"
          onChange={changeHandler}
          id="noNotification"
          checked={formData.mode === 'noNotification'}


          />
          <label htmlFor="noNotification">No push notifications</label>

        </fieldset>

        <button type="submit" onClick={submitHandler}>Submit</button>

      </form>
    </div>
  );
}

export default App;
