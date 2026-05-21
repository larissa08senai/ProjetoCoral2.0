"use server";

import prisma from "../lib/prisma";
import {revalidatePath} from "next/cache";

export async function salvarCadastro(formData: FormData) {
    const nomeCliente = formData.get("nomeCliente") as string;
    const emailCliente = formData.get("emailCliente") as string;
    const telefone = formData.get("telefone") as string;

    await prisma.cliente.create({
        data: {
            nomeCliente,
            emailCliente,
            telefone,
        },
    });

    revalidatePath("/cliente");
}
