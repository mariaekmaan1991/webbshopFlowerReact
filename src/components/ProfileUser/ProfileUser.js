import { React, useContext, useEffect, useState } from "react";
import { firebase } from "../../firebase/config";
import { UserContext } from "../../firebase/UserProvider";
import { updateUserDocument } from "../../firebase/user";

import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ProfileImage } from "../ProfileImage/ProfileImage";
// import { ProfileImage } from "../ProfileImage/ProfileImage";

export function ProfileUser() {
  const { currentUser } = useContext(UserContext);
  console.log("finns här Dina???", currentUser.user.uid);
  const params = useParams();
  const { register, setValue, handleSubmit } = useForm();
  const [userDocument, setUserDocument] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("User")
      .doc(params.id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const documentData = doc.data();
          console.log(documentData);
          setUserDocument(documentData);
          for (let [key, value] of Object.entries(documentData)) {
            //här sätter de gammla värdet
            setValue(key, value);
          }
        }
      });
    return unsubscribe;
  }, [currentUser.user.uid, setValue, params.id]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setisLoading(true);
      await updateUserDocument({ uid: params.id, ...data });
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const formClassName = `ui form ${isLoading ? "loading" : ""}`;

  if (!userDocument) {
    return null;
  }
  //formClassName
  console.log(userDocument);
  return (
    <div>
      {/* <ProfileImage id={params.id} /> */}
      <ProfileImage id={params.id} />
      <div
        className="add-form-container"
        style={{ maxWidth: 960, margin: "50px auto" }}
      >
        <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
            <div className="eight wide field">
              <label>
                Name
                <input type="text" name="name" ref={register} />
              </label>
            </div>
            <div className="eight wide field">
              <label>
                Email
                <input type="text" name="email" ref={register} />
              </label>
            </div>
          </div>
          <div className="fields">
            <div className="six wide field">
              <label>
                Address
                <input type="text" name="address" ref={register} />
              </label>
            </div>
            <div className="five wide field">
              <label>
                City
                <input type="text" name="city" ref={register} />
              </label>
            </div>
            <div className="two wide field">
              <label>
                State
                <input type="text" name="state" ref={register} />
              </label>
            </div>
            <div className="three wide field">
              <label>
                Zip
                <input type="text" name="zip" ref={register} />
              </label>
            </div>
          </div>
          <div className="equal width fields">
            <div className="field">
              <label>
                Phone
                <input type="text" name="phone" ref={register} />
              </label>
            </div>
            <div className="field">
              <label>
                Specialty
                <select className="specialty" name="specialty" ref={register}>
                  <option value="field agent">Field Agent</option>
                  <option value="covert operations">Covert Operations</option>
                  <option value="intelligence officer">
                    Intelligence Officer
                  </option>
                </select>
              </label>
            </div>
            <div className="field">
              <label>
                ip
                <input type="text" name="ip" ref={register} />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ui submit large grey button right floated"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
