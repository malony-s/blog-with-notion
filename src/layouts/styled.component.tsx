import styled from "@emotion/styled";

export const AppBarContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  width: "100vw",
  zIndex: theme.zIndex.appbar,
  background: theme.palette.dark,
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxShadow: theme.shadows[1],
  ...theme.layout.appbar,
}));

export const FakeContainer = styled("div")(({ theme }) => ({
  height: theme.layout.appbar.height,
}));

export const AppBar = () => {};
