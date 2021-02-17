import React, {Component} from "react";
import {StyleProp, ViewStyle} from "react-native";

export interface ReactNativeInputSpinnerProps {
	type?: string;
	min?: string | number;
	max?: string | number;
	value?: string | number;
	initialValue?: string | number;
	step?: string | number;
	precision?: number;
	rounded?: boolean;
	activeOpacity?: number;
	color?: string;
	colorPress?: string;
	colorRight?: string;
	colorLeft?: string;
	colorMax?: string;
	colorMin?: string;
	background?: string;
	textColor?: string;
	arrows?: boolean;
	showBorder?: boolean;
	fontSize?: number;
	fontFamily?: string;
	buttonFontSize?: number;
	buttonFontFamily?: string;
	buttonTextColor?: string;
	maxLength?: number;
	disabled?: boolean;
	editable?: boolean;
	autofocus?: boolean;
	selectTextOnFocus?: boolean;
	placeholder?: string;
	placeholderTextColor?: string;
	selectionColor?: string;
	returnKeyLabel?: string;
	returnKeyType?: string;
	width?: string | number;
	height?: string | number;
	onChange?(...args: unknown[]): unknown;
	onFocus?(...args: unknown[]): unknown;
	onBlur?(...args: unknown[]): unknown;
	onKeyPress?(...args: unknown[]): unknown;
	onMin?(...args: unknown[]): unknown;
	onMax?(...args: unknown[]): unknown;
	onIncrease?(...args: unknown[]): unknown;
	onDecrease?(...args: unknown[]): unknown;
	onSubmit?(...args: unknown[]): unknown;
	accelerationDelay?: number;
	speed?: number;
	emptied?: boolean;
	continuity?: boolean;
	typingTime?: number;
	buttonLeftDisabled?: boolean;
	buttonRightDisabled?: boolean;
	buttonLeftText?: string;
	buttonRightText?: string;
	buttonLeftImage?: React.ReactElement;
	buttonRightImage?: React.ReactElement;
	buttonPressLeftImage?: React.ReactElement;
	buttonPressRightImage?: React.ReactElement;
	buttonStyle?: StyleProp<ViewStyle>;
	buttonPressStyle?: StyleProp<ViewStyle>;
	inputStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	append?: React.ReactElement;
	prepend?: React.ReactElement;
	decimalSeparator?: string;
	containerProps?: object;
	inputProps?: object;
	leftButtonProps?: object;
	rightButtonProps?: object;
}
export default class InputSpinner extends Component<ReactNativeInputSpinnerProps> {}
