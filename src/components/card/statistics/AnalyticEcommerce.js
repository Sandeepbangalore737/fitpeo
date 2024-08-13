import PropTypes from "prop-types";
import { forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";

const headerSX = {
  p: 2.5,
  "& .MuiCardHeader-action": { m: "0px auto", alignSelf: "center" },
};

function MainCard(
  {
    border = true,
    boxShadow,
    children,
    content = true,
    contentSX = {},
    darkTitle,
    elevation,
    secondary,
    shadow,
    sx = {},
    title,
    count,
    iconColor,
    iconBgColor,
    textColor,
    percentage,
    icon,
    iconPercentage,
    ...others
  },
  ref
) {
  const theme = useTheme();
  boxShadow = theme.palette.mode === "dark" ? boxShadow || true : boxShadow;

  return (
    <Card
      elevation={elevation || 0}
      ref={ref}
      {...others}
      sx={{
        border: border ? "1px solid" : "none",
        borderRadius: 2,
        backgroundColor: "rgb(31, 32, 41)",
        borderColor:
          theme.palette.mode === "dark"
            ? theme.palette.divider
            : theme.palette.grey.A800,
        boxShadow:
          boxShadow && (!border || theme.palette.mode === "dark")
            ? shadow || theme.customShadows.z1
            : "inherit",
        ":hover": {
          boxShadow: boxShadow ? shadow || theme.customShadows.z1 : "inherit",
        },
        "& pre": {
          m: 0,
          p: "16px !important",
          fontFamily: theme.typography.fontFamily,
          fontSize: "0.75rem",
        },
        ...sx,
      }}
    >
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        sx={{
          color: iconColor,
          backgroundColor: iconBgColor,
          borderRadius: 4,
          padding: "6px",
          margin: "20px 10px 0px 20px",
        }}
      >
        {icon}
      </IconButton>
      <CardHeader
        sx={headerSX}
        titleTypographyProps={{
          variant: "subtitle1",
          mt: "-13px",
          color: "rgb(204,207,212)",
          fontWeight: "600",
        }}
        title={title}
        action={secondary}
      />
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography
          variant="h4"
          component="div"
          sx={{ ml: "6%", color: "rgb(255,255,255)", fontWeight: "900" }}
        >
          {count}
        </Typography>
        <Box display="flex" mr={2}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            sx={{
              color: textColor,
            }}
          >
            {iconPercentage}
          </IconButton>
          <Typography
            component="div"
            sx={{
              mr: "10%",
              color: textColor,
              fontWeight: "900",
              mt: 1.5,
              fontSize: "14px",
            }}
          >
            {percentage}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default forwardRef(MainCard);

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.bool,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  divider: PropTypes.bool,
  elevation: PropTypes.number,
  secondary: PropTypes.any,
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  modal: PropTypes.bool,
  others: PropTypes.any,
};
