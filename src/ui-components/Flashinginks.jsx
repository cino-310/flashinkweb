/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Switchfieldon from "./Switchfieldon";
import Switchfieldoff from "./Switchfieldoff";
import Menubody from "./Menubody";
import { View } from "@aws-amplify/ui-react";
export default function Flashinginks(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="184px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Flashinginks")}
      {...rest}
    >
      <Switchfieldon
        display="flex"
        gap="16px"
        direction="row"
        width="200px"
        height="40px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="136px"
        left="19px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="4px 0px 4px 0px"
        {...getOverrideProps(overrides, "switch-field/on18592")}
      ></Switchfieldon>
      <Switchfieldoff
        display="flex"
        gap="16px"
        direction="row"
        width="200px"
        height="40px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="88px"
        left="19px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="4px 0px 4px 0px"
        {...getOverrideProps(overrides, "switch-field/off")}
      ></Switchfieldoff>
      <Switchfieldon
        display="flex"
        gap="16px"
        direction="row"
        width="200px"
        height="40px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="40px"
        left="19px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="4px 0px 4px 0px"
        {...getOverrideProps(overrides, "switch-field/on18520")}
      ></Switchfieldon>
      <Menubody
        width="242px"
        height="186px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-1px"
        left="-1px"
        border="1px SOLID rgba(0,0,0,0.25)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "menu-body")}
      ></Menubody>
    </View>
  );
}
