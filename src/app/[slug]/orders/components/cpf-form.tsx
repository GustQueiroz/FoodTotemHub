"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
      
  return <div>CpfForm</div>;
};

export default CpfForm;
