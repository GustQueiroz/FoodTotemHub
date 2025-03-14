"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { validateCPF } from "../../menu/helpers/cpf";
const FormSchema = z.object({
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

type FormSchema = z.infer<typeof FormSchema>;

const CpfForm = () => {
const form = useForm<FormSchema>({
  resolver: zodResolver(FormSchema)
})

const router = useRouter()
const pathname = usePathname()

const onSubmit = (data: FormSchema) => {
  const cleanCPF = data.cpf.replace(/\D/g, "");
  router.replace(`${pathname}?cpf=${cleanCPF}`);
}
const handleCancel = () => {
  router.back()
}

  return (
    <Drawer open>
    <DrawerTrigger></DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Visualizar pedidos</DrawerTitle>
        <DrawerDescription>Insira seu CPF abaixo para visualizar seus pedidos.</DrawerDescription>
      </DrawerHeader>
      <div className="px-5">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
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
        <DrawerClose>
          <Button variant="outline" className="rounded-full w-full" onClick={handleCancel}>Cancelar</Button>
        </DrawerClose>
      </DrawerFooter>
      </form>
    </Form>
    </div>

    </DrawerContent>
  </Drawer>
);
};

export default CpfForm;
