import React from "react";
import Input from "./Input";

const Info = {
  Fullname: [
    {
      id: "1",
      name: "Full name",
      type: "text",
      placeholder: "email.address@us.com",
    },
    {
      id: "2",
      name: "Email Address",
      type: "password",
      placeholder: "Password",
    },
  ],
};

export default function Detail() {
  return (
    <div className="detail">
      <Input name="Full name" id="full-name" placeholder="email.address@us.com" type="text" />
      <Input name="Email Address" id="email-address" placeholder="Password" type="password" />
    </div>
  );
}
