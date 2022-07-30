import { useTheme } from "@emotion/react";
import { PropsWithChildren } from "react";
import { AppBarContainer, FakeContainer } from "./styled.component";

const AppLayout = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  // theme.pl
  return (
    <div>
      <AppBarContainer>
        <span>Malony.Blog</span>
      </AppBarContainer>
      <div>
        <FakeContainer />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
