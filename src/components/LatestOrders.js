import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import dayjs from "dayjs";
import { Avatar, Stack, Typography } from "@mui/material";

// Status mapping object
const statusMap = {
  pending: { label: "Pending", color: "error" },
  delivered: { label: "Delivered", color: "success" },
  cancelled: { label: "Cancelled", color: "error" },
};

const sampleOrders = [
  {
    id: "15478256",
    customer: { name: "Wade Warren", avatar: "/th.jpeg" },
    amount: "$124.00",
    status: "delivered",
    createdAt: new Date("2024-08-01T10:30:00"),
  },
  {
    id: "48965786",
    customer: { name: "Jane Cooper", avatar: "/Jane_Cooper.jpeg" },
    amount: "$365.02",
    status: "delivered",
    createdAt: new Date("2024-08-03T14:45:00"),
  },
  {
    id: "78958215",
    customer: {
      name: "Guy Hawkins",
      avatar: "/Guy_Hawkins.jpeg",
    },
    amount: "$45.88",
    status: "cancelled",
    createdAt: new Date("2024-08-05T09:15:00"),
  },
  {
    id: "20965732",
    customer: { name: "Kristin Watson", avatar: "/Kristin_Watson.jpeg" },
    amount: "$65.00",
    status: "pending",
    createdAt: new Date("2024-08-07T11:00:00"),
  },
  {
    id: "95715620",
    customer: {
      name: "Cody Fisher",
      avatar: "/Cody_Fisher.jpeg",
    },
    amount: "$545.00",
    status: "delivered",
    createdAt: new Date("2024-08-09T16:25:00"),
  },
  {
    id: "78514568",
    customer: {
      name: "Savannah Nguyen",
      avatar: "/Savannah_Nguyen.jpeg",
    },
    amount: "$128.20",
    status: "delivered",
    createdAt: new Date("2024-08-09T16:25:00"),
  },
];

function LatestOrders({ orders = sampleOrders }) {
  return (
    <Card
      sx={{
        backgroundColor: "rgb(31, 32, 41)",
        color: "rgb(250,250,250)",
        p: 3,
        mt: 1,
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight="800" color="rgb(254,253,255)">
          Latest Orders
        </Typography>
      </Stack>
      <Divider />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ color: "rgb(255, 255, 255)", fontWeight: "700" }}
              >
                Customer
              </TableCell>
              <TableCell
                sx={{ color: "rgb(255, 255, 255)", fontWeight: "700" }}
              >
                Order No.
              </TableCell>
              <TableCell
                sx={{ color: "rgb(255, 255, 255)", fontWeight: "700" }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ color: "rgb(255, 255, 255)", fontWeight: "700" }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const { label, color } = statusMap[order.status] || {
                label: "Unknown",
                color: "default",
              };

              return (
                <TableRow hover key={order.id}>
                  <TableCell
                    sx={{
                      color: "rgb(255, 255, 255)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={order.customer.avatar}
                      alt={order.customer.name}
                      sx={{ marginRight: 2 }}
                    />
                    {order.customer.name}
                  </TableCell>{" "}
                  <TableCell
                    sx={{ color: "rgb(255, 255, 255)", fontWeight: "400" }}
                  >
                    {order.id}
                  </TableCell>
                  <TableCell
                    sx={{ color: "rgb(255, 255, 255)", fontWeight: "400" }}
                  >
                    {order.amount}
                  </TableCell>
                  <TableCell
                    sx={{ color: "rgb(35,170,133)", fontWeight: "400" }}
                  >
                    <Chip color={color} label={label} bgcolor="rgb(20,84,70)"size="small" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}

// Prop types for validation
LatestOrders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      customer: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      amount: PropTypes.number.isRequired,
      status: PropTypes.oneOf(["pending", "delivered", "cancelled"]).isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
    })
  ),
  sx: PropTypes.object,
};

export default LatestOrders;
