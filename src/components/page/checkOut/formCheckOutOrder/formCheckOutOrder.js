import { React, useState, useEffect, useReducer } from "react";

export function FormCheckOutOrder({
  formTheCustomer,
  formCustomerMemberValue,
  formCustomerMember,
}) {
  return (
    <div className="Form-Customer-Main-Container">
      <div className="Form-Customer-Container">
        <label className="Container">
          Jag vill bli medlem
          <input
            className="New-Form-Name-Innerbox"
            type="checkbox"
            onChange={(e) => formCustomerMember(e, true)}
          />
        </label>
      </div>
      <div className="Form-Customer-Container">
        <label className="Container">
          Förnamn
          <input
            className="Form-Customer-Innerbox"
            type="text"
            placeholder="Förnamn"
            name="title"
            onChange={(e) => formTheCustomer(e, "firstname")}
          />
        </label>
      </div>
      <div className="Form-Customer-Container">
        <label className="Container">
          Efternam
          <input
            className="Form-Customer-Innerbox"
            type="text"
            placeholder="Efternamn"
            name="title"
            onChange={(e) => formTheCustomer(e, "lastname")}
          />
        </label>
      </div>
      <div className="Form-Customer-Container">
        <label className="Container">
          adress
          <input
            className="Form-Address-Innerbox"
            type="text"
            placeholder="Adress"
            name="title"
            onChange={(e) => formTheCustomer(e, "address")}
          />
        </label>
      </div>

      <div className="Form-Customer-Container">
        <label className="Container">
          Zip
          <input
            className="Form-ZIP-Code-Innerbox"
            type="number"
            placeholder="ZIP code"
            name="title"
            onChange={(e) => formTheCustomer(e, "zipcode")}
          />
        </label>
      </div>
      <div className="Form-Customer-Container">
        <label className="Container">
          Mobil
          <input
            className="Form-Mobile-Number-Innerbox"
            type="text"
            placeholder="Mobile Number"
            name="title"
            onChange={(e) => formTheCustomer(e, "phone")}
          />
        </label>
      </div>
      <div className="Form-Customer-Container">
        <label className="Container">
          Mail
          <input
            className="Form-Mail-Input"
            type="text"
            placeholder="Mail"
            name="title"
            onChange={(e) => formTheCustomer(e, "email")}
          />
        </label>
      </div>

      {formCustomerMemberValue === true ? (
        <div className="Form-Customer-Container">
          <label className="Container">
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
    </div>
  );
}
// fråga hur kopplar jag databaserna varukorgen tillsammas sign
