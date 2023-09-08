import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import ItemsInfo from "../../components/PopularItems/info";

interface CartItem {
  id: number;
  imgSrc: string;
  name: string;
  location: string;
  price: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/cart").then(({ data }) => {
      setCart(data);
    });
  }, []);

  console.log(cart);
  function calculatePrice() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  }
  return (
    <Stack>
      <Header />
      <Banner title="Cart" subtitle="Order your items in cart" />
      <Container sx={{ py: 10 }}>
        <Grid container columnGap={{ sm: 4, md: 0 }} rowGap={5}>
          {cart.map((item: any) => {
            return (
              <Grid key={item.id} item md={4}>
                <ItemsInfo
                  id={item.id}
                  isCart
                  imgSrc={item.img}
                  name={item.name}
                  location={item.location}
                  price={item.price}
                />
              </Grid>
            );
          })}
        </Grid>
            {cart.length>0 &&
        <Stack py={10} flexDirection="row" alignItems="center" justifyContent="space-between">

                <Typography fontWeight={700} justifySelf="flex-end">
            Total Price : ${calculatePrice()}{" "}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "capitalize", color: "white", maxWidth: 300 }}
          >
            Order all
          </Button>
        </Stack>
        }
      </Container>
    </Stack>
  );
};

export default Cart;
