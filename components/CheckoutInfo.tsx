"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/cartStore";
import { PaystackButton } from "react-paystack";

const CheckoutInfo = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [deliverycity, setDeliveryCity] = useState<string>("");
  const [deliveryphone, setDeliveryPhone] = useState<string>("");
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
  const { clearCart, getTotalPrice } = useCartStore();

  const billings = {
    discount: 0.9,
    total: getTotalPrice(),
  };

  const amount = Math.round(billings.total * 1500 * billings.discount * 100);

  const router = useRouter();

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "SurName",
          variable_name: "surname",
          value: surname,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phone,
        },
        {
          display_name: "City",
          variable_name: "city",
          value: city,
        },
        {
          display_name: "Address",
          variable_name: "address",
          value: address,
        },
        {
          display_name: "Delivery Phone Number",
          variable_name: "deliveryphone",
          value: deliveryphone,
        },
        {
          display_name: "Delivery City",
          variable_name: "delivery-city",
          value: deliverycity,
        },
      ],
    },
    publicKey,
    text: "CONTINUE TO PAYMENT",
    onSuccess: () => {
      clearCart(), router.push("/success");
    },
    onClose: () => alert("Wait! don't go :("),
  };

  return (
    <div>
      <div>
        <h3 className="uppercase text-[1.65rem] py-6">Contact information</h3>
        <div className="grid grid-cols-2 gap-x-4 pb-2">
          <div>
            <Label htmlFor="name" className="text-sm text-slate-400">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <Label htmlFor="surname" className="text-sm text-slate-400">
                Surname*
              </Label>
              <Input
                id="surname"
                value={surname}
                onChange={(e) => setSurName(e.target.value)}
                className="h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0"
              />
            </div>
            <div>
              <Label htmlFor="city" className="text-sm text-slate-400">
                City*
              </Label>
              <Input
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <Label htmlFor="phone-number" className="text-sm text-slate-400">
              Phone Number*
            </Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm text-slate-400">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="uppercase text-[1.65rem] py-6">Delivery information</h3>
        <div className="grid grid-cols-2 gap-x-4 pb-2">
          <div>
            <Label htmlFor="address" className="text-sm text-slate-400">
              Address
            </Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0"
            />
          </div>
          <div>
            <Label htmlFor="delivery-city" className="text-sm text-slate-400">
              City*
            </Label>
            <Input
              id="delivery-city"
              value={deliverycity}
              onChange={(e) => setDeliveryCity(e.target.value)}
              className="h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0"
            />
          </div>
        </div>
        <div>
          <Label
            htmlFor="delivery-phone-number"
            className="text-sm text-slate-400"
          >
            Phone Number*
          </Label>
          <Input
            id="delivery-phone"
            value={deliveryphone}
            onChange={(e) => setDeliveryPhone(e.target.value)}
            className="h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0"
          />
        </div>
      </div>
      <div className="flex justify-between py-20">
        <Link href="/cart">
          <Button
            size="default"
            className="uppercase rounded-sm bg-white text-black hover:text-white border border-black"
          >
            Go Back
          </Button>
        </Link>
        <PaystackButton
          className="text-white bg-black border-black border rounded-sm h-10 px-8"
          {...componentProps}
        />
      </div>
    </div>
  );
};

export default CheckoutInfo;
