"use client";
import React, { useState } from "react";
import Form from "./Form/Form";
import Summary from "./Summary/Summary";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Divider, useDisclosure, Spinner } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

import Tick from "../assets/checkout/icon-order-confirmation.svg";
import Image from "next/image";
import { useCart } from "../hooks/CartContext";
import CartItemInfo from "../components/Cart/CartItemInfo";
import OrangeButton from "../components/Buttons/OrangeButton";
import Link from "next/link";

// export interface FormData {
//   name: string;
//   email: string;
//   phoneNumber: string;
//   address: string;
//   postcode: string;
//   city: string;
//   country: string;
//   paymentMethod: string;
//   emoneyNumber: string;
//   emoneyPin: string;
// }

const paymentSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    phoneNumber: z.string().min(5),
    address: z.string().min(1),
    postcode: z.string().min(2),
    city: z.string().min(2),
    country: z.string().min(2),
    paymentMethod: z.string(),
    emoneyNumber: z.string(),
    emoneyPin: z.string(),
  })
  .refine((data) => {
    if (data.paymentMethod === "1") {
      return data.emoneyNumber.trim() !== "" && data.emoneyPin.trim() !== "";
    }
    return true;
  }, "E-MONEY NUMBER and E-MONEY PIN are required when payment method is e-Money (1)");

export type PaymentSchemaType = z.infer<typeof paymentSchema>;

const CheckoutPage = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    control,
  } = useForm<PaymentSchemaType>({
    resolver: zodResolver(paymentSchema),
  });
  const { cart, totalCost, removeAll } = useCart();
  const finalCost = totalCost! >= 1000 ? totalCost : totalCost! + 50;
  const formattedFinalCost = finalCost!.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAllItems, setShowAllItems] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<PaymentSchemaType> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpen();
    }, 2000);
  };

  function handleClose() {
    onClose();
    removeAll();
  }

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner size="xl" color="orange.500" />
        </div>
      )}
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-16 gap-12">
          <div className="lg:col-span-2 bg-[#FFFFFF] p-8 rounded-lg self-start">
            <Form
              register={register}
              errors={errors}
              control={control}
              watch={watch}
            />
          </div>
          <div className="lg:col-span-1 bg-[#FFFFFF] p-8 rounded-lg self-start">
            <Summary onSubmit={handleSubmit(onSubmit)} />
          </div>
        </div>
      </form>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        isCentered
        closeOnOverlayClick={false}
        motionPreset="slideInTop"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="mt-5 ml-5">
            <Image src={Tick} alt="" />
          </ModalHeader>
          <ModalBody className="m-5">
            <h1 className="font-bold text-3xl tracking-wider w-2/3">
              THANK YOU FOR YOUR ORDER
            </h1>
            <p className="text-gray-400 my-8">
              You will receive an email confirmation shortly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#F1F1F1] flex flex-col p-5">
                <div className="pb-5 flex flex-col gap-5">
                  {cart.map(
                    (item, index) =>
                      (showAllItems || index === 0) && (
                        <div className="grid grid-cols-4" key={item.id}>
                          <div className="col-span-3">
                            <CartItemInfo item={item} compact />
                          </div>
                          <div className="col-span-1">
                            <p className="flex justify-end font-bold text-gray-500">
                              x {item.quantity}
                            </p>
                          </div>
                        </div>
                      )
                  )}
                </div>
                <Divider />
                {cart.length !== 1 && (
                  <div className="pt-3">
                    <Button
                      variant="link"
                      className="w-full"
                      onClick={() => setShowAllItems(!showAllItems)}
                    >
                      <span className="text-sm">
                        {!showAllItems
                          ? `and ${cart.length - 1} other items(s)`
                          : "View less"}
                      </span>
                    </Button>
                  </div>
                )}
              </div>
              <div className="bg-black flex flex-col justify-center px-8 gap-3 text-xl sm:py-8">
                <p className="text-gray-400 font-semibold tracking-wider">
                  GRAND TOTAL
                </p>
                <p className="text-white font-bold tracking-wide">
                  $ {formattedFinalCost}
                </p>
              </div>
            </div>
          </ModalBody>

          <ModalFooter className="mx-5 mb-5">
            <Link href="/" className="w-full">
              <OrangeButton
                takeUpFullWidth
                customText="BACK TO HOME"
                onClick={handleClose}
              />
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckoutPage;
