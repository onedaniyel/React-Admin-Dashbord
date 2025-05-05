import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MessageIcon from "@mui/icons-material/Message";
import TuneIcon from "@mui/icons-material/Tune";
import Typography from "@mui/material/Typography";

const NAVIGATION = [
  {
    kind: "header",
    title: "Dashboard",
  },

  {
    segment: "",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Home
      </Typography>
    ),
    icon: <HomeOutlinedIcon />,
  },
  {
    segment: "Analytics",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Analytics
      </Typography>
    ),
    icon: <TimelineOutlinedIcon />,
  },
  {
    segment: "Sales",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Sales
      </Typography>
    ),
    icon: <AttachMoneyOutlinedIcon />,
  },
  {
    kind: "header",
    title: "Quick Menu",
  },
  {
    segment: "Users",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Users
      </Typography>
    ),
    icon: <PermIdentityOutlinedIcon />,
  },
  {
    segment: "NewUser",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        New User
      </Typography>
    ),
    icon: <PersonAddOutlinedIcon />,
  },
  {
    segment: "Products",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Products
      </Typography>
    ),
    icon: <StorefrontOutlinedIcon />,
    pattern: "Product/:ProductId",
  },

  {
    segment: "Transactions",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Transactions
      </Typography>
    ),
    icon: <MonetizationOnOutlinedIcon />,
  },
  {
    segment: "Reports",
    title: (
      <Typography
        sx={{
          fontFamily: "var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Reports
      </Typography>
    ),
    icon: <ReportGmailerrorredOutlinedIcon />,
  },
  {
    kind: "header",
    title: "Notifications",
  },
  {
    segment: "Mail",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Mail
      </Typography>
    ),
    icon: <EmailOutlinedIcon />,
  },
  {
    segment: "Feedback",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Feedback
      </Typography>
    ),
    icon: <DashboardIcon />,
  },
  {
    segment: "massages",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        massages
      </Typography>
    ),
    icon: <MessageIcon />,
  },
  {
    kind: "header",
    title: "Staff",
  },
  {
    segment: "Manage",
    title: (
      <Typography
        sx={{
          fontFamily: " var(--font-family)",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Manage
      </Typography>
    ),
    icon: <TuneIcon />,
  },
];
export default NAVIGATION;
