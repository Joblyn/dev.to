import React from "react";
import { ButtonPrimary, ButtonSecondary } from "./styles";

export const PrimaryLg = ({ ...restProps }) => (
  <ButtonPrimary {...restProps} href="https://dev.to/enter?state=new-user">
    Create account
  </ButtonPrimary>
);
export const SecondaryMd = ({ ...restProps }) => (
  <ButtonSecondary md {...restProps} href="https://dev.to/enter">
    Log in
  </ButtonSecondary>
);

export const SecondaryLg = ({ ...restProps }) => (
  <ButtonSecondary lg {...restProps} href="https://dev.to/enter">
    Log in
  </ButtonSecondary>
);

export const SecondarySm = ({ ...restProps }) => (
  <ButtonSecondary sm {...restProps} href="https://dev.to/enter">
    Log in
  </ButtonSecondary>
);
