import React from "react";
import CardProduct from "./components/CardProduct";
import { Row, Col } from "antd";

function App() {
  const data = [
    {
      id: 1,
      title: "Notebook MSI Crosshair 16 HX AI D2XWGKG-022TH",
      description:
        "CPU Intel Core Ultra 9 275HX GPU NVIDIA GeForce RTX 5070 RAM 16 GB DDR5 6400 MHz DISPLAY 16.0 inch (2560x1600) 2.5K STORAGE 1TB SSD PCIe M.2 Gen 4 OS Windows 11 Home",
      url: "https://notebookspec.com/resize/648x486//storage/notebook/14164-1.png",
    },
    {
      id: 2,
      title: "Samsung - Galaxy S25 Ultra 256GB - Titanium Black",
      description:
        "Staying in the moment is easier than ever with the all-new Galaxy S25 Ultra. Its intelligent AI transforms into your own virtual assistant that evolves with you to work better for you. Let’s say you want to enjoy a night out with friends but don’t have time to plan. Just ask Galaxy S25 Ultra to invite your friends to the nearest bowling lounge tonight. Your phone will find the info and text it to them. You don’t need to slow down your speech or speak like a robot —just talk to your phone naturally, and it will understand. While you’re out rolling spares, Night Video brings out the details in every moment —even in low light —while Audio Eraser makes it easy to reduce distracting noises, like those pins crashing one lane over. Galaxy S25 Ultra also keeps up with your schedule and provides the weather forecast for your night, allowing you to stay a step ahead and adjust plans on the fly. With a phone as evolved as Galaxy S25 Ultra, you don’t have to sweat the small stuff —it’s handled intelligently.",
      url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6612/6612779_sd.jpg;maxHeight=1080;maxWidth=900?format=webp",
    },
    {
      id: 3,
      title: "Samsung - Galaxy S25+ 256GB - Navy (Verizon)",
      description:
        "Make life easier with an epic phone that really gets you. The intuitive Galaxy S25+ features the latest in AI to help make every day more effortless. Save time with a phone that feels almost like a real live personal assistant. Meeting friends for a night out? Ask your phone to search for the closest vegan restaurant and then text it to them. Galaxy S25+ handles multiple tasks with a single ask, freeing up time so you can focus on your look. Did you get to the restaurant early? Scroll through your feed on a display that enhances images on your screen, making all your favorite photos pop, with ProScaler. Better yet, rack up a few likes of your own with a stunning selfie captured with an improved camera that brings out the best in every face so your true self shines through. Rain expected on your way home? Luckily, your phone let you know before you headed out, keeping you a step ahead. Galaxy S25+ isn’t just an AI-enhanced phone —it’s a way to take some of the hassle out of your everyday.",
      url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6612/6612772_sd.jpg;maxHeight=1080;maxWidth=900?format=webp",
    },
    {
      id: 4,
      title: "Samsung - Galaxy S25 Ultra 256GB - Titanium Black",
      description:
        "Staying in the moment is easier than ever with the all-new Galaxy S25 Ultra. Its intelligent AI transforms into your own virtual assistant that evolves with you to work better for you. Let’s say you want to enjoy a night out with friends but don’t have time to plan. Just ask Galaxy S25 Ultra to invite your friends to the nearest bowling lounge tonight. Your phone will find the info and text it to them. You don’t need to slow down your speech or speak like a robot —just talk to your phone naturally, and it will understand. While you’re out rolling spares, Night Video brings out the details in every moment —even in low light —while Audio Eraser makes it easy to reduce distracting noises, like those pins crashing one lane over. Galaxy S25 Ultra also keeps up with your schedule and provides the weather forecast for your night, allowing you to stay a step ahead and adjust plans on the fly. With a phone as evolved as Galaxy S25 Ultra, you don’t have to sweat the small stuff —it’s handled intelligently.",
      url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6612/6612779_sd.jpg;maxHeight=1080;maxWidth=900?format=webp",
    },
  ];
  return (
    <Row>
      {data.map((item) => (
        <Col xs={24} sm={12} md={8} lg={6}>
          <CardProduct data={item} />
        </Col>
      ))}
    </Row>
  );
}

export default App;
