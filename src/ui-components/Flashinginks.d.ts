/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SwitchfieldonProps } from "./Switchfieldon";
import { SwitchfieldoffProps } from "./Switchfieldoff";
import { MenubodyProps } from "./Menubody";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlashinginksOverridesProps = {
    Flashinginks?: PrimitiveOverrideProps<ViewProps>;
    "switch-field/on18592"?: SwitchfieldonProps;
    "switch-field/off"?: SwitchfieldoffProps;
    "switch-field/on18520"?: SwitchfieldonProps;
    "menu-body"?: MenubodyProps;
} & EscapeHatchProps;
export declare type FlashinginksProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FlashinginksOverridesProps | undefined | null;
}>;
export default function Flashinginks(props: FlashinginksProps): React.ReactElement;
