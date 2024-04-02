import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "",
    streetAddress: "", city: "", state: "", zip: "", comments: true, candidate: false, offer: false
    , mode: ""
  });

  function changeHandler(event) {

    setFormData(pre => {
      const { type, name, value, checked } = event.target;
      return {
        ...pre,
        [name]: type === "checkbox" ? checked : value
      }
    }

    )
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("data is printing");
    console.log(formData);
  }

  return (
    <div className="App">
      <form className="w-8/12 flex flex-col mx-auto bg-slate-50 shadow-md items-start px-5 relative py-5">

        <div className="flex flex-col ">
          <label htmlFor="fname" className="text-sm font-bold py-2 ">First Name: </label>

          <input className="w-8/12 rounded-md border-2 border-slate-100 w-[45.5rem] border-b-blue-200 px-2 py-1"
            type="text"
            onChange={changeHandler}
            placeholder="first Name"
            name="firstName"
            id="fname"
            value={formData.firstName}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="lastName" className="text-sm font-bold py-2 ">Last Name: </label>

          <input className="w-8/12 rounded-md border-2 border-slate-100 w-[45.5rem] border-b-blue-200 px-2 py-1"
            type="text"
            onChange={changeHandler}
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            value={formData.lastName}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="email" className="text-sm font-bold py-2 ">Email Address: </label>

          <input className="w-8/12 rounded-md border-2 border-slate-100 w-[45.5rem] border-b-blue-200 px-2 py-1"
            type="email"
            onChange={changeHandler}
            placeholder="xyz@gmail.com"
            name="email"
            id="email"
            value={formData.email}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="country" className="text-sm font-bold py-2 ">Country : </label>
          <select className="w-8/12 rounded-md border-2 border-slate-100 w-[45.5rem] border-b-blue-200 px-2 py-1"
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


        <div className="flex flex-col ">
          <label htmlFor="streetAddress" className="text-sm font-bold py-2 ">Street Address: </label>

          <input className="w-8/12 rounded-md border-2 border-slate-100 w-[45.5rem] border-b-blue-200 px-2 py-1"
            type="text"
            onChange={changeHandler}
            placeholder="1234 Main street "
            name="streetAddress"
            id="streetAddress"
            value={formData.streetAddress}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="city" className="text-sm font-bold py-2 ">City: </label>

          <input className="w-8/12 rounded-md border-2 border-slate-100 w-[45.5rem] border-b-blue-200 px-2 py-1"
            type="text"
            onChange={changeHandler}
            placeholder="Meerut"
            name="city"
            id="city"
            value={formData.city}
          />
        </div>


        <div className="flex flex-col ">
          <label htmlFor="state" className="text-sm font-bold py-2 ">State: </label>
          <select className="w-8/12 rounded-md border-2 border-slate-100 w-[45.5rem] border-b-blue-200 px-2 py-1"
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


        <div className="flex flex-col ">
          <label htmlFor="zip" className="text-sm font-bold py-2 ">ZIP / postal code: </label>

          <input className="w-8/12 rounded-md border-2 border-slate-100 w-[45.5rem] border-b-blue-200 px-2 py-1"
            type="text"
            onChange={changeHandler}
            placeholder="245206"
            name="zip"
            id="zip"
            value={formData.zip}
          />
        </div>

        {/* radio and checkbox section */}

        <p className="text-sm font-bold py-2 ">By Email</p>
        <div>
          <div className="flex gap-3 items-baseline">

            <input
              type="checkbox"
              onChange={changeHandler}
              name="comments"
              id="isVisible1"
              checked={formData.comments}
            />
            <label htmlFor="isVisible1" className="text-sm font-semibold py-2">
              Comments <p className="text-slate-600 font-normal">Get notified when
                someones posts a comment on a posting.</p>
            </label>

          </div >

          <div className="flex gap-3 items-baseline">
            <input
              type="checkbox"
              name="candidate"
              onChange={changeHandler}
              id="isVisible2"
              checked={formData.candidate}
            />
            <label htmlFor="isVisible2" className="text-sm font-semibold py-2">
              Candidates <p className="text-slate-600 font-normal">Get notified when a candidate
                applies for a job.</p>
            </label>
          </div>

          <div className="flex gap-3 items-baseline">
            <input
              type="checkbox"
              name="offer"
              onChange={changeHandler}
              id="isVisible3"
              checked={formData.offer}
            />
            <label htmlFor="isVisible3" className="text-sm font-semibold py-2">
              Offers <p className="text-slate-600 font-normal">Get notified when a candidate accepts
                or rejects an offer.</p>
            </label>
          </div>

        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-bold ">Push Notifications</h3>
          <p className="text-slate-600 font-normal text-sm">These are delivered via SMS to your mobile phone.</p>
        </div>

        <fieldset className="flex flex-col gap-y-2 py-3">
          <div className="flex gap-3">
          <input
            type="radio"
            name="mode"
            value="Everything"
            onChange={changeHandler}
            id="Everything"
            checked={formData.mode === 'Everything'}
          />
          <label htmlFor="Everything">Everything</label>
          </div>

          <div className="flex gap-3">
          <input
            type="radio"
            name="mode"
            value="sameEmail"
            onChange={changeHandler}
            id="sameEmail"
            checked={formData.mode === 'sameEmail'}

          />
          <label htmlFor="sameEmail">Same as email</label>
          </div>

          <div className="flex gap-3">
          <input
            type="radio"
            name="mode"
            value="noNotification"
            onChange={changeHandler}
            id="noNotification"
            checked={formData.mode === 'noNotification'}


          />
          <label htmlFor="noNotification">No push notifications</label>
          </div>

        </fieldset>

        <button type="submit" onClick={submitHandler} className="bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-400 rounded-md">Submit</button>

      </form>
    </div>
  );
}

export default App;
