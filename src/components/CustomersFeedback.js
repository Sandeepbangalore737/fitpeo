import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function CustomersFeedback() {
  const chats = [
    {
      id: 1,
      name: "Jenny Wilson",
      profilePic: "/Jenny_Wilson.jpeg",
      review:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
      rating: 4,
    },
    {
      id: 2,
      name: "Dianne Russel",
      profilePic: "/Dianne_Russel.jpeg",
      review:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
      rating: 5,
    },
    {
      id: 3,
      name: "Devon Lane",
      profilePic: "/Devon_Lane.jpeg",
      review: "Normally wings are wings but theirs are lean meaty and tender",
      rating: 4,
    },
  ];
  return (
    <div>
      <Card
        sx={{
          backgroundColor: "rgb(31, 32, 41)",
          color: "rgb(250,250,250)",
          pl: 3,
          mt: 1,
        }}
      >
        <Box my={2}>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "rgb(255,255,255)", fontWeight: "900", mb: 2 }}
          >
            Customer's Feedback
          </Typography>
          {chats.map((chat, index) => (
            <div key={chat.id}>
              <Box mr={2}>
                <IconButton
                  size="large"
                  aria-label={`show ${chat.rating} new mails`}
                  color="inherit"
                >
                  <Avatar
                    alt={chat.name}
                    src={chat.profilePic}
                    sx={{
                      width: 30,
                      height: 30,
                      objectFit: "cover",
                      fontSize: "small",
                    }}
                  />
                </IconButton>
                <Typography
                  component="div"
                  sx={{
                    mr: "10%",
                    fontWeight: "900",
                    fontSize: "14px",
                  }}
                >
                  {chat.name}
                </Typography>
                {[...Array(5)].map((_, i) =>
                  i < chat.rating ? (
                    <StarIcon key={i} sx={{ color: "rgb(248,222,42)" }} />
                  ) : (
                    <StarIcon key={i} sx={{ color: "rgb(255,255,255)" }} />
                  )
                )}
                <Typography color="rgb(155,156,163)" sx={{ fontSize: "13px" }}>
                  {chat.review}
                </Typography>
              </Box>
              {index < chats.length - 1 && (
                <Divider
                  sx={{
                    borderWidth: 0.1,
                    my: 1.5,
                    borderColor: "rgb(155,156,163)",
                    width: "97%",
                  }}
                />
              )}{" "}
            </div>
          ))}
        </Box>
      </Card>
    </div>
  );
}

export default CustomersFeedback;
