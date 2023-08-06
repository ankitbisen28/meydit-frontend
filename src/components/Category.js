import React from "react";
import { Button, MenuItem, Menu, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const StyledButton = styled(Button)({
  height: "4.5rem",
  width: "30em",
  boxShadow: "none",
  borderRadius: "0",
  backgroundColor: '#d19c97'
});

const StyledMenuItem = styled(MenuItem)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "26.3rem",
  alignItems: "center",
});

export const Category = () => {
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <StyledButton
              variant="contained"
              {...bindTrigger(popupState)}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Categories
            </StyledButton>
            <Menu {...bindMenu(popupState)} sx={{borderRadius: "none"}}>
              <StyledMenuItem onClick={popupState.close}>
                Profile
              </StyledMenuItem>
              <StyledMenuItem onClick={popupState.close}>
                My account
              </StyledMenuItem>
              <StyledMenuItem onClick={popupState.close}>Logout</StyledMenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
};
