"use client";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { PaymentSchemaType } from "../page";
import InputLabel from "./InputLabel";
import SectionLabel from "./SectionLabel";
import CashDeliveryPic from "../../assets/checkout/icon-cash-on-delivery.svg";
import Image from "next/image";

interface Props {
  errors: FieldErrors<PaymentSchemaType>;
  register: UseFormRegister<PaymentSchemaType>;
  control: Control<PaymentSchemaType>;
  watch: UseFormWatch<PaymentSchemaType>;
}

export const Form = ({ register, errors, control, watch }: Props) => {
  const paymentSelection = watch("paymentMethod", "1");

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-3xl tracking-wider">CHECKOUT</h1>
        <p className="text-xs text-gray-400 w-1/2 italic text-justify">
          *This application is for demonstration purposes only. Any data
          submitted through this form is neither collected nor used for any
          purpose other than submission validation.
        </p>
      </div>
      <SectionLabel label="BILLING DETAILS" />

      <div className="grid md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <FormControl isInvalid={errors?.name ? true : false}>
            <FormLabel>
              <InputLabel label="NAME" />
            </FormLabel>
            <Input type="text" {...register("name")} />

            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
        </div>

        {/* Email */}
        <div>
          <FormControl isInvalid={errors?.email ? true : false}>
            <FormLabel>
              <InputLabel label="EMAIL" />
            </FormLabel>
            <Input type="email" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        </div>

        {/* Phone Number */}
        <div>
          <FormControl isInvalid={errors?.phoneNumber ? true : false}>
            <FormLabel>
              <InputLabel label="TELEPHONE" />
            </FormLabel>
            <Input {...register("phoneNumber")} />
            <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
          </FormControl>
        </div>
      </div>

      <SectionLabel label="SHIPPING INFO" />

      {/* Address */}
      <div>
        <FormControl isInvalid={errors?.address ? true : false}>
          <FormLabel>
            <InputLabel label="ADDRESS" />
          </FormLabel>
          <Input type="text" {...register("address")} />
          <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
        </FormControl>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-5">
        {/* Post / Zip Code */}
        <div>
          <FormControl isInvalid={errors?.postcode ? true : false}>
            <FormLabel>
              <InputLabel label="POST / ZIP CODE" />
            </FormLabel>
            <Input type="text" {...register("postcode")} />
            <FormErrorMessage>{errors.postcode?.message}</FormErrorMessage>
          </FormControl>
        </div>

        {/* City */}
        <div>
          <FormControl isInvalid={errors?.city ? true : false}>
            <FormLabel>
              <InputLabel label="CITY" />
            </FormLabel>
            <Input type="text" {...register("city")} />
            <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
          </FormControl>
        </div>

        {/* Country */}
        <div>
          <FormControl isInvalid={errors?.country ? true : false}>
            <FormLabel>
              <InputLabel label="COUNTRY" />
            </FormLabel>
            <Input type="text" {...register("country")} />
            <FormErrorMessage>{errors.country?.message}</FormErrorMessage>
          </FormControl>
        </div>
      </div>

      <SectionLabel label="PAYMENT DETAILS" />

      <div className="grid md:grid-cols-2 gap-4">
        <InputLabel label="PAYMENT METHOD" />
        <FormControl>
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                onChange={onChange}
                value={value}
                defaultValue="1"
                defaultChecked
              >
                <Stack>
                  <div className="border border-[#E2E8F0] rounded-lg p-4">
                    <Radio value="1">e-Money</Radio>
                  </div>
                  <div className="border border-[#E2E8F0] rounded-lg p-4">
                    <Radio value="2">Cash on Delivery</Radio>
                  </div>
                </Stack>
              </RadioGroup>
            )}
          />
        </FormControl>
      </div>

      {paymentSelection === "1" ? (
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {/* e-Money Number */}
          <div>
            <FormControl isInvalid={errors?.emoneyNumber ? true : false}>
              <FormLabel>
                <InputLabel label="E-MONEY NUMBER" />
              </FormLabel>
              <Input {...register("emoneyNumber")} />
              <FormErrorMessage>
                {errors.emoneyNumber?.message}
              </FormErrorMessage>
            </FormControl>
          </div>

          {/* e-Money PIN */}
          <div>
            <FormControl isInvalid={errors?.emoneyPin ? true : false}>
              <FormLabel>
                <InputLabel label="E-MONEY PIN" />
              </FormLabel>
              <Input {...register("emoneyPin")} />
              <FormErrorMessage>{errors.emoneyPin?.message}</FormErrorMessage>
            </FormControl>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-10 mt-10 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Image src={CashDeliveryPic} alt="" />
          </div>
          <div className="md:col-span-8">
            <p className="text-md text-justify text-gray-400 mt-5 md:mt-0">
              The 'Cash on Delivery' option enables you to pay in cash when your
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
