import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NAVIGATION from "./NAVIGATION";
import { Navigate } from "react-router-dom";
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function AppBar({ children }) {
  const router = useDemoRouter();

  // Get the path without leading slash
  const path = router.pathname.startsWith("/")
    ? router.pathname.substring(1)
    : router.pathname;
  console.log(path);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        logo: <AdminPanelSettingsIcon fontSize="large" />,
        title: (
          <Typography
            sx={{
              fontFamily: " var(--font-family)",
              fontSize: "20px",
            }}
          >
            Admin Dashboard
          </Typography>
        ),
        homeUrl: "/",
      }}
    >
      <DashboardLayout
        slots={{
          toolbarActions: null,
        }}
      >
        {children ? (
          <>
            {children}
            <Navigate to={router.pathname} />
          </>
        ) : (
          <DemoPageContent pathname={router.pathname} />
        )}
      </DashboardLayout>
    </AppProvider>
  );
}

AppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default AppBar;
