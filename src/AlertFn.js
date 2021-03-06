import React from "react";
import { Alert } from "react-bootstrap";

var AlertFn = () => {
  const arr = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  /* 반복부 테스트 */
  const alertList = arr.map((variant, idx) => (
      <Alert key={idx} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
          like.
      </Alert>
  ));

  return (
    <div>
      <div><h1>Alert 반복문</h1></div>
        <br/>
      <div>{alertList}</div>
    </div>
  );
};

export default AlertFn;
