import React from "react";
import { Button, MenuItem, Menu, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const StyledButton = styled(Button)({
  height: "3rem",
  width: "27em",
  boxShadow: "none",
  borderRadius: "0",
});

const StyledMenuItem = styled(MenuItem)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "23.6rem",
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
