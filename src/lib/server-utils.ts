"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getDecodedToken() {
  const cookieStore = await cookies();
  const encodedToken =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;

  const decodedToken = await decode({
    token: encodedToken,
    secret: process.env.AUTH_SECRET!,
  });

  return decodedToken;
}

export async function getUserToken() {
  console.log("decodedToken", (await getDecodedToken())!.token);

  return (await getDecodedToken())!.token;
}

export async function getUserId() {
  console.log("decodedToken", (await getDecodedToken())!.sub);

  return (await getDecodedToken())!.sub;
}
