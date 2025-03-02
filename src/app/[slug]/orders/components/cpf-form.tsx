"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { FormField } from "@/components/ui/form";
import { FormControl, FormLabel } from "@/components/ui/form";
import { FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { validateCPF } from "../../menu/helpers/cpf";
const formSchema = z.object({
    cpf: z
      .string()
      .trim()
      .min(1, {
        message: "O CPF é obrigatório",
      })
      .refine((value) => validateCPF(value), {
        message: "CPF inválido",
      }),
  });

type FormSchema = z.infer<typeof formSchema>;

const CpfForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

    const router = useRouter();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  const handleCancel = () => {
    router.back();
  };

  return (
  <Drawer open>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem className="px-4">
                    <FormLabel>Seu CPF</FormLabel>
                    <FormControl>
                      <PatternFormat
                        placeholder="Digite seu cpf"
                        format="###.###.###-##"
                        customInput={Input}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <DrawerFooter>
      <Button variant="destructive" className="rounded-full w-full">Confirmar</Button>
      <DrawerClose asChild>
        <Button variant="outline" className="rounded-full w-full" onClick={handleCancel}>Cancelar</Button>
      </DrawerClose>
    </DrawerFooter>
      </form>
    </Form>
  </DrawerContent>
</Drawer>
);
};

export default CpfForm;
