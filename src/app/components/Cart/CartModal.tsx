"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import cartImage from "../../assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import OrangeButton from "../Buttons/OrangeButton";
import { useCart } from "@/app/hooks/CartContext";
import QuantityCounter from "../QuantityCounter";
import { MdClose } from "react-icons/md";
import CartItemInfo from "./CartItemInfo";
import Link from "next/link";
import CartCountBadge from "./CartCountBadge";

export default function CartModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, updateQuantity, removeItem, removeAll, totalCost } = useCart();

  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    updateQuantity(itemId, newQuantity);
  };

  // const totalCost = cart.reduce((total, item) => {
  //   return total + item.price * item.quantity;
  // }, 0);

  return (
    <>
      <Button onClick={onOpen} variant="link">
        <Image src={cartImage} alt="" />
        {cart.length !== 0 && (
          <div className="flex justify-start">
            <CartCountBadge cartCount={cart.length} />
          </div>
        )}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          containerProps={{ justifyContent: "flex-end", paddingRight: "2rem" }}
        >
          <ModalHeader className="flex flex-row justify-between items-center">
            <h3 className="tracking-wide font-bold">CART ({cart.length})</h3>
            {cart.length > 0 ? (
              <button
                className="text-sm tracking-wide hover:text-[#D87D4A] cursor-pointer"
                onClick={removeAll}
              >
                Remove all
              </button>
            ) : (
              <ModalCloseButton />
            )}
          </ModalHeader>
          <ModalBody>
            {cart.length > 0 ? (
              <>
                <ul>
                  {cart.map((item) => (
                    <li key={item.id} className="mb-5">
                      <div className="grid grid-cols-2">
                        <CartItemInfo item={item} />

                        <div className="flex flex-row gap-4 justify-end items-center">
                          <QuantityCounter
                            quantityCount={item.quantity}
                            onChange={(newQuantity) =>
                              handleUpdateQuantity(item.id, newQuantity)
                            }
                          />
                          <MdClose
                            onClick={() => removeItem(item.id, item.name)}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row justify-between items-center mt-10">
                  <p className="text-slate-500 text-lg">TOTAL</p>
                  <p className="font-bold tracking-widest text-lg">
                    $ {totalCost?.toLocaleString()}
                  </p>
                </div>
              </>
            ) : (
              <h1 className="text-md font-bold text-center text-slate-400 tracking-widest">
                CART IS EMPTY
              </h1>
            )}
          </ModalBody>
          <ModalFooter>
            {cart.length > 0 && (
              <Link href="/checkout" className="w-full">
                <OrangeButton
                  customText="CHECKOUT"
                  takeUpFullWidth
                  onClick={onClose}
                />
              </Link>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
