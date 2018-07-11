import * as React from "react"
import styled from "react-emotion"
import { OperationalStyleConstants } from "../utils/constants"
import { ContextMenu } from "../"

export interface Props {
  /** Options to display in dropdown */
  children: React.ReactNode[]

  /** Action when item in dropdown is selected - if specified here, it is applied to all dropdown items */
  onClick?: any

  /** Items to display in dropdown */
  items?: any[]

  /** Display carat on opposite side to align prop */
  carat?: boolean

  /** Alignment */
  align: "left" | "right"
}

const Container = styled("div")(
  ({
    theme,
    align,
    isOpen,
    withCarat,
  }: {
    theme?: OperationalStyleConstants
    align: "left" | "right"
    isOpen: boolean
    withCarat: boolean
  }) => ({
    width: 250,
    lineHeight: "50px",
    padding: `0 ${theme.space.content}px`,
    color: isOpen ? theme.color.white : "#ffffffcc",
    backgroundColor: isOpen ? "hsla(0, 0%, 100%, 0.1)" : "transparent",
    boxShadow: isOpen ? "0 3px 6px rgba(0, 0%, 0%, 0.3)" : "none",
    fontWeight: theme.font.weight.medium,
    display: "flex",
    alignItems: "center",
    justifyContent: align === "left" ? "flex-start" : "flex-end",
    "& > div": {
      marginLeft: theme.space.small,
    },
    "&:hover": {
      color: theme.color.white,
      backgroundColor: "hsla(0, 0%, 100%, 0.1)",
      boxShadow: "0 3px 6px rgba(0, 0%, 0%, 0.3)",
    },
    ...(withCarat
      ? {
          "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            [align === "left" ? "right" : "left"]: theme.space.content + theme.space.small,
            width: 0,
            height: 0,
            border: "4px solid transparent",
            borderTopColor: "#ffffff80",
            transform: "translateY(calc(-50% + 2px))",
          },
          "&:hover": {
            color: theme.color.white,
            backgroundColor: "hsla(0, 0%, 100%, 0.1)",
            boxShadow: "0 3px 6px rgba(0, 0%, 0%, 0.3)",
            "&::after": {
              borderTopColor: theme.color.white,
            },
          },
        }
      : {}),
  }),
)

const HeaderMenu: React.SFC<Props> = (props: Props) => {
  return (
    <ContextMenu {...props}>
      {isOpen => (
        <Container isOpen={isOpen} align={props.align} withCarat={Boolean(props.carat)}>
          {props.children}
        </Container>
      )}
    </ContextMenu>
  )
}

HeaderMenu.defaultProps = {
  align: "left",
  carat: false,
}

export default HeaderMenu
