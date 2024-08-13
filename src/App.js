import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Avatar,
  Card,
  CardHeader,
  Chip,
  Grid,
  Stack,
  Tooltip,
} from "@mui/material";
import AnalyticEcommerce from "./components/card/statistics/AnalyticEcommerce";
import MainCard from "./components/MainCard";
import MonthlyBarChart from "./components/card/statistics/MonthlyBarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LatestOrders from "./components/LatestOrders";
import CustomersFeedback from "./components/CustomersFeedback";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import WidgetsIcon from "@mui/icons-material/Widgets";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  color: "rgb(165, 166, 170)",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 3,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "rgb(31, 32, 41)",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    backgroundColor: "rgb(31, 32, 41)",
    ...openedMixin(theme),
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const data = [
  { value: 100, color: "rgb(114,149,253)" },
  { value: 70, color: "rgb(43,50,102)" },
];

const size = {
  width: 240,
  height: 165,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({
  children,
  dy,
  color = "#FFFFFF",
  fontSize = "14px",
}) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 2 + dy}
      style={{ fill: color, fontSize }}
    >
      {children}
    </StyledText>
  );
}

function PieChartWithCenterLabel() {
  return (
    <PieChart
      sx={{ ml: 12 }}
      series={[
        {
          data,
          innerRadius: 45,
          outerRadius: 60,
          stroke: "none",
          strokeWidth: 0,
        },
      ]}
      {...size}
    >
      <PieCenterLabel dy={-10} color="rgb(250,250,250)" fontSize="16px">
        70%
      </PieCenterLabel>
      <PieCenterLabel dy={10} color="rgb(250,250,250)" fontSize="10px">
        Goal
      </PieCenterLabel>
      <PieCenterLabel dy={20} color="rgb(250,250,250)" fontSize="10px">
        Completed
      </PieCenterLabel>
    </PieChart>
  );
}
const items = [
  {
    icon: <GpsFixedIcon />,
    title: "Goals",
    iconProps: {
      color: "rgb(198,101,74)",
      backgroundColor: "rgb(96,49,54)",
      size: "large",
    },
    arrowProps: {
      color: "rgb(238,239,242)",
      backgroundColor: "rgb(70,71,75)",
      size: "small",
    },
  },
  {
    icon: <RiceBowlIcon />,
    title: "Poplular Dishes",
    iconProps: {
      color: "rgb(198,101,74)",
      backgroundColor: "rgb(96,49,54)",
      size: "large",
    },
    arrowProps: {
      color: "rgb(238,239,242)",
      backgroundColor: "rgb(70,71,75)",
      size: "small",
    },
  },
  {
    icon: <MenuBookIcon />,
    title: "Menus",
    iconProps: {
      color: "rgb(198,101,74)",
      backgroundColor: "rgb(96,49,54)",
      size: "large",
    },
    arrowProps: {
      color: "rgb(238,239,242)",
      backgroundColor: "rgb(70,71,75)",
      size: "small",
    },
  },
];

export default function MiniDrawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("Last 7 Days");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menuId = "primary-search-account-menu";
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(20,19,22)",
        borderRadius: "20px",
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
                color: "rgb(165, 166, 170)",
              },
              open && { display: "none" },
            ]}
          >
            <WidgetsIcon fontSize="large" sx={{ color: "rgb(118,149,250)" }} />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "rgb(165,166,170)" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Email">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{
                  color: "rgb(165, 166, 170)",
                  backgroundColor: "rgb(69, 70, 72)",
                  borderRadius: "50%",
                  padding: "6px",
                  margin: "10px",
                }}
              >
                <MailIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{
                  color: "rgb(165, 166, 170)",
                  backgroundColor: "rgb(69, 70, 72)",
                  borderRadius: "50%",
                  padding: "6px",
                  margin: "10px",
                }}
              >
                <SettingsIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{
                  color: "rgb(165, 166, 170)",
                  backgroundColor: "rgb(69, 70, 72)",
                  borderRadius: "50%",
                  padding: "6px",
                  margin: "10px",
                }}
              >
                <Badge badgeContent={17} variant="dot" color="error">
                  <NotificationsIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Open Profile">
              <IconButton sx={{ p: "6px" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/profile_pic.jpeg"
                  sx={{
                    width: 30,
                    height: 30,
                    objectFit: "cover",
                    fontSize: "small",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ color: "rgb(165, 166, 170)" }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {[
            {
              text: "Home",
              icon: <HomeIcon sx={{ color: "rgb(118,149,250)" }} />,
            },
            { text: "Annalytics", icon: <AssessmentIcon /> },
            { text: "Events", icon: <EventAvailableIcon /> },
            { text: "Drafts", icon: <AccountBalanceWalletIcon /> },
            { text: "Integrations", icon: <IntegrationInstructionsIcon /> },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      color: "rgb(165, 166, 170)",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ mt: "55vh" }}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      color: "rgb(165, 166, 170)",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Logout"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          </Box>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          height: "100%",
          width: "100%",
          backgroundColor: "rgb(20,19,22)",
        }}
      >
        <Grid container mt={8}>
          <Grid item xs={12} mb={3}>
            <Typography
              variant="h5"
              sx={{ color: "rgb(254,253,255)", fontWeight: "700" }}
            >
              Dashboard
            </Typography>
          </Grid>
          <Grid container xs={12} sm={12} rowGap={2} columnGap={2}>
            <Grid container xs={12} sm={12} md={8} columnSpacing={1}>
              <Grid item xs={12} sm={12} md={3}>
                <AnalyticEcommerce
                  icon={<AssignmentIcon fontSize="large" />}
                  title="Total Orders"
                  count="75"
                  textColor="rgb(20,191,144)"
                  percentage="3%"
                  iconBgColor="rgb(40,52,106)"
                  iconColor="rgb(65,101,253)"
                  iconPercentage={<ArrowDropUpIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <AnalyticEcommerce
                  icon={<ShoppingBagIcon fontSize="large" />}
                  title="Total Delivered"
                  count="70"
                  textColor="rgb(166,82,82)"
                  percentage="3%"
                  iconBgColor="rgb(22,84,72)"
                  iconColor="rgb(0,207,143)"
                  iconPercentage={<ArrowDropDownIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <AnalyticEcommerce
                  icon={<ShoppingBagIcon fontSize="large" />}
                  title="Total Cancelled"
                  count="05"
                  textColor="rgb(20,191,144)"
                  percentage="3%"
                  iconBgColor="rgb(99,55,50)"
                  iconColor="rgb(243,95,91)"
                  iconPercentage={<ArrowDropUpIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <AnalyticEcommerce
                  icon={<CurrencyExchangeIcon fontSize="large" />}
                  title="Total Revenue"
                  count="$12k"
                  textColor="rgb(166,82,82)"
                  percentage="3%"
                  iconBgColor="rgb(90,46,74)"
                  iconColor="rgb(225,69,153)"
                  iconPercentage={<ArrowDropDownIcon />}
                />
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={4} columnSpacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Card
                  sx={{
                    border: "1px solid",
                    borderRadius: 2,
                    backgroundColor: "rgb(31, 32, 41)",
                    borderColor:
                      theme.palette.mode === "dark"
                        ? theme.palette.divider
                        : theme.palette.grey.A800,

                    "& pre": {
                      m: 0,
                      p: "16px !important",
                      fontFamily: theme.typography.fontFamily,
                      fontSize: "0.75rem",
                    },
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} sm={3} md={5}>
                      <CardHeader
                        title="Net Profit"
                        titleTypographyProps={{
                          variant: "subtitle1",
                          color: "rgb(204,207,212)",
                          fontWeight: "600",
                        }}
                      />
                      <Typography
                        variant="h3"
                        component="div"
                        sx={{
                          ml: "6%",
                          color: "rgb(255,255,255)",
                          fontWeight: "900",
                        }}
                      >
                        $6759.25
                      </Typography>
                      <Box display="flex" mr={2}>
                        <IconButton
                          size="large"
                          aria-label="show 4 new mails"
                          color="inherit"
                          sx={{
                            color: "rgb(20,191,144)",
                            mt: 1,
                          }}
                        >
                          <ArrowDropUpIcon />
                        </IconButton>
                        <Typography
                          component="div"
                          sx={{
                            mr: "10%",
                            color: "rgb(20,191,144)",
                            fontWeight: "900",
                            mt: 2.5,
                            fontSize: "14px",
                          }}
                        >
                          3%
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={9} md={7} align="right">
                      <PieChartWithCenterLabel />
                      <Typography
                        fontSize="10px"
                        sx={{ mb: "2%", mr: "12%" }}
                        color="rgb(254,253,255)"
                      >
                        *This Values has been rounded off.
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} rowGap={2} columnGap={2}>
              <Grid container xs={12} sm={12} md={8} columnSpacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <MainCard sx={{ mt: 1 }} content={false}>
                    <Box
                      sx={{ p: 3, pb: 0 }}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Stack spacing={2}>
                        <Typography
                          variant="h5"
                          fontWeight="800"
                          color="rgb(254,253,255)"
                        >
                          Activity
                        </Typography>
                      </Stack>
                      <Box display="flex">
                        <Chip
                          label={
                            <Box display="flex" alignItems="center" fontWeight="600">
                              Weekly
                              <ArrowDropDownIcon
                                sx={{
                                  marginLeft: "8px",
                                  color: "rgb(194,197,201)",
                                }}
                              />
                            </Box>
                          }
                          sx={{
                            backgroundColor: "rgb(75,76,80)",
                            color: "rgb(194,197,201)",
                            paddingRight: "8px 0px 8px 8px",
                          }}
                        />
                      </Box>
                     
                    </Box>
                    <MonthlyBarChart />
                  </MainCard>
                </Grid>
              </Grid>
              <Grid container xs={12} sm={12} md={4} columnSpacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <Card
                    sx={{
                      mt: 1,
                      borderRadius: 2,
                      backgroundColor: "rgb(31, 32, 41)",
                      borderColor:
                        theme.palette.mode === "dark"
                          ? theme.palette.divider
                          : theme.palette.grey.A800,

                      "& pre": {
                        m: 0,
                        p: "16px !important",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: "0.75rem",
                      },
                    }}
                  >
                    <Box>
                      {items.map((item, index) => (
                        <Box display="flex" justifyContent="space-between">
                          <Box
                            key={index}
                            display="flex"
                            justifyContent="space-between"
                          >
                            <IconButton
                              size={item.iconProps.size}
                              aria-label={item.title}
                              color="inherit"
                              sx={{
                                color: item.iconProps.color,
                                backgroundColor: item.iconProps.backgroundColor,
                                borderRadius: "50%",
                                padding: "15px",
                                margin: "20px",
                              }}
                            >
                              {item.icon}
                            </IconButton>
                            <CardHeader
                              titleTypographyProps={{
                                variant: "subtitle1",
                                color: "rgb(204,207,212)",
                                fontWeight: "600",
                              }}
                              title={item.title}
                            />
                          </Box>
                          <Box p={3}>
                            <IconButton
                              size={item.arrowProps.size}
                              aria-label="arrow"
                              color="inherit"
                              sx={{
                                color: item.arrowProps.color,
                                backgroundColor:
                                  item.arrowProps.backgroundColor,
                                borderRadius: "50%",
                                padding: "10px",
                                margin: "10%",
                              }}
                            >
                              <ArrowForwardIosIcon fontSize="xs" />
                            </IconButton>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} rowGap={2} columnGap={2}>
              <Grid container xs={12} sm={12} md={8} columnSpacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <LatestOrders />
                </Grid>
              </Grid>
              <Grid container xs={12} sm={12} md={4} columnSpacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <CustomersFeedback />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
