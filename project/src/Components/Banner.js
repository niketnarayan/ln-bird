import React, { useState } from "react";
import "./Banner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Productslider.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Productslider.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Tab, Tabs, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import kiranawala from "../Components/Assests/mr. Kirana logo.png";
import kiranawala1 from "../Components/Assests/1.png";


function Banner() {
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentIndex2, setCurrentIndex2] = useState(0);

  const [currentIndex3, setCurrentIndex3] = useState(0);

  const [currentIndex4, setCurrentIndex4] = useState(0);

  const [currentIndex5, setCurrentIndex5] = useState(0);

  // -------------------------------------------------------------------------------------------------------

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("otp");

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentIndex6, setCurrentIndex6] = useState(0);

  const [currentIndex7, setCurrentIndex7] = useState(0);

  // Sample Product Data Array
  const pproducts = [
    {
      title: "KELLOGGS CHOCOS 385 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:{kiranawala1},
        quantity: 1,
    },
    {
      title: "NISSIN CUP NOODLES GEKI HOT & SPICY KOREAN VEG 70 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1705469291669.webp",
        quantity: 1,
    },
    {
      title: "BAMBINO PREMIUM ALL SEASONS FUSILLI PASTA 400 G",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688109188935.webp",
        quantity: 1,
    },
    {
      title: "YIPPEE MAGIC MASALA NOODLES 60 G PK96",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1653452890738.webp",
        quantity: 1,
    },
    {
      title: "QUAKER OATS MEAL 1 KG",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691567_1.webp",
        quantity: 1,
    },
    {
      title: "MAGGI VEG ATTA SPINACH NOODLES 284 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1689834504733.webp",
        quantity: 1,
    },
    {
      title: "DEL MONTE PENNE RIGATE PASTA 500 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1717478191935.jpeg",
        quantity: 1,
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
        quantity: 1,
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
        quantity: 1,
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
        quantity: 1,
    },
  ];

  const pproducts1 = [
    {
      title: "KELLOGGS CHOCOS 385 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/104456709_1.webp",
        quantity: 1,
    },
    {
      title: "NISSIN CUP NOODLES GEKI HOT & SPICY KOREAN VEG 70 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1705469291669.webp",
        quantity: 1,
    },
    {
      title: "BAMBINO PREMIUM ALL SEASONS FUSILLI PASTA 400 G",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688109188935.webp",
        quantity: 1,
    },
    {
      title: "YIPPEE MAGIC MASALA NOODLES 60 G PK96",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1653452890738.webp",
        quantity: 1,
    },
    {
      title: "QUAKER OATS MEAL 1 KG",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691567_1.webp",
        quantity: 1,
    },
    {
      title: "MAGGI VEG ATTA SPINACH NOODLES 284 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1689834504733.webp",
        quantity: 1,
    },
    {
      title: "DEL MONTE PENNE RIGATE PASTA 500 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1717478191935.jpeg",
        quantity: 1,
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
        quantity: 1,
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
        quantity: 1,
    },
    {
      title: "MTR GULAB JAMUN MIX 2 (1+1) U 175 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686678_1.webp",
        quantity: 1,
    },
  ];

  // Group products into sets of four
  const productChunks6 = [];
  for (let i = 0; i < pproducts.length; i += 5) {
    productChunks6.push(pproducts.slice(i, i + 5));
  }

  const productChunks7 = [];
  for (let i = 0; i < pproducts1.length; i += 5) {
    productChunks7.push(pproducts1.slice(i, i + 5));
  }

  // Function to navigate to the next set of products
  const nextProductss = () => {
    if (currentIndex6 < productChunks6.length - 1) {
      setCurrentIndex6(currentIndex6 + 1);
    }
  };

  const nextProductss1 = () => {
    if (currentIndex7 < productChunks7.length - 1) {
      setCurrentIndex7(currentIndex7 + 1);
    }
  };

  // Function to navigate to the previous set of products
  const prevProductss = () => {
    if (currentIndex6 > 0) {
      setCurrentIndex6(currentIndex6 - 1);
    }
  };

  const prevProductss1 = () => {
    if (currentIndex7 > 0) {
      setCurrentIndex7(currentIndex7 - 1);
    }
  };

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {
    setShow1(true);
    console.log(cart);
  };
  const [cart, setcart] = useState([]);
  const [cartlength, setcartlength] = useState(0);
  const handleprouctadd = (product) => {
    setcart([...cart, product]);
    const quantity = cart.length + 1;
    setcartlength(quantity);
  };

  // ----------------------------------------------------------------------------------------------------------

  // Sample Product Data Array
  const products = [
    {
      title: "Vedaka Premium Unpolished Mixed Dal",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image: "https://m.media-amazon.com/images/I/91CI0QEuy8L._AC_UL320_.jpg",
      quantity: 1,
    },
    {
      title: "PANSARI RAGI ATTA - FINGER MILLET FLOUR 500 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image: "https://m.media-amazon.com/images/I/81dNXkl9ArL._AC_UL320_.jpg",
      quantity: 1,
    },
    {
      title: "AASHIRVAAD MP CHAKKI ATTA 5 KG",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688532751540.webp",
        quantity: 1,
    },
    {
      title: "RAJDHANI MAIDA 1 KG",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624432867064.webp",
        quantity: 1,
    },
    {
      title: "RAJDHANI SOOJI 1 KG",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691829_1.webp",
        quantity: 1,
    },
    {
      title: "PAN SOOJI 500 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1651820864946.webp",
        quantity: 1,
    },
    {
      title: "RAJDHANI CHAKKI ATTA (VFPL) 50 KG",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624879578088.webp",
        quantity: 1,
    },
    {
      title: "FORTUNE ATTA PP 10 KG",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686263_1.webp",
        quantity: 1,
    },
    {
      title: "FORTUNE ATTA PP 10 KG",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686263_1.webp",
        quantity: 1,
    },
    {
      title: "FORTUNE ATTA PP 10 KG",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686263_1.webp",
        quantity: 1,
    },
  ];

  const productss = [
    {
      title: "Vedaka Premium Unpolished Mixed Dal",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image: "https://m.media-amazon.com/images/I/91CI0QEuy8L._AC_UL320_.jpg",
      quantity: 1,
    },
    {
      title: "PANSARI RAGI ATTA - FINGER MILLET FLOUR 500 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image: "https://m.media-amazon.com/images/I/81dNXkl9ArL._AC_UL320_.jpg",
      quantity: 1,
    },
    {
      title: "AASHIRVAAD MP CHAKKI ATTA 5 KG",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688532751540.webp",
        quantity: 1,
    },
    {
      title: "RAJDHANI MAIDA 1 KG",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624432867064.webp",
        quantity: 1,
    },
    {
      title: "RAJDHANI SOOJI 1 KG",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103691829_1.webp",
        quantity: 1,
    },
    {
      title: "PAN SOOJI 500 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1651820864946.webp",
        quantity: 1,
    },
    {
      title: "RAJDHANI CHAKKI ATTA (VFPL) 50 KG",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624879578088.webp",
        quantity: 1,
    },
    {
      title: "FORTUNE ATTA PP 10 KG",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686263_1.webp",
        quantity: 1,
    },
    {
      title: "FORTUNE ATTA PP 10 KG",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686263_1.webp",
        quantity: 1,
    },
    {
      title: "FORTUNE ATTA PP 10 KG",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103686263_1.webp",
        quantity: 1,
    },
  ];

  const products1 = [
    {
      title: "FENA DETERGENT CAKE 70 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/104453053_2.webp",
        quantity: 1,
    },
    {
      title: "VANISH STAIN REMOVER LIQUID 400 ML",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1646894636660.webp",
        quantity: 1,
    },
    {
      title: "SURF EXCEL QUICK WASH DETERGENT WASHING POWDER 1 KG",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103678369_1.webp",
        quantity: 1,
    },
    {
      title: "FENA DETERGENT WASHING POWDER 500 G",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103668689_1.webp",
        quantity: 1,
    },
    {
      title: "MORELIGHT EXTRA POWER DETERGENT POWDER 4 KG",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1626348351818.webp",
        quantity: 1,
    },
    {
      title: "GODREJ EZEE LIQUID DETERGENT 500 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103678600_1.webp",
        quantity: 1,
    },
    {
      title: "REVIVE LIQUID 400 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1708495554262.webp",
        quantity: 1,
    },
    {
      title: "HENKO MATIC FRONT LOAD 2LT",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1680667959964.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp",
        quantity: 1,
    },
  ];

  const products11 = [
    {
      title: "FENA DETERGENT CAKE 70 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/104453053_2.webp",
        quantity: 1,
    },
    {
      title: "VANISH STAIN REMOVER LIQUID 400 ML",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1646894636660.webp",
        quantity: 1,
    },
    {
      title: "SURF EXCEL QUICK WASH DETERGENT WASHING POWDER 1 KG",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103678369_1.webp",
        quantity: 1,
    },
    {
      title: "FENA DETERGENT WASHING POWDER 500 G",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103668689_1.webp",
        quantity: 1,
    },
    {
      title: "MORELIGHT EXTRA POWER DETERGENT POWDER 4 KG",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1626348351818.webp",
        quantity: 1,
    },
    {
      title: "GODREJ EZEE LIQUID DETERGENT 500 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103678600_1.webp",
        quantity: 1,
    },
    {
      title: "REVIVE LIQUID 400 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1708495554262.webp",
        quantity: 1,
    },
    {
      title: "HENKO MATIC FRONT LOAD 2LT",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1680667959964.webp",
        quantity: 1,
    },
    {
      title: "HENKO MATIC FRONT LOAD 2LT",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1680667959964.webp",
        quantity: 1,
    },
    {
      title: "HENKO MATIC FRONT LOAD 2LT",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1680667959964.webp",
        quantity: 1,
    },
  ];

  const products2 = [
    {
      title: "DORITOS NACHO CHEESE 44 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1612952308545.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM FATAFAT BHEL 150 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673188739.webp",
        quantity: 1,
    },
    {
      title: "PITARA BIKANERI BHUJIA 900 G",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1712311257132.jpeg",
        quantity: 1,
    },
    {
      title: "HALDIRAM PANCHRATTAN 200 G",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673024056.webp",
        quantity: 1,
    },
    {
      title: "ACT II IPC GOLDEN SIZZLE 40 G",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103692193_1.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM KAJU MIXTURE 400 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673107961.webp",
        quantity: 1,
    },
    {
      title: "GOLDIEE MEAT/MUTTON MASALA SPECIAL 100 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103667167_1.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp",
        quantity: 1,
    },
  ];

  const products22 = [
    {
      title: "DORITOS NACHO CHEESE 44 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1612952308545.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM FATAFAT BHEL 150 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673188739.webp",
        quantity: 1,
    },
    {
      title: "PITARA BIKANERI BHUJIA 900 G",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1712311257132.jpeg",
        quantity: 1,
    },
    {
      title: "HALDIRAM PANCHRATTAN 200 G",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673024056.webp",
        quantity: 1,
    },
    {
      title: "ACT II IPC GOLDEN SIZZLE 40 G",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103692193_1.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM KAJU MIXTURE 400 G",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673107961.webp",
        quantity: 1,
    },
    {
      title: "GOLDIEE MEAT/MUTTON MASALA SPECIAL 100 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103667167_1.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE KASHMIRI MIRCH POWDER 8 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1610184896245.webp",
        quantity: 1,
    },
  ];

  const products3 = [
    {
      title: "LG HING 50 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103671704_1.webp",
        quantity: 1,
    },
    {
      title: "CATCH PERI PERI SPRINKLER 90 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1687248407662.webp",
        quantity: 1,
    },
    {
      title: "CATCH CHATPATA CHAT MASALA 100 G",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688108663864.webp",
        quantity: 1,
    },
    {
      title: "CATCH JALJEERA MASALA 100 G",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688108648256.webp",
        quantity: 1,
    },
    {
      title: "GOLDIEE TURMERIC POWDER POUCH 200 G",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1612427788992.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE SAUNF 7G PK10",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624618954925.webp",
        quantity: 1,
    },
    {
      title: "HERSHEYS KISSES MILK CHOCOLATE 108 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1638514177101.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM TAKA TAK MASALA 105 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673446065.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM TAKA TAK MASALA 105 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673446065.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM TAKA TAK MASALA 105 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673446065.webp",
        quantity: 1,
    },
  ];

  const products33 = [
    {
      title: "LG HING 50 G",
      price: 88.99,
      originalPrice: 100.88,
      discount: "15.83% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PROD_IMG/103671704_1.webp",
        quantity: 1,
    },
    {
      title: "CATCH PERI PERI SPRINKLER 90 G",
      price: 90.0,
      originalPrice: 110.0,
      discount: "10% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1687248407662.webp",
        quantity: 1,
    },
    {
      title: "CATCH CHATPATA CHAT MASALA 100 G",
      price: 78.0,
      originalPrice: 100.0,
      discount: "22% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688108663864.webp",
        quantity: 1,
    },
    {
      title: "CATCH JALJEERA MASALA 100 G",
      price: 95.0,
      originalPrice: 120.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1688108648256.webp",
        quantity: 1,
    },
    {
      title: "GOLDIEE TURMERIC POWDER POUCH 200 G",
      price: 85.0,
      originalPrice: 110.0,
      discount: "12% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1612427788992.webp",
        quantity: 1,
    },
    {
      title: "CHUK-DE SAUNF 7G PK10",
      price: 88.0,
      originalPrice: 100.0,
      discount: "15% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1624618954925.webp",
        quantity: 1,
    },
    {
      title: "HERSHEYS KISSES MILK CHOCOLATE 108 G",
      price: 92.0,
      originalPrice: 105.0,
      discount: "13% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1638514177101.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM TAKA TAK MASALA 105 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673446065.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM TAKA TAK MASALA 105 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673446065.webp",
        quantity: 1,
    },
    {
      title: "HALDIRAM TAKA TAK MASALA 105 G",
      price: 78.5,
      originalPrice: 99.0,
      discount: "20% OFF",
      image:
        "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/PRODUCT_1675673446065.webp",
        quantity: 1,
    },
  ];

  // Group products into sets of four
  const productChunks = [];
  for (let i = 0; i < products.length; i += 5) {
    productChunks.push(products.slice(i, i + 5));
  }

  const productChunkss = [];
  for (let i = 0; i < productss.length; i += 5) {
    productChunkss.push(productss.slice(i, i + 5));
  }

  const productChunks1 = [];
  for (let i = 0; i < products1.length; i += 5) {
    productChunks1.push(products1.slice(i, i + 5));
  }

  const productChunks11 = [];
  for (let i = 0; i < products11.length; i += 5) {
    productChunks11.push(products11.slice(i, i + 5));
  }

  const productChunks2 = [];
  for (let i = 0; i < products2.length; i += 5) {
    productChunks2.push(products2.slice(i, i + 5));
  }

  const productChunks22 = [];
  for (let i = 0; i < products22.length; i += 5) {
    productChunks22.push(products22.slice(i, i + 5));
  }

  const productChunks3 = [];
  for (let i = 0; i < products3.length; i += 5) {
    productChunks3.push(products3.slice(i, i + 5));
  }

  const productChunks33 = [];
  for (let i = 0; i < products33.length; i += 5) {
    productChunks33.push(products33.slice(i, i + 5));
  }
  // Function to navigate to the next set of products
  const nextProducts = () => {
    if (currentIndex < productChunks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const nextProducts1 = () => {
    if (currentIndex2 < productChunkss.length - 1) {
      setCurrentIndex2(currentIndex2 + 1);
    }
  };

  const nextProducts2 = () => {
    if (currentIndex3 < productChunks11.length - 1) {
      setCurrentIndex3(currentIndex3 + 1);
    }
  };

  const nextProducts3 = () => {
    if (currentIndex4 < productChunks22.length - 1) {
      setCurrentIndex4(currentIndex4 + 1);
    }
  };

  const nextProducts4 = () => {
    if (currentIndex5 < productChunks33.length - 1) {
      setCurrentIndex5(currentIndex5 + 1);
    }
  };

  // Function to navigate to the previous set of products
  const prevProducts = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const prevProducts1 = () => {
    if (currentIndex2 > 0) {
      setCurrentIndex2(currentIndex2 - 1);
    }
  };

  const prevProducts2 = () => {
    if (currentIndex3 > 0) {
      setCurrentIndex3(currentIndex3 - 1);
    }
  };

  const prevProducts3 = () => {
    if (currentIndex4 > 0) {
      setCurrentIndex4(currentIndex4 - 1);
    }
  };

  const prevProducts4 = () => {
    if (currentIndex5 > 0) {
      setCurrentIndex5(currentIndex5 - 1);
    }
  };


  const [cartItems, setCartItems] = useState(pproducts);

  // Function to increment quantity
  const incrementQuantity = (index) => {
    setcart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity + 1 } // Increment quantity for the specific item
          : item // Leave other items unchanged
      )
    );
  };

  const decrementQuantity = (index) => {
    setcart((prevCart) =>
      prevCart
        .map((item, i) =>
          i === index && item.quantity >= 1
            ? { ...item, quantity: item.quantity - 1 } // Decrease quantity
            : item
        )
        .filter((item, i) => !(i === index && item.quantity === 0)) // Remove item if quantity reaches 0
    );
  };
  
  

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
 
  

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => {setShow3(true);handleClose1()}





  return (
    <>
      {/* slider banner---------------------------------------------------------------- -----------------------*/}

      {/* slider banner end-------------------------------------------------------------- ------------------------------*/}

      {/*  offer section image start----------------------------------------------------------------------------  */}

      <div className="container" style={{ padding: "2rem", marginTop: "3rem" }}>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951794578.jpeg"
              alt="....."
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-6">
            <img
              src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951795181.jpeg"
              alt="...."
              className="img-fluid"
            ></img>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img
              src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951795840.jpeg"
              alt="...."
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-6">
            <img
              src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1727951796363.jpeg"
              alt="..."
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>

      {/* slider merge start--------------------------------------------------------------------------------- */}

      <div
        style={{
          position: "fixed",
          top: "0",
          zIndex: "1000",
          left: "0",
          right: "0",
        }}
      >
        <div>
          {/* Navbar */}
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: "#3D215D" }}
          >
            <div className="container-lg">
              {/* Logo */}
              <Link
  className="navbar-brand text-white d-flex align-items-center"
  to="/"
>
  <img
    src={kiranawala}
    alt="Logo"
    style={{ width: "auto", height: "50px" }}
  />
</Link>

              {/* Toggler for Mobile */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ borderColor: "white", backgroundColor: "white" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {/* Search Bar */}
                <div
                  className="input-group mx-auto"
                  style={{
                    maxWidth: "400px",
                    flexGrow: 1,
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search your products here"
                    aria-label="Search"
                  />
                  <button className="btn btn-light" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>

                {/* Right-side Buttons */}
                <div className="d-flex align-items-center gap-3">
                  <Button
                    onClick={() => handleShow1(true)}
                    className="btn hover-light-white"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid white",
                    }}
                  >
                    <i className="fa-solid fa-cart-shopping"></i> Cart{" "}
                    <sup>{cartlength}</sup>
                  </Button>

                  <button
                    className="btn btn-light d-flex align-items-center"
                    onClick={handleShow}
                  >
                    <i
                      className="bi bi-box-arrow-in-right"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ display: "flex" }}>
                <img
                  src={kiranawala}
                  alt="LOTS Wholesale Solutions"
                  style={{ width: "100px", height: "100px" }}
                />
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h5 style={{ fontWeight: "bold" }}>
                    Login for More Convenient Shopping
                  </h5>
                  <p>
                    And receive special privileges only for Kirana Wholesale
                    Solutions Members
                  </p>
                </div>
              </div>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Membership Id or Mobile Number
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Membership Id or Mobile Number"
                  style={{
                    marginBottom: "15px",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                />
              </Form.Group>
              <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                justify
                style={{
                  borderBottom: "2px solid #D71920",
                }}
              >
                <Tab
                  eventKey="password"
                  title={
                    <span
                      style={{
                        color: key === "password" ? "#D71920" : "black",
                      }}
                    >
                      Password login
                    </span>
                  }
                >
                  <Form.Group>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      style={{
                        marginBottom: "15px",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </Form.Group>
                </Tab>
                <Tab
                  eventKey="otp"
                  title={
                    <span
                      style={{ color: key === "otp" ? "#D71920" : "black" }}
                    >
                      OTP code login
                    </span>
                  }
                >
                  <Form.Group>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      OTP Code
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP code"
                      style={{
                        marginBottom: "15px",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </Form.Group>
                </Tab>
              </Tabs>
              <div className="d-flex justify-content-between align-items-center">
                <Form.Check
                  type="checkbox"
                  label="Remember login"
                  style={{ fontWeight: "bold" }}
                />
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#D71920" }}
                >
                  Forgot password?
                </a>
              </div>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#3D215D",
                  color: "white",
                  marginTop: "15px",
                  padding: "10px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
            </Modal.Body>
            <Modal.Footer
              style={{
                backgroundColor: "#3D215D",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="">
                <Button
                  variant="link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Activate Your Membership
                </Button>
                <div>
                  <Button
                    variant="link"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                      marginLeft: "25px",
                    }}
                  >
                    Generate Password
                  </Button>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Categories Dropdown */}
        <div
          className="bg-light p-2"
          style={{ position: "fixed", zIndex: "1000", right: "0", left: "0" }}
        >
          <div className="container-lg d-flex justify-content-between align-items-center">
            <DropdownButton
              id="dropdown-basic-button"
              title="Categories"
              variant="light"
              onClick={toggleDropdown}
            >
              <Dropdown.Item as={Link} to="/fruits">
                <img
                  src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1629264486507.jpeg"
                  style={{
                    width: "25px",
                    height: "30px",
                    border: "2px solid white",
                  }}
                ></img>
                Foodgain & Oil
              </Dropdown.Item>
              <div
                style={{
                  backgroundColor: "black",
                  boxShadow: "0 0 0 0.1px black",
                }}
              ></div>
              <Dropdown.Item as={Link} to="/chicken">
                <img
                  src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1658219469374.jpeg"
                  style={{
                    width: "25px",
                    height: "30px",
                    border: "2px solid white",
                  }}
                ></img>
                Home Care
              </Dropdown.Item>
              <div
                style={{
                  backgroundColor: "black",
                  boxShadow: "0 0 0 0.1px black",
                }}
              ></div>
              <Dropdown.Item as={Link} to="/dairy">
                <img
                  src="https://thumbs.dreamstime.com/b/mixed-dry-fruits-25481129.jpg?w=768"
                  style={{
                    width: "25px",
                    height: "30px",
                    border: "2px solid white",
                  }}
                ></img>
                Dry Fruits
              </Dropdown.Item>
              <div
                style={{
                  backgroundColor: "black",
                  boxShadow: "0 0 0 0.1px black",
                }}
              ></div>
              <Dropdown.Item as={Link} to="/beverage">
                <img
                  src="https://thumbs.dreamstime.com/b/cans-beverages-19492376.jpg?w=768"
                  style={{
                    width: "25px",
                    height: "30px",
                    border: "2px solid white",
                  }}
                ></img>
                Beverage
              </Dropdown.Item>
              <div
                style={{
                  backgroundColor: "black",
                  boxShadow: "0 0 0 0.1px black",
                }}
              ></div>
              <Dropdown.Item as={Link} to="/bread">
                <img
                  src="https://media.istockphoto.com/id/458990173/photo/food-drive-collection.jpg?s=612x612&w=0&k=20&c=lyxmqez8_GFBYg1lHshyHCou2KpWPNsXiHJqOuP2DI8="
                  style={{
                    width: "25px",
                    height: "30px",
                    border: "2px solid white",
                  }}
                ></img>
                Branded Food
              </Dropdown.Item>
              <div
                style={{
                  backgroundColor: "black",
                  boxShadow: "0 0 0 0.1px black",
                }}
              ></div>
              <Dropdown.Item as={Link} to="/frozen">
                <img
                  src="https://www.eatright.org/-/media/images/eatright-articles/eatright-article-feature-images/frozenfoodsconveninentandnutritious_600x450.jpg?as=0&w=967&rev=f23a06f8fafc47bc8c4bcd77e0fd18c9&hash=3C7783EBD220341CB893DE8477649F3A"
                  style={{
                    width: "25px",
                    height: "30px",
                    border: "2px solid white",
                  }}
                ></img>
                Frozen
              </Dropdown.Item>
              <div
                style={{
                  backgroundColor: "black",
                  boxShadow: "0 0 0 0.1px black",
                }}
              ></div>
              <Dropdown.Item as={Link} to="/snacks">
                <img
                  src="https://www.gortsa.com/storage/category/28/3ZjIecCwHcn1K1hXb5B4KKIHUAiV1qqYM73LTA2s.jpeg"
                  style={{
                    width: "25px",
                    height: "30px",
                    border: "2px solid white",
                  }}
                ></img>
                Biscuits & Snacks
              </Dropdown.Item>
              <div
                style={{
                  backgroundColor: "black",
                  boxShadow: "0 0 0 0.1px black",
                }}
              ></div>
              <Dropdown.Item as={Link} to="/grocery">
                <img
                  src="https://www.shutterstock.com/image-photo/jakarta-indonesia-december-11-2023-260nw-2412796699.jpg"
                  style={{
                    width: "25px",
                    height: "30px",
                    border: "2px solid white",
                  }}
                ></img>
                Personal Care
              </Dropdown.Item>
            </DropdownButton>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "55rem",
              }}
            >
              <i className="fa-solid fa-tag" style={{ color: "#3D215D" }}></i>{" "}
              Wholesale
            </a>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------- */}
      <div
        className="container position-relative"
        style={{ marginTop: "3rem" }}
      >
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Dry Fruits{" "}
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex6 === 0 ? 0.5 : 1,
                }}
                onClick={prevProductss}
                disabled={currentIndex6 === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity:
                    currentIndex6 === productChunks6.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProductss}
                disabled={currentIndex6 === productChunks6.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
@keyframes bounce {
0% {
transform: translateY(0);
}
100% {
transform: translateY(-5px);
}
}
`}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunks6[currentIndex6].map((product, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={product.image}
                  className="card-img-top "
                  alt={product.title}
                  style={{
                    height: "130px",
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {product.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {product.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        onClick={() => handleprouctadd(product)}
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------- */}

      {/* second slider-------------------------------------------------------------------------------------- */}

      <div className="container position-relative">
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Maggie & Pasta{" "}
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex7 === 0 ? 0.5 : 1,
                }}
                onClick={prevProductss1}
                disabled={currentIndex7 === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity:
                    currentIndex7 === productChunks7.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProductss1}
                disabled={currentIndex7 === productChunks7.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
@keyframes bounce {
0% {
transform: translateY(0);
}
100% {
transform: translateY(-5px);
}
}
`}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunks7[currentIndex7].map((product1, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={product1.image}
                  className="card-img-top "
                  alt={product1.title}
                  style={{
                    height: "120px",
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {product1.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {product1.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        onClick={() => handleprouctadd(product1)}
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
          <Modal.Title>
  <div className="modal-title">
    <div>
      <img 
        className="img-fluid" 
        src={kiranawala} 
        alt="Product" 
      />
    </div>
    <span>Product Details</span>
  </div>
</Modal.Title>

          </Modal.Header>
          <Modal.Body>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                 <img src={item.image} alt={item.title} />
          <div className="cart-item-info">
            <div className="cart-item-title">{item.title}</div>
            <div className="cart-item-price">₹{(item.price * item.quantity).toFixed(2)}</div>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => decrementQuantity(index)}>-</button>
            <span className="quantity">{item.quantity}</span>
            <button onClick={() => incrementQuantity(index)}>+</button>
          </div>
              </div>
              
            ))}
                   <div className="cart-total">
  <h3>
    Total Price: <span>₹{calculateTotalPrice().toFixed(2)}</span>
  </h3>
</div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button  variant="primary" onClick={handleShow3}>
              CheckOut
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* slider merge end---------------------------------------------------------------------------- */}

      {/* ------------------------fruits banner------------------------------------------------------- */}
      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="col">
            <img
              src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1732011062871.jpeg"
              alt="..."
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>

      {/* -----------------------------fruits banner end---------------------------------------------- */}

      {/* 1 slider----------------------------------------------------------------------------------------------- */}

      <div
        className="container position-relative"
        style={{ marginTop: "3rem" }}
      >
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Basic Groceries
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex === 0 ? 0.5 : 1,
                }}
                onClick={prevProducts}
                disabled={currentIndex === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex === productChunks.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProducts}
                disabled={currentIndex === productChunks.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunks[currentIndex].map((product, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={product.image}
                  className="card-img-top "
                  alt={product.title}
                  style={{
                    height: "120px",
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {product.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {product.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        onClick={() => handleprouctadd(product)}
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*1 slider second--------------------------------------------------------------------------------------  */}

      <div className="container position-relative">
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Staples
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex2 === 0 ? 0.5 : 1,
                }}
                onClick={prevProducts1}
                disabled={currentIndex2 === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity:
                    currentIndex2 === productChunkss.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProducts1}
                disabled={nextProducts1 === productChunkss.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunkss[currentIndex2].map((products, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={products.image}
                  className="card-img-top "
                  alt={products.title}
                  style={{
                    height: "120px",
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {products.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {products.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        onClick={() => handleprouctadd(products)}
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1 slider second-------------------------------------------------------------------------------------- */}

      {/* price range banner end---------------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------------------- */}
      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="col">
            <img
              src="https://media.starquik.com/bannerslider/s/t/starquik_fl_web_halfprice004_1400x400.jpg"
              alt="..."
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------------------- */}
      <div
        className="container position-relative"
        style={{ marginTop: "3rem" }}
      >
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Detergents
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex === 0 ? 0.5 : 1,
                }}
                onClick={prevProducts}
                disabled={currentIndex === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex === productChunks.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProducts}
                disabled={currentIndex === productChunks.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunks1[currentIndex].map((product1, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={product1.image}
                  className="card-img-top "
                  alt={product1.title}
                  style={{
                    height: "120px",
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {product1.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {product1.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        onClick={() => handleprouctadd(product1)}
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2 slider  second------------------------------------------------------------------------------------- */}

      <div className="container position-relative">
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Wash Essentials
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex === 0 ? 0.5 : 1,
                }}
                onClick={prevProducts2}
                disabled={currentIndex3 === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity:
                    currentIndex3 === productChunks11.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProducts2}
                disabled={currentIndex3 === productChunks11.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunks11[currentIndex3].map((product11, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={product11.image}
                  className="card-img-top "
                  alt={product11.title}
                  style={{
                    height: "120px",
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {product11.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {product11.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        onClick={() => handleprouctadd(product11)}
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* slider2 second end -------------------------------------------------------------------------------*/}

      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="col">
            <img
              src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1713416531830.jpeg"
              alt="..."
              className="img-fluid"
            ></img>
          </div>

          {/* 3 slider------------------------------------------------------------------------------------------ */}

          <div
            className="container position-relative"
            style={{ marginTop: "3rem" }}
          >
            {/* Left Arrow */}

            <div className="row">
              <div
                className="col"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  // padding: '10px 20px',
                }}
              >
                {/* Cereals Title and View All Button */}
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginLeft: "40px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#858585",
                    }}
                  >
                    Biscuits & Cookies{" "}
                  </span>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      fontSize: "14px",
                      color: "858585",
                    }}
                  >
                    View All
                  </button>
                </div>

                {/* Arrow Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Left Arrow Button */}
                  <button
                    className="btn"
                    style={{
                      height: "25px",
                      width: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                      border: "none",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      backdropFilter: "blur(10px)",
                      transition:
                        "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                      color: "#fff",
                      cursor: "pointer",
                      opacity: currentIndex === 0 ? 0.5 : 1,
                    }}
                    onClick={prevProducts}
                    disabled={currentIndex === 0}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 24px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0, 0, 0, 0.2)";
                    }}
                  >
                    <i
                      className="bi bi-chevron-left"
                      style={{
                        fontSize: "15px",
                        animation: "bounce 1s infinite alternate",
                        color: "#fff",
                      }}
                    ></i>
                  </button>

                  {/* Right Arrow Button */}
                  <button
                    className="btn"
                    style={{
                      height: "25px",
                      width: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                      border: "none",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      backdropFilter: "blur(10px)",
                      transition:
                        "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                      color: "#fff",
                      cursor: "pointer",
                      opacity:
                        currentIndex === productChunks.length - 1 ? 0.5 : 1,
                    }}
                    onClick={nextProducts}
                    disabled={currentIndex === productChunks.length - 1}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 24px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0, 0, 0, 0.2)";
                    }}
                  >
                    <i
                      className="bi bi-chevron-right"
                      style={{
                        fontSize: "15px",
                        animation: "bounce 1s infinite alternate",
                        color: "#fff",
                      }}
                    ></i>
                  </button>
                </div>

                {/* Bouncing Icon Animation */}
                <style>
                  {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
                </style>
              </div>
            </div>

            {/* Products Grid */}
            <div className="row">
              {productChunks2[currentIndex].map((product2, idx) => (
                <div
                  className="col-md-2 mb-3"
                  key={idx}
                  style={{ marginLeft: "30px" }}
                >
                  <div
                    className="card"
                    style={{ width: "200px", height: "100%" }}
                  >
                    <img
                      src={product2.image}
                      className="card-img-top "
                      alt={product2.title}
                      style={{
                        height: "120px",
                        width: "100%",
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ fontSize: "13px", height: "37px" }}
                      >
                        {product2.title}
                      </h5>

                      {/* Slab Pricing Section */}
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                          marginTop: "5px",
                        }}
                      >
                        <img
                          src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                          alt="..."
                          style={{ width: "20px" }}
                        />
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "13px",
                          }}
                        >
                          Slab Price
                        </span>

                        <div
                          style={{
                            backgroundColor: "red",
                            width: "4.5rem",
                            height: "1px",
                          }}
                        ></div>
                      </div>

                      <div
                        className=""
                        style={{
                          display: "flex",
                          marginTop: "5px",
                          gap: "10px",
                        }}
                      >
                        <div className="" style={{}}>
                          <p
                            className="d-flex"
                            style={{
                              fontSize: "14px",
                              height: "fit-content",
                              backgroundColor: "lightgray",
                            }}
                          >
                            {" "}
                            1-2 pc
                          </p>
                        </div>
                        <div style={{ fontSize: "14px" }}>
                          ₹ {product2.price}
                        </div>
                        <span style={{ color: "green", fontSize: "14px" }}>
                          100% OFF
                        </span>
                      </div>

                      {/* Quantity and Add to Cart Section */}
                      <div className="" style={{ marginTop: "10px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "red",
                            height: "40px",
                            borderRadius: "5px",
                            // width: "10rem",
                          }}
                        >
                          <button
                            onClick={() => handleprouctadd(product2)}
                            className="btn"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              border: "none",
                              background: "transparent",
                              backgroundColor: "#3D215D",
                            }}
                          >
                            <i
                              className="bi bi-cart-fill"
                              style={{
                                fontSize: "22px",
                                color: "white",
                                marginRight: "5px",
                              }}
                            ></i>
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              Add to Cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------------ */}

          {/* 3 slider second----------------------------------------------------------------------------------- */}

          <div className="container position-relative">
            {/* Left Arrow */}

            <div className="row">
              <div
                className="col"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  // padding: '10px 20px',
                }}
              >
                {/* Cereals Title and View All Button */}
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginLeft: "40px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#858585",
                    }}
                  >
                    Mixture{" "}
                  </span>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      fontSize: "14px",
                      color: "858585",
                    }}
                  >
                    View All
                  </button>
                </div>

                {/* Arrow Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Left Arrow Button */}
                  <button
                    className="btn"
                    style={{
                      height: "25px",
                      width: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                      border: "none",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      backdropFilter: "blur(10px)",
                      transition:
                        "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                      color: "#fff",
                      cursor: "pointer",
                      opacity: currentIndex4 === 0 ? 0.5 : 1,
                    }}
                    onClick={prevProducts3}
                    disabled={currentIndex4 === 0}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 24px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0, 0, 0, 0.2)";
                    }}
                  >
                    <i
                      className="bi bi-chevron-left"
                      style={{
                        fontSize: "15px",
                        animation: "bounce 1s infinite alternate",
                        color: "#fff",
                      }}
                    ></i>
                  </button>

                  {/* Right Arrow Button */}
                  <button
                    className="btn"
                    style={{
                      height: "25px",
                      width: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                      border: "none",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      backdropFilter: "blur(10px)",
                      transition:
                        "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                      color: "#fff",
                      cursor: "pointer",
                      opacity:
                        currentIndex4 === productChunks22.length - 1 ? 0.5 : 1,
                    }}
                    onClick={nextProducts3}
                    disabled={currentIndex4 === productChunks22.length - 1}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 24px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0, 0, 0, 0.2)";
                    }}
                  >
                    <i
                      className="bi bi-chevron-right"
                      style={{
                        fontSize: "15px",
                        animation: "bounce 1s infinite alternate",
                        color: "#fff",
                      }}
                    ></i>
                  </button>
                </div>

                {/* Bouncing Icon Animation */}
                <style>
                  {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
                </style>
              </div>
            </div>

            {/* Products Grid */}
            <div className="row">
              {productChunks22[currentIndex4].map((product22, idx) => (
                <div
                  className="col-md-2 mb-3"
                  key={idx}
                  style={{ marginLeft: "30px" }}
                >
                  <div
                    className="card"
                    style={{ width: "200px", height: "100%" }}
                  >
                    <img
                      src={product22.image}
                      className="card-img-top "
                      alt={product22.title}
                      style={{
                        height: "120px",
                        width: "100%",
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ fontSize: "13px", height: "37px" }}
                      >
                        {product22.title}
                      </h5>

                      {/* Slab Pricing Section */}
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                          marginTop: "5px",
                        }}
                      >
                        <img
                          src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                          alt="..."
                          style={{ width: "20px" }}
                        />
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "13px",
                          }}
                        >
                          Slab Price
                        </span>

                        <div
                          style={{
                            backgroundColor: "red",
                            width: "4.5rem",
                            height: "1px",
                          }}
                        ></div>
                      </div>

                      <div
                        className=""
                        style={{
                          display: "flex",
                          marginTop: "5px",
                          gap: "10px",
                        }}
                      >
                        <div className="" style={{}}>
                          <p
                            className="d-flex"
                            style={{
                              fontSize: "14px",
                              height: "fit-content",
                              backgroundColor: "lightgray",
                            }}
                          >
                            {" "}
                            1-2 pc
                          </p>
                        </div>
                        <div style={{ fontSize: "14px" }}>
                          ₹ {product22.price}
                        </div>
                        <span style={{ color: "green", fontSize: "14px" }}>
                          100% OFF
                        </span>
                      </div>

                      {/* Quantity and Add to Cart Section */}
                      <div className="" style={{ marginTop: "10px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "red",
                            height: "40px",
                            borderRadius: "5px",
                            // width: "10rem",
                          }}
                        >
                          <button
                            onClick={() => handleprouctadd(product22)}
                            className="btn"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              border: "none",
                              background: "transparent",
                              backgroundColor: "#3D215D",
                            }}
                          >
                            <i
                              className="bi bi-cart-fill"
                              style={{
                                fontSize: "22px",
                                color: "white",
                                marginRight: "5px",
                              }}
                            ></i>
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              Add to Cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 slider second end------------------------------------------------------------------------------- */}
        </div>
      </div>

      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="col">
            <img
              src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1730090840815.jpeg"
              alt="..."
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>

      {/* 4 slider------------------------------------------------------------------------------------------------- */}

      <div
        className="container position-relative"
        style={{ marginTop: "3rem" }}
      >
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Masala{" "}
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex === 0 ? 0.5 : 1,
                }}
                onClick={prevProducts}
                disabled={currentIndex === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex === productChunks.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProducts}
                disabled={currentIndex === productChunks.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunks3[currentIndex].map((product3, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={product3.image}
                  className="card-img-top "
                  alt={product3.title}
                  style={{
                    height: "120px",
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {product3.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {product3.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        onClick={() => handleprouctadd(product3)}
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* 4 slider second ------------------------------------------------------------------------------------- */}

      <div className="container position-relative">
        {/* Left Arrow */}

        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              // padding: '10px 20px',
            }}
          >
            {/* Cereals Title and View All Button */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#858585",
                }}
              >
                Spice Mixes{" "}
              </span>
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "14px",
                  color: "858585",
                }}
              >
                View All
              </button>
            </div>

            {/* Arrow Buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity: currentIndex5 === 0 ? 0.5 : 1,
                }}
                onClick={prevProducts4}
                disabled={currentIndex5 === 0}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-left"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>

              {/* Right Arrow Button */}
              <button
                className="btn"
                style={{
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
                  border: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s, opacity 0.2s",
                  color: "#fff",
                  cursor: "pointer",
                  opacity:
                    currentIndex5 === productChunks33.length - 1 ? 0.5 : 1,
                }}
                onClick={nextProducts4}
                disabled={currentIndex5 === productChunks33.length - 1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
              >
                <i
                  className="bi bi-chevron-right"
                  style={{
                    fontSize: "15px",
                    animation: "bounce 1s infinite alternate",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>

            {/* Bouncing Icon Animation */}
            <style>
              {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  `}
            </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productChunks33[currentIndex5].map((product33, idx) => (
            <div
              className="col-md-2 mb-3"
              key={idx}
              style={{ marginLeft: "30px" }}
            >
              <div className="card" style={{ width: "200px", height: "100%" }}>
                <img
                  src={product33.image}
                  className="card-img-top "
                  alt={product33.title}
                  style={{
                    height: "120px",
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "13px", height: "37px" }}
                  >
                    {product33.title}
                  </h5>

                  {/* Slab Pricing Section */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://www.lotswholesale.com/vendor/image/slab_pricing_flag.png"
                      alt="..."
                      style={{ width: "20px" }}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Slab Price
                    </span>

                    <div
                      style={{
                        backgroundColor: "red",
                        width: "4.5rem",
                        height: "1px",
                      }}
                    ></div>
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px", gap: "10px" }}
                  >
                    <div className="" style={{}}>
                      <p
                        className="d-flex"
                        style={{
                          fontSize: "14px",
                          height: "fit-content",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {" "}
                        1-2 pc
                      </p>
                    </div>
                    <div style={{ fontSize: "14px" }}>₹ {product33.price}</div>
                    <span style={{ color: "green", fontSize: "14px" }}>
                      100% OFF
                    </span>
                  </div>

                  {/* Quantity and Add to Cart Section */}
                  <div className="" style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        height: "40px",
                        borderRadius: "5px",
                        // width: "10rem",
                      }}
                    >
                      <button
                        onClick={() => handleprouctadd(product33)}
                        className="btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          backgroundColor: "#3D215D",
                        }}
                      >
                        <i
                          className="bi bi-cart-fill"
                          style={{
                            fontSize: "22px",
                            color: "white",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 slider second second--------------------------------------------------------------------------------*/}

      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="col">
            <img
              src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1729488319339.png"
              alt="..."
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="col">
            <img
              src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/cms_1724841840561.jpeg"
              alt="..."
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------- */}
      <Modal
  show={show3}
  onHide={() => setShow3(false)}
  dialogClassName="modal-90w"
  aria-labelledby="example-custom-modal-styling-title"
>
  <Modal.Header closeButton>
    <Modal.Title id="example-custom-modal-styling-title">
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <div>
          <img
            src={kiranawala}
            alt="Kiranawala"
            style={{ height: "40px", width: "auto" }}
          />
        </div>
        <span style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
          Payment
        </span>
      </div>
    </Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <h5>Select Your Payment Method</h5>

    {/* Payment Options */}
    <div className="row">
      <div className="col-md-4">
        <div className="paypal-card" style={{ cursor: "pointer" }}>
          <img
            src="https://images.ctfassets.net/y6oq7udscnj8/7pGYJSsSu8IjvuscnxPcng/ae9dc800b649640406b5bfa1ae9b02d6/PayPal.png?w=592&h=368&q=50&fm=png"
            alt="PayPal"
            className="paypal-card-img img-fluid" style={{height:"5rem",width:"10rem"}}
          />
          <div className="paypal-card-body">
            <h6 className="paypal-card-title">PayPal</h6>
            <p className="paypal-card-description" style={{fontSize:"15px"}}>Pay securely with your PayPal account.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="googlepay-card" style={{ cursor: "pointer" }}>
          <img
            src="https://lh3.googleusercontent.com/CBDhGDth7rqSnLcRPjOdfw_HwgKS8Gu-KMIJKQQIXym3J32lqSrrBFTFRjIbKcFR7LNli8O-ChWEzL_Jz94G64jayZIgv5C2Bq3G"
            alt="Google Pay"
            className="googlepay-card-img img-fluid" style={{height:"5rem",width:"10rem"}}
          />
          <div className="googlepay-card-body">
            <h6 className="googlepay-card-title">Google Pay</h6>
            <p className="googlepay-card-description"style={{fontSize:"15px"}}>Pay easily with Google Pay.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="creditcard-card" style={{ cursor: "pointer" }}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/384/393/small_2x/credit-card-clipart-design-illustration-free-png.png"
            alt="Credit Card"
            className="creditcard-card-img img-fluid" style={{height:"5rem",width:"10rem"}}
          />
          <div className="creditcard-card-body">
            <h6 className="creditcard-card-title">Credit Card</h6>
            <p className="creditcard-card-description"style={{fontSize:"15px"}}>Use your credit card for payment.</p>
          </div>
        </div>
      </div>
    </div>

    <h3>
    Total Price: <span>₹{calculateTotalPrice().toFixed(2)}</span>
  </h3>


    {/* Optionally add more payment methods */}
    <div className="mt-4 text-center">
      <button className="btn btn-success btn-lg payment-btn">
        Proceed to Payment
      </button>
    </div>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShow3(false)}>
      Close
    </Button>
    {/* <Button variant="primary" onClick={handleShow3}>
      Save Changes
    </Button> */}
  </Modal.Footer>
</Modal>


    

    </>
  );
}

export default Banner;
