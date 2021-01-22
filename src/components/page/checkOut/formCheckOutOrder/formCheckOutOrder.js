import { React, useState, useEffect, useReducer } from "react";

export function FormCheckOutOrder({
  formTheCustomer,
  formCustomerMemberValue,
  formCustomerMember,
}) {
  return (
    <div>
      <label className="container">
        Jag vill bli medlem
        <input type="checkbox" onChange={(e) => formCustomerMember(e, true)} />
      </label>
      <div className="Form-Customer-Mainbox">
        <div className="Form-firstname-Customer-Box">
          Efternamn
          <input
            className="New-Form-FirstName-Innerbox"
            type="text"
            placeholder="Efternamn"
            name="title"
            onChange={(e) => formTheCustomer(e, "firstname")}
          />
        </div>
        <div className="Form-Customer-Box">
          <div className="Form-Customer">
            förnamn
            <input
              className="Form-Customer-Innerbox"
              type="text"
              placeholder="Efternamn"
              name="title"
              onChange={(e) => formTheCustomer(e, "lastname")}
            />
          </div>
        </div>
        <div className="Form-Address-Box">
          <div className="Form-Address">
            adress
            <input
              className="Form-Address-Innerbox"
              type="text"
              placeholder="Adress"
              name="title"
              onChange={(e) => formTheCustomer(e, "address")}
            />
          </div>
        </div>
        <div className="Form-Mail-Box">
          <div className="Form-Mail">
            Mail
            <input
              className="Form-Mail-Innerbox"
              type="text"
              placeholder="Mail"
              name="title"
              onChange={(e) => formTheCustomer(e, "email")}
            />
          </div>
        </div>

        {formCustomerMemberValue === true ? (
          <div className="Form-Mail">
            <label>
              Lösenord
              <input
                type="password"
                name="password"
                placeholder="Lösenord"
                onChange={(e) => formTheCustomer(e, "password")}
              />
            </label>
          </div>
        ) : null}
        <div className="Form-Mobile-Number-Box">
          <div className="Form-Mobile-Number">
            Mobil
            <input
              className="Form-Mobile-Number-Innerbox"
              type="text"
              placeholder="Mobile Number"
              name="title"
              onChange={(e) => formTheCustomer(e, "phone")}
            />
          </div>
        </div>
        <div className="Form-ZIP-Code-Box">
          <div className="Form-ZIP-Code">
            Zip
            <input
              className="Form-ZIP-Code-Innerbox"
              type="number"
              placeholder="ZIP code"
              name="title"
              onChange={(e) => formTheCustomer(e, "zipcode")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// fråga hur kopplar jag databaserna varukorgen tillsammas sign
