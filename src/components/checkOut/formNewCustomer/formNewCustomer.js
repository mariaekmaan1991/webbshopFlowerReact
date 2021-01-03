import { React, useState, useEffect, useReducer } from "react";

export function FormNewCustomer({ setSecondFormData }) {
  function formForTheCustomer(e, id) {
    setSecondFormData({ [id]: e.target.value });
  }

  return (
    <form className="Form-Customer-Mainbox">
      <div className="Form-firstname-Customer-Box">
        <input
          className="New-Form-FirstName-Innerbox"
          type="text"
          placeholder="firstname"
          name="title"
          onChange={(e) => formForTheCustomer(e, "firstname")}
        />
      </div>
      <div className="Form-LastName-Customer-Box">
        <div className="Form-LastName-Customer">
          <input
            className="Form-LastName-Customer-Innerbox"
            type="text"
            placeholder="LastName"
            name="title"
            onChange={(e) => formForTheCustomer(e, "LastName")}
          />
        </div>
      </div>
      <div className="Form-LastName-Address-Box">
        <div className="Form-LastName-Address">
          <input
            className="Form-LastName-Address-Innerbox"
            type="text"
            placeholder="Address"
            name="title"
            onChange={(e) => formForTheCustomer(e, "Addresss")}
          />
        </div>
      </div>

      <div className="Form-LastName-Mail-Box">
        <div className="Form-LastName-Mail">
          <input
            className="Form-LastName-Mail-Innerbox"
            type="text"
            placeholder="Mail"
            name="title"
            onChange={(e) => formForTheCustomer(e, "Mail")}
          />
        </div>
      </div>
      <div className="Form-LastName-Mobile-Number-Box">
        <div className="Form-LastName-Mobile-Number">
          <input
            className="Form-LastName-Mobile-Number-Innerbox"
            type="text"
            placeholder="Mobile Number"
            name="title"
            onChange={(e) => formForTheCustomer(e, "MobileNumber")}
          />
        </div>
      </div>

      <div className="Form-ZIP-Code-Box">
        <div className="Form-ZIP-Code">
          <input
            className="Form-ZIP-Code-Innerbox"
            type="number"
            placeholder="ZIP code"
            name="title"
            onChange={(e) => formForTheCustomer(e, "ZIP-Code")}
          />
        </div>
      </div>

      <div className="Form-Customer-SaveInfo"></div>
    </form>
  );
}
